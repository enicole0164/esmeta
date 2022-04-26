package esmeta.editor.analyzer

import esmeta.DEBUG
import esmeta.editor.exploded
import esmeta.ir.*
import esmeta.cfg.*
import esmeta.interp.*
import esmeta.ir.{Func => IRFunc}
import esmeta.error.RemainingParams
import esmeta.error.ESMetaError
import scala.annotation.tailrec
import esmeta.util.BaseUtils.*

extension (kind: Branch.Kind)
  def isLoop = kind match { case Branch.Kind.Loop(_) => true; case _ => false }

class AbsTransfer[ASD <: AbsStateDomain[_] with Singleton, T <: AbsSemantics[
  ASD,
] with Singleton](val sem: T, ignoreCond: Boolean = false) {

  type AbsValue = sem.AbsValue
  type AbsState = sem.AbsState
  type AbsRet = sem.AbsRet
  type AbsObj = sem.AbsState.AbsObj
  val AbsValue: sem.AbsValue.type = sem.AbsValue
  val AbsState: sem.AbsState.type = sem.AbsState
  val AbsObj: sem.AbsState.AbsObj.type = sem.AbsState.AbsObj
  val AbsRet: sem.AbsRet.type = sem.AbsRet

  import AbsValue.*

  // loading monads
  import AbsState.monad.*

  def apply(cp: ControlPoint): Unit = cp match {
    case (np: NodePoint[_]) => this(np)
    case (rp: ReturnPoint)  => this(rp)
  }

  def apply[T <: Node](np: NodePoint[T]): Unit = {
    // println(s"APPLY ${np.func.name} ${np.view}: ${np.node}")
    val st = sem(np)
    // println(st)
    val NodePoint(func, node, view) = np
    val helper = Helper(np)

    import helper.*
    node match {
      case block @ Block(_, insts, next) =>
        val newSt = insts.foldLeft(st) {
          case (st, inst) => transfer(inst)(st)
        }
        next.foreach((next: Node) => sem += getNextNp(np, next) -> newSt)
      case call @ Call(_, _, _, _, next) =>
        val newSt = transfer(call)(st)
        next.foreach((next: Node) => sem += getNextNp(np, next) -> newSt)
      case Branch(id, kind, cond, thenNode, elseNode) =>
        (for {
          v <- escape(transfer(cond))
          st <- get
        } yield {
          if (ignoreCond || AbsValue(Bool(true)) ⊑ v)
            thenNode.map((thenNode: Node) =>
              sem += getNextNp(np, thenNode) -> st,
            )
          if (ignoreCond || AbsValue(Bool(false)) ⊑ v)
            elseNode.map((elseNode: Node) =>
              sem += getNextNp(
                np,
                elseNode,
                kind.isLoop,
              ) -> st,
            )
        })(st)
    }
  }

  // get next node points (intra)
  def getNextNp(
    fromCp: NodePoint[Node],
    to: Node,
    loopOut: Boolean = false,
  ): NodePoint[Node] = {
    val NodePoint(func, from, view) = fromCp
    val toView =
      if (sem.maxIJK.maxLoopDepth == 0) view
      else
        to match {
          case (
                loop @ Branch(id, Branch.Kind.Loop(_), _, _, _),
              ) =>
            if (
              view.loops.headOption
                .map((x) => x.loopId == id)
                .getOrElse(false)
            ) sem.loopNext(view)
            else if (loopOut) sem.loopExit(view)
            else sem.loopEnter(view, loop)
          case (_) if (loopOut) =>
            sem.loopExit(view)
          case _ => view
        }
    NodePoint(func, to, toView)
  }

  def apply(rp: ReturnPoint): Unit = {
    var ret @ AbsRet(value, st) = sem(rp)

    // proper type handle
    // Interp.setTypeMap.get(rp.func.name).map(ty => {
    //  if (!value.loc.isBottom) st = st.setType(value.loc, ty)
    // })

    // debugging message
    if (DEBUG) println(s"<RETURN> $ret")

    // return wrapped values
    for (np @ NodePoint(func, call, view) <- sem.getRetEdges(rp)) {
      val callerSt = sem.callInfo(np)
      val nextNode = call.next.get
      val nextNp = NodePoint(
        func,
        nextNode,
        nextNode match {
          case loop @ Branch(_, Branch.Kind.Loop(_), _, _, _) =>
            sem.loopNext(view)
          case _ => view
        },
      )

      val newSt = st.doReturn(
        callerSt,
        call.lhs -> value.wrapCompletion,
      )

      sem += nextNp -> newSt
    }
  }

  // transfer function for expressions
  def apply(cp: ControlPoint, expr: Expr): AbsValue = {
    val st = sem.getState(cp)
    val helper = new Helper(cp)
    helper.transfer(expr)(st)._1
  }

  class Helper(val cp: ControlPoint) {
    lazy val func = cp.func
    lazy val view = cp.view
    lazy val rp = ReturnPoint(func, view)

    def transfer(inst: NormalInst): Updater = inst match {
      case IExpr(expr) =>
        for {
          v <- transfer(expr)
        } yield v
      case ILet(id, expr) =>
        for {
          v <- transfer(expr)
          _ <- modify(_.defineLocal(id -> v))
        } yield ()
      case IAssign(ref, expr) =>
        for {
          rv <- transfer(ref)
          v <- transfer(expr)
          _ <- modify(_.update(rv, v))
        } yield ()
      case IDelete(ref) =>
        for {
          rv <- transfer(ref)
          _ <- modify(_.delete(rv))
        } yield ()
      case IPush(expr, list, front) =>
        for {
          l <- escape(transfer(list))
          loc = l.project(LocKind)
          v <- escape(transfer(expr))
          _ <- modify((st) =>
            if (front) st.prepend(loc, v) else st.append(loc, v),
          )
        } yield ()
      case IRemoveElem(list, elem) =>
        for {
          l <- escape(transfer(list))
          v <- escape(transfer(elem))
          _ <- modify(_.remove(l, v))
        } yield ()
      case IReturn(expr) =>
        for {
          v <- transfer(expr)
          _ <- doReturn(v)
          _ <- put(AbsState.Bot)
        } yield ()
      case IAssert(expr) =>
        for {
          v <- transfer(expr)
        } yield ()
      case IPrint(expr) => st => st
      case INop()       => st => st
    }

    // return specific value
    def doReturn(v: AbsValue): Result[Unit] = for {
      st <- get
      ret = AbsRet(v, st.replaceLocal())
      _ = sem.doReturn(rp, ret)
    } yield ()

    // transfer function for calls
    def transfer(call: Call): Updater = (st: AbsState) =>
      try {
        // println(s"A ${call.fexpr}")
        val (value, st2) = escape(transfer(call.fexpr))(st)
        (for {
          vs <- join(call.args.map(transfer))
          st <- get
          isCalled = {
            var v = false
            // closures
            if (AbsValue.Top ⊑ value)
              println(s"${cp.func.name}, ${cp.func.irFunc}, $call, $value")
            for (AClo(func, captured) <- value.getSet(CloKind)) {
              val newLocals = captured ++ getLocals(func.irFunc.params, vs)
              val newSt = st.replaceLocal(newLocals.toSeq: _*)
              sem.doCall(call, view, st, func, newSt)
              v = true
            }
            for (ACont(func, captured) <- value.getSet(ContKind)) {
              val newLocals = captured ++ getLocals(func.irFunc.params, vs)
              val newSt = st.replaceLocal(newLocals.toSeq: _*)
              sem += NodePoint(func, func.entry.get, view) -> newSt
            }
            v
          }
          _ <-
            if (isCalled)
              put(AbsState.Bot)
            else
              value.getHandler match {
                case Some(name, f) => {
                  sem.ignoreRetEdges += (name -> (sem.ignoreRetEdges.getOrElse(
                    name,
                    Set(),
                  ) + NodePoint(func, call, view)));
                  modify(_.defineLocal(call.lhs -> f(vs)))
                }
                case None => modify(_.defineLocal(call.lhs -> AbsValue.Top))
              }
        } yield ())(st2)._2
      } catch {
        case st.SyntacticCalled(absv, sdo) =>
          ({
            // println("B");
            for {
              vs <- join(call.args.map(transfer))
              _ = {
                val vs2 = vs match
                  case h :: tail => absv :: tail
                  case _         => error("invalid SDO call")
                val newLocals = getLocals(sdo.irFunc.params, vs2)
                val newSt = st.replaceLocal(newLocals.toSeq: _*)
                sem.doCall(call, view, st, sdo, newSt)
              }
              _ <- put(AbsState.Bot)
            } yield ()
          })(st)._2
        case st.LexicalCalled(v) =>
          (for {
            _ <- modify(_.defineLocal(call.lhs -> AbsValue(v)))
          } yield ())(st)._2
      }

    // transfer function for expressions
    def transfer(expr: Expr): Result[AbsValue] = expr match {
      case EMathVal(n)           => AbsValue(Math(n))
      case ENumber(n) if n.isNaN => AbsValue(Number(Double.NaN))
      case ENumber(n)            => AbsValue(Number(n))
      case EBigInt(n)            => AbsValue(BigInt(n))
      case EStr(str)             => AbsValue(Str(str))
      case EBool(b)              => AbsValue(Bool(b))
      case EUndef                => AbsValue(Undef)
      case ENull                 => AbsValue(Null)
      case EAbsent               => AbsValue(Absent)
      case EConst(name)          => AbsValue(Const(name))
      case ECodeUnit(c)          => AbsValue(CodeUnit(c))
      case EComp(ty, value, target) =>
        for {
          y <- escape(transfer(ty))
          v <- escape(transfer(value))
          origT <- escape(transfer(target))
          t = origT.project(StrKind).project(ConstKind)
        } yield ((for {
          ALiteral(Const(name)) <- y.getSet(ConstKind)
        } yield AbsValue.mkAbsComp(name, v, t)).foldLeft(AbsValue.Bot)(_ ⊔ _))
      case map @ EMap(ty, props) => {
        val loc: AllocSite = AllocSite(map.asite, cp.view)
        for {
          pairs <- join(props.map {
            case (kexpr, vexpr) =>
              for {
                k <- transfer(kexpr)
                v <- transfer(vexpr)
              } yield (k, v)
          })
          _ <- modify(_.allocMap(ty, pairs)(loc))
        } yield AbsValue(loc)
      }
      case list @ EList(exprs) => {
        val loc: AllocSite = AllocSite(list.asite, cp.view)
        for {
          vs <- join(exprs.map(transfer))
          _ <- modify(_.allocList(vs.map(_.escaped))(loc))
        } yield AbsValue(loc)
      }
      case lconcat @ EListConcat(exprs) => {
        val loc: AllocSite = AllocSite(lconcat.asite, cp.view)
        for {
          vs <- join(exprs.map((v) => (escape(transfer(v)))))
          st <- get
          obj = vs
            .map((v) =>
              v.getSet(LocKind).map(st(_)).foldLeft(AbsObj.Bot)(_ ⊔ _),
            )
            .foldLeft(AbsObj.Bot)(_ concat _)
          _ <- modify(_.alloc(obj)(loc))
        } yield AbsValue(loc)
      }
      case symbol @ ESymbol(desc) => {
        val loc: AllocSite = AllocSite(symbol.asite, cp.view)
        for {
          v <- transfer(desc)
          newV = v.project(StrKind).project(UndefKind)
          _ <- modify(_.allocSymbol(newV)(loc))
        } yield AbsValue(loc)
      }
      case EPop(list, front) =>
        for {
          l <- escape(transfer(list))
          loc = l.project(LocKind)
          v <- id(_.pop(loc, front))
        } yield v
      case ERef(ref) =>
        for {
          rv <- transfer(ref)
          v <- transfer(rv)
        } yield v
      case EUnary(uop, expr) =>
        for {
          x <- escape(transfer(expr))
          v <- get(transfer(_, uop, x))
        } yield v
      case EBinary(BOp.And, left, right) => shortCircuit(BOp.And, left, right)
      case EBinary(BOp.Or, left, right)  => shortCircuit(BOp.Or, left, right)
      case EBinary(BOp.Eq, ERef(ref), EAbsent) =>
        for {
          rv <- transfer(ref)
          b <- get(_.exists(rv))
        } yield !b
      case EBinary(bop, left, right) =>
        for {
          l <- escape(transfer(left))
          r <- escape(transfer(right))
          v <- get(transfer(_, bop, l, r))
        } yield v
      case ETypeOf(expr) =>
        for {
          value <- escape(transfer(expr))
          st <- get
        } yield {
          var set = scala.collection.mutable.Set[String]()
          if (!value.project(LocKind).isBottom)
            for (loc <- value.getSet(LocKind)) {
              set += (if (
                        sem.cfgHelper.cfg.typeModel
                          .subType(st(loc).getType.name, "Object")
                      ) "Object"
                      else st(loc).getType.name)
            }
          if (!value.project(NumKind).isBottom) set += "Number"
          if (!value.project(BigIntKind).isBottom) set += "BigInt"
          if (!value.project(StrKind).isBottom) set += "String"
          if (!value.project(BoolKind).isBottom) set += "Boolean"
          if (!value.project(UndefKind).isBottom) set += "Undefined"
          if (!value.project(NullKind).isBottom) set += "Null"
          AbsValue.fromAValues(StrKind)(
            set.map((s) => ALiteral(Str(s))).toSeq: _*,
          )
        }
      case EIsCompletion(expr) =>
        for {
          v <- transfer(expr)
        } yield v.isCompletion
      case ETypeCheck(base, tyExpr) =>
        for {
          origB <- transfer(base)
          ty <- escape(transfer(tyExpr))
          b = origB.escaped
          st <- get
        } yield AbsValue.Top.project(BoolKind)
      case EContains(list, elem) =>
        for {
          l <- escape(transfer(list))
          v <- escape(transfer(elem))
          b <- get(_.contains(l.project(LocKind), v))
        } yield b
      case EReturnIfAbrupt(rexpr @ ERef(ref), check) =>
        for {
          rv <- transfer(ref)
          v <- transfer(rv)
          newV <- returnIfAbrupt(v, check)
          _ <- modify(_.update(rv, newV))
        } yield newV
      case EReturnIfAbrupt(expr, check) =>
        for {
          v <- transfer(expr)
          newV <- returnIfAbrupt(v, check)
        } yield newV
      case copy @ ECopy(obj) => {
        val loc: AllocSite = AllocSite(copy.asite, cp.view)
        for {
          v <- escape(transfer(obj))
          _ <- modify(_.copyObj(v.project(LocKind))(loc))
        } yield AbsValue(loc)
      }
      case keys @ EKeys(mobj, intSorted) => {
        val loc: AllocSite = AllocSite(keys.asite, cp.view)
        for {
          v <- escape(transfer(mobj))
          _ <- modify(_.keys(v.project(LocKind), intSorted)(loc))
        } yield AbsValue(loc)
      }

      // TODO
      case EParse(_, _)           => AbsValue.Top
      case EGrammar(name, params) => AbsValue(Grammar(name, params))
      case ESourceText(_)         => AbsValue.Top
      case EYet(_)                => AbsValue.Top
      case ESubstring(expr, from, to) =>
        for {
          s <- escape(transfer(expr))
          f <- escape(transfer(from))
          t <- escape(transfer(to))
        } yield AbsValue.Top // TODO
      case EVariadic(vop, exprs) =>
        for {
          vs <- join(exprs.map((e) => escape(transfer(e))))
          v <- transfer(vop, vs)
        } yield v
      case EConvert(_, _)   => AbsValue.Top
      case EDuplicated(_)   => AbsValue.Top
      case EIsArrayIndex(_) => AbsValue.Top
      case EClo(fname, captured) =>
        for {
          st <- get
          v = {
            val func = sem.cfgHelper.cfg.fnameMap
              .get(fname)
            func
              .map((func) =>
                AbsValue(
                  AClo(func, Map.from(captured.map(x => x -> st(x, cp)))),
                ),
              )
              .getOrElse(AbsValue.Top.setAllowTopClo())
          }
        } yield v
      case ECont(fname) =>
        for {
          st <- get
          v = {
            val func = sem.cfgHelper.cfg.fnameMap
              .getOrElse(fname, error("invalid function name"))
            val captured: Map[Name, AbsValue] = st.getLocal.collect {
              case (id: Name, v) => (id, v)
            }
            AbsValue(ACont(func, captured))
          }
        } yield v
      case ESyntactic(name, args, rhsIdx, children) =>
        for {
          childrens <- join(
            children.map((o: Option[Expr]) =>
              o.map((e) =>
                e.flatMap((e) => transfer(e).map[Option[AbsValue]](Some(_))),
              ).getOrElse(pure[Option[AbsValue]](None)),
            ),
          )
        } yield AbsValue.Top // TODO
      case ELexical(name, expr) =>
        for {
          str <- escape(transfer(expr))
        } yield AbsValue.Top // TODO
      case EGetChildren(kind, ast) =>
        for {
          k <- escape(transfer(kind))
          a <- escape(transfer(ast))
        } yield AbsValue.Top // TODO
    }

    def transfer(vop: VOp, vs: List[AbsValue]): AbsValue =
      import VOp.*
      if (vs.isEmpty) error(s"no arguments for: $vop")
      vop match
        case Min =>
          val set = scala.collection.mutable.Set[AbsValue]()
          if (vs.exists(AbsValue(NEG_INF) ⊑ _)) set += AbsValue(NEG_INF)
          val filtered = vs.filter((v) => !(AbsValue(POS_INF) ⊑ v))
          if (filtered.isEmpty) set += AbsValue(POS_INF)
          set += vopInterp(_.project(MathKind), _ min _, filtered)
          set.foldLeft(AbsValue.Bot)(_ ⊔ _)
        case Max =>
          val set = scala.collection.mutable.Set[AbsValue]()
          if (vs.exists(AbsValue(POS_INF) ⊑ _)) set += AbsValue(POS_INF)
          val filtered = vs.filter((v) => !(AbsValue(NEG_INF) ⊑ v))
          if (filtered.isEmpty) set += AbsValue(NEG_INF)
          set += vopInterp(_.project(MathKind), _ min _, filtered)
          set.foldLeft(AbsValue.Bot)(_ ⊔ _)
        case Concat => vopInterp(_.project(StrKind), _ plus _, vs)

    /** helpers for make transition for variadic operators */

    private def vopInterp(
      f: AbsValue => AbsValue,
      op: (AbsValue, AbsValue) => AbsValue,
      vs: List[AbsValue],
    ) = vs.map(f).foldLeft(AbsValue.Bot)(op)

    // return if abrupt completion
    def returnIfAbrupt(
      value: AbsValue,
      check: Boolean,
    ): Result[AbsValue] = {
      val comp = value.project(CompKind)
      val checkReturn: Result[Unit] =
        if (check) doReturn(comp.removeNormal)
        else ()
      val newValue =
        comp.normal ⊔ value
          .project(LocKind) ⊔
        value.project(CloKind) ⊔
        value.project(ContKind) ⊔
        value.project(LiteralKind)
      for (_ <- checkReturn) yield newValue
    }

    // transfer function for references
    def transfer(ref: Ref): Result[AbsRefValue] = ref match {
      case id: Id => AbsIdValue(id)
      case Prop(ref, expr) =>
        for {
          rv <- transfer(ref)
          b <- transfer(rv)
          p <- escape(transfer(expr))
        } yield AbsPropValue(b, p)
    }

    // unary operators
    def transfer(
      st: AbsState,
      uop: UOp,
      operand: AbsValue,
    ): AbsValue = operand.getSingle(LiteralKind) match {
      case FlatBot => AbsValue.Bot
      case FlatElem(ALiteral(x)) =>
        AbsValue(Interp.interp(uop, x))
      case FlatTop =>
        uop match {
          case UOp.Neg   => AbsValue.Top
          case UOp.Not   => !operand.project(BoolKind)
          case UOp.BNot  => AbsValue.Top
          case UOp.Abs   => AbsValue.Top
          case UOp.Floor => AbsValue.Top
        }
    }

    // binary operators
    def transfer(
      st: AbsState,
      bop: BOp,
      left: AbsValue,
      right: AbsValue,
    ): AbsValue = (left.getSingle(), right.getSingle()) match {
      case (FlatBot, _) | (_, FlatBot) => AbsValue.Bot
      case (FlatElem(ALiteral(l)), FlatElem(ALiteral(r))) =>
        try { AbsValue(Interp.interp(bop, l, r)) }
        catch { case e: ESMetaError => AbsValue.Bot }
      case (FlatElem(l), FlatElem(r)) if bop == BOp.Eq || bop == BOp.Equal =>
        (l, r) match {
          case (lloc: Loc, rloc: Loc) =>
            if (lloc == rloc) {
              if (st.isSingle(lloc)) AbsValue(Bool(true))
              else
                AbsValue.fromAValues(BoolKind)(
                  ALiteral(Bool(true)),
                  ALiteral(Bool(false)),
                )
            } else AbsValue(Bool(false))
          case (_, _) => AbsValue(Bool(l == r))
        }
      case _ =>
        bop match {
          case BOp.And     => left.project(BoolKind) && right.project(BoolKind)
          case BOp.BAnd    => AbsValue.Top
          case BOp.BOr     => AbsValue.Top
          case BOp.BXOr    => AbsValue.Top
          case BOp.Div     => AbsValue.Top
          case BOp.Eq      => left =^= right
          case BOp.Equal   => AbsValue.Top
          case BOp.LShift  => AbsValue.Top
          case BOp.Lt      => AbsValue.Top
          case BOp.Mod     => AbsValue.Top
          case BOp.Mul     => left mul right
          case BOp.Or      => left.project(BoolKind) || right.project(BoolKind)
          case BOp.Plus    => left plus right
          case BOp.Pow     => AbsValue.Top
          case BOp.SRShift => AbsValue.Top
          case BOp.Sub     => AbsValue.Top
          case BOp.UMod    => AbsValue.Top
          case BOp.URShift => AbsValue.Top
          case BOp.Xor     => AbsValue.Top
        }
    }

    // transfer function for reference values
    def transfer(rv: AbsRefValue): Result[AbsValue] = for {
      v <- get(_(rv, cp))
    } yield v

    // short circuit evaluation
    def shortCircuit(
      bop: BOp,
      left: Expr,
      right: Expr,
    ): Result[AbsValue] = for {
      l <- escape(transfer(left))
      v <- (bop, l.getSingle[ALiteral[Bool]](BoolKind)) match {
        case (BOp.And, FlatElem(ALiteral(Bool(false)))) =>
          pure(AbsValue(Bool(false)))
        case (BOp.Or, FlatElem(ALiteral(Bool(true)))) =>
          pure(AbsValue(Bool(true)))
        case _ =>
          for {
            r <- escape(transfer(right))
            v <- get(transfer(_, bop, l, r))
          } yield v
      }
    } yield v

    // get initial local variables
    import IRFunc.Param
    def getLocals(
      params: List[Param],
      args: List[AbsValue],
      cont: Boolean = false,
    ): scala.collection.mutable.Map[Local, AbsValue] = {
      val map = scala.collection.mutable.Map[Local, AbsValue]()

      @tailrec
      def aux(ps: List[Param], as: List[AbsValue]): Unit = (ps, as) match {
        case (Nil, Nil) =>
        case (Param(lhs, optional, _) :: pl, Nil) =>
          if (optional) {
            map += lhs -> AbsValue(Absent)
            aux(pl, Nil)
          } else RemainingParams(ps)
        case (Nil, args) =>
          // XXX Handle GeneratorStart <-> GeneratorResume arith mismatch
          if (!cont)
            throw ESMetaError(s"$cp, $params, $args, ${args.mkString(" ")}")
        case (param :: pl, arg :: al) =>
          map += param.lhs -> arg
          aux(pl, al)
      }
      aux(params, args)
      map
    }
  }

  // escape completions
  def escape(value: Result[AbsValue]): Result[AbsValue] = for {
    v <- value
  } yield v.escaped

}
