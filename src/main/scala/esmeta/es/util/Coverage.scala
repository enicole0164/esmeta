package esmeta.es.util

import esmeta.LINE_SEP
import esmeta.cfg.*
import esmeta.es.*
import esmeta.es.util.*
import esmeta.es.util.injector.*
import esmeta.interpreter.*
import esmeta.ir.{Expr, EParse, EReturnIfAbrupt, EBool}
import esmeta.state.*
import esmeta.ty.AstSingleTy
import esmeta.util.*
import esmeta.util.SystemUtils.*
import io.circe.*, io.circe.syntax.*
import math.Ordering.Implicits.seqOrdering

/** coverage measurement in CFG */
class Coverage(
  timeLimit: Option[Int] = None,
  synK: Option[Int] = None,
) {

  import Coverage.{*, given}

  // minimal scripts
  def minimalScripts: Set[Script] = _minimalScripts
  private var _minimalScripts: Set[Script] = Set()

  // meta-info of each script
  case class ScriptInfo(test: ConformTest, touchedNodeViews: Iterable[NodeView])
  private var _minimalInfo: Map[String, ScriptInfo] = Map()

  // target conditional branches
  def targetCondViews: Map[CondView, Option[Nearest]] = _targetCondViews
  private var _targetCondViews: Map[CondView, Option[Nearest]] = Map()

  // the number of minimal scripts
  def size: Int = counter.size

  // script reference counter
  private var counter: Map[Script, Int] = Map()

  // get mapping from views to scripts for nodes or conditions
  def apply(node: Node): Map[View, Script] = nodeViewMap.getOrElse(node, Map())
  def apply(cond: Cond): Map[View, Script] = condViewMap.getOrElse(cond, Map())

  // get script from nodes or conditions
  def getScript(nv: NodeView): Option[Script] = apply(nv.node).get(nv.view)
  def getScript(cv: CondView): Option[Script] = apply(cv.cond).get(cv.view)

  // mapping from nodes or conditions to scripts
  private var nodeViewMap: Map[Node, Map[View, Script]] = Map()
  private var nodeViews: Set[NodeView] = Set()
  private var condViewMap: Map[Cond, Map[View, Script]] = Map()
  private var condViews: Set[CondView] = Set()

  /** evaluate a given ECMAScript program, update coverage, and return
    * evaluation result with whether it succeeds to increase coverage
    */
  def runAndCheck(script: Script): (State, Boolean, Boolean) = {
    val Script(code, name) = script

    // run interpreter and record touched
    val initSt = cfg.init.from(script)
    val interp = Interp(initSt, timeLimit, synK)
    val finalSt = interp.result

    // update node coverage
    var covered = false
    var updated = false
    for ((nodeView, _) <- interp.touchedNodeViews)
      getScript(nodeView) match
        case None =>
          update(nodeView, script); updated = true; covered = true
        case Some(origScript) if origScript.code.length > code.length =>
          update(nodeView, script); updated = true
        case _ =>

    // update branch coverage
    for ((condView, _) <- interp.touchedCondViews)
      getScript(condView) match
        case None =>
          update(condView, script); updated = true; covered = true
        case Some(origScript) if origScript.code.length > code.length =>
          update(condView, script); updated = true
        case _ =>

    // update target branches
    for ((condView @ CondView(cond, view), nearest) <- interp.touchedCondViews)
      val neg = condView.neg
      cond.elem match
        case _ if nearest.isEmpty         => /* do nothing */
        case Branch(_, _, EBool(_), _, _) => /* do nothing */
        case ref: WeakUIdRef[EReturnIfAbrupt]
            if !ref.get.check => /* do nothing */
        case _ if getScript(neg).isDefined => _targetCondViews -= neg
        case _ => _targetCondViews += condView -> nearest

    // update script info
    if (updated)
      _minimalInfo += script.name -> ScriptInfo(
        ConformTest.createTest(initSt, finalSt),
        interp.touchedNodeViews.map(_._1),
      )
    // assert: _minimalScripts ~= _minimalInfo.keys

    (finalSt, updated, covered)
  }

  /** evaluate a given ECMAScript program, update coverage, and return
    * evaluation result
    */
  def run(script: Script): State = {
    val (st, _, _) = runAndCheck(script);
    st
  }

  /** get node coverage */
  def nodeCov: Int = nodeViewMap.size
  def nodeViewCov: Int = nodeViews.size

  /** get branch coverage */
  def branchCov: Int = condViewMap.size
  def branchViewCov: Int = condViews.size

  def dumpToWithDetail(baseDir: String, withMsg: Boolean = true): Unit = dumpTo(
    baseDir = baseDir,
    withScripts = true,
    withScriptInfo = true,
    withTargetCondViews = true,
    withUnreachableFuncs = true,
    withMsg = withMsg,
  )

  /** dump results */
  def dumpTo(
    baseDir: String,
    withScripts: Boolean = false,
    withScriptInfo: Boolean = false,
    withTargetCondViews: Boolean = false,
    withUnreachableFuncs: Boolean = false,
    withMsg: Boolean = true,
  ): Unit =
    mkdir(baseDir)
    dumpJson(
      name = if (withMsg) Some("node coverage") else None,
      data = nodeViewMapJson,
      filename = s"$baseDir/node-coverage.json",
      space = true,
    )
    dumpJson(
      name = if (withMsg) Some("branch coverage") else None,
      data = condViewMapJson,
      filename = s"$baseDir/branch-coverage.json",
      space = true,
    )
    if (withScripts)
      dumpDir[Script](
        name = if (withMsg) Some("minimal ECMAScript programs") else None,
        iterable = _minimalScripts,
        dirname = s"$baseDir/minimal",
        getName = _.name,
        getData = USE_STRICT + _.code,
        remove = true,
      )
    if (withScriptInfo)
      dumpDir[(String, ScriptInfo)](
        name =
          if (withMsg) Some("test for minimal ECMAScript programs") else None,
        iterable = _minimalInfo,
        dirname = s"$baseDir/minimal",
        getName = _._1 + ".test",
        getData = _._2.test,
        remove = false,
      )
    dumpJson(
      name =
        if (withMsg) Some("touched info of minimal ECMAScript programs")
        else None,
      data = minimalTouchNodeJson,
      filename = s"$baseDir/minimal-touch-node.json",
      space = false,
    )
    if (withTargetCondViews)
      dumpJson(
        name = if (withMsg) Some("target conditional branches") else None,
        data = condViewMapJson(_targetCondViews contains _),
        filename = s"$baseDir/target-conds.json",
        space = true,
      )
    if (withUnreachableFuncs)
      dumpFile(
        name = if (withMsg) Some("unreachable functions") else None,
        data = cfg.funcs
          .filter(f => !nodeViewMap.contains(f.entry))
          .map(_.name)
          .sorted
          .mkString(LINE_SEP),
        filename = s"$baseDir/unreach-funcs",
      )

  override def toString: String =
    val app = new Appender
    (app >> "- coverage:")
      .wrap("", "") {
        app :> "- node: " >> nodeCov
        app :> "- branch: " >> branchCov
        synK.map(k =>
          (app :> "- syn-k: " >> k).wrap("", "") {
            app :> "- node: " >> nodeViewCov
            app :> "- branch: " >> branchViewCov
          },
        )
      }
      .toString

  /** extension for AST */
  extension (ast: Ast) {

    /** get all child nodes */
    def nodeSet: Set[Ast] =
      var nodes = Set(ast)
      ast match
        case Syntactic(_, _, _, cs) =>
          for {
            child <- cs.flatten
            childNodes = child.nodeSet
          } nodes ++= childNodes
        case _ => /* do nothing */
      nodes
  }

  // ---------------------------------------------------------------------------
  // private helpers
  // ---------------------------------------------------------------------------
  // update mapping from nodes to scripts
  private def update(nodeView: NodeView, script: Script): Unit =
    nodeViews += nodeView
    val NodeView(node, view) = nodeView
    nodeViewMap += node -> updated(apply(node), view, script)

  // update mapping from conditional branches to scripts
  private def update(condView: CondView, script: Script): Unit =
    condViews += condView
    val CondView(cond, view) = condView
    condViewMap += cond -> updated(apply(cond), view, script)

  // update mapping
  private def updated[View](
    map: Map[View, Script],
    view: View,
    script: Script,
  ): Map[View, Script] =
    // decrease counter of original script
    for (origScript <- map.get(view)) {
      val count = counter(origScript) - 1
      counter += (origScript -> count)
      if (count == 0) {
        counter -= origScript
        _minimalScripts -= origScript
        _minimalInfo -= origScript.name
      }
    }
    // increse counter of new script
    _minimalScripts += script
    counter += script -> (counter.getOrElse(script, 0) + 1)
    map + (view -> script)

  // script parser
  private lazy val scriptParser = cfg.scriptParser

  // conversion to string
  private def percent(n: Double, t: Double): Double = n / t * 100

  // get JSON for touched node of minimal
  private def minimalTouchNodeJson: Json =
    val nodeViewId: Map[NodeView, Int] =
      nodeViews.toSeq.sorted.zipWithIndex.toMap
    JsonObject(
      _minimalInfo.toSeq.map((name, info) =>
        (name, info.touchedNodeViews.map(nodeViewId).asJson),
      ): _*,
    ).asJson

  // get JSON for node coverage
  private def nodeViewMapJson: Json = JsonObject(
    (for {
      (node, viewMap) <- nodeViewMap.toList.sortBy(_._1)
      (view, script) <- viewMap.toList.sortBy(_._1)
      nodeView = NodeView(node, view)
    } yield {
      val key = nodeView.toString
      val obj = JsonObject(
        "func" -> cfg.funcOf(node).name.asJson,
        "loc" -> node.loc.map(_.toString).asJson,
        "script" -> script.name.asJson,
      ).asJson
      key -> obj
    }): _*,
  ).asJson

  // get JSON for branch coverage
  private def condViewMapJson: Json = condViewMapJson(_ => true)

  private def condViewMapJson(filter: CondView => Boolean): Json = JsonObject(
    (for {
      (cond, viewMap) <- condViewMap.toList.sortBy(_._1)
      (view, script) <- viewMap
      condView = CondView(cond, view)
      if filter(condView)
    } yield {
      val key = condView.toString
      val obj = JsonObject(
        "func" -> cond.node.map(cfg.funcOf(_).name).asJson,
        "loc" -> cond.loc.map(_.toString).asJson,
        "script" -> script.name.asJson,
      ).asJson
      key -> obj
    }): _*,
  ).asJson
}

object Coverage {

  /** interpreter */
  class Interp(
    initSt: State,
    timeLimit: Option[Int],
    synK: Option[Int],
  ) extends Interpreter(
      initSt,
      timeLimit = timeLimit,
      keepProvenance = true,
    ) {
    // program infos
    var touchedNodeViews: Map[NodeView, Option[Nearest]] = Map()
    var touchedCondViews: Map[CondView, Option[Nearest]] = Map()

    // override eval for node
    override def eval(node: Node): Unit =
      // record touched nodes
      touchedNodeViews += NodeView(node, getView) -> getNearest
      super.eval(node)

    // override branch move
    override def moveBranch(branch: Branch, cond: Boolean): Unit =
      // record touched conditional branch
      touchedCondViews += CondView(Cond(branch, cond), getView) -> getNearest
      super.moveBranch(branch, cond)

    // override helper for return-if-abrupt cases
    override def returnIfAbrupt(
      riaExpr: EReturnIfAbrupt,
      value: Value,
      check: Boolean,
    ): Value =
      val abrupt = value.isAbruptCompletion
      touchedCondViews += CondView(
        Cond(riaExpr.idRef, abrupt),
        getView,
      ) -> getNearest
      super.returnIfAbrupt(riaExpr, value, check)

    // get syntax-sensitive views
    private def getView: View =
      synK.fold(Nil)(st.context.featureStack.take(_))

    // get location information
    private def getNearest: Option[Nearest] = st.context.nearest
  }

  /* syntax-sensitive views */
  type View = List[Feature]
  case class NodeView(node: Node, view: View = Nil) {
    override def toString: String = node.simpleString + {
      if (view.isEmpty) ""
      else
        "@" + (view match
          case List(ty) => ty.toString
          case _        => view.mkString("[", ", ", "]")
        )
    }
  }
  case class CondView(cond: Cond, view: View = Nil) {
    def neg: CondView = copy(cond = cond.neg)

    override def toString: String = cond.toString + {
      if (view.isEmpty) ""
      else
        "@" + (view match
          case List(ty) => ty.toString
          case _        => view.mkString("[", ", ", "]")
        )
    }
  }

  /** ordering of syntax-sensitive views */
  given Ordering[Feature] = Ordering.by(_.toString)
  given Ordering[Node] = Ordering.by(_.id)
  given Ordering[NodeView] = Ordering.by(v => (v.node, v.view))
  given Ordering[Cond] = Ordering.by(cond => (cond.kindString, cond.id))
  given Ordering[CondView] = Ordering.by(v => (v.cond, v.view))

  // branch or reference to EReturnIfAbrupt with boolean values
  // `true` (`false`) denotes then- (else-) branch or abrupt (non-abrupt) value
  case class Cond(elem: Branch | WeakUIdRef[EReturnIfAbrupt], cond: Boolean) {
    // negation
    def neg: Cond = copy(cond = !cond)

    // short kind string
    def kindString: String = elem match
      case (branch: Branch)     => "Branch"
      case (ref: WeakUIdRef[_]) => "EReturnIfAbrupt"

    def shortKindString: String = kindString.take(1)

    // get id
    def id: Int = elem match
      case (branch: Branch)     => branch.id
      case (ref: WeakUIdRef[_]) => ref.id

    // condition string
    def condString: String = if (cond) "T" else "F"

    // get node
    def node: Option[Node] = elem match
      case (branch: Branch)                   => Some(branch)
      case (ref: WeakUIdRef[EReturnIfAbrupt]) => ref.get.cfgNode

    // get loc
    def loc: Option[Loc] = elem match
      case (branch: Branch)                   => branch.loc
      case (ref: WeakUIdRef[EReturnIfAbrupt]) => ref.get.loc

    // conversion to string
    override def toString: String = s"$kindString[$id]:$condString"

    def simpleString: String = s"$shortKindString[$id]:$condString"
  }
}
