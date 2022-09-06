package esmeta.analyzer

import esmeta.analyzer.domain.*
import esmeta.analyzer.repl.*
import esmeta.cfg.*
import esmeta.ir.{Func => IRFunc, Name, Param, Local}
import esmeta.error.*
import esmeta.state.*
import esmeta.util.*
import esmeta.util.BaseUtils.*
import scala.Console.*
import scala.annotation.tailrec

/** abstract semantics */
class AbsSemantics(
  /** abstract states in each node point */
  var npMap: Map[NodePoint[Node], AbsState] = Map(),
  /** abstract states in each return point */
  var rpMap: Map[ReturnPoint, AbsRet] = Map(),
  /** abstract states right before calling functions */
  var callInfo: Map[NodePoint[Call], AbsState] = Map(),
  /** return edges */
  var retEdges: Map[ReturnPoint, Set[NodePoint[Call]]] = Map(),
  /** loop out edges */
  var loopOut: Map[View, Set[View]] = Map(),
) {

  /** assertions */
  var assertions: Map[ControlPoint, AbsValue] = Map()

  /** current control point */
  var curCP: Option[ControlPoint] = None

  /** analysis REPL */
  val repl = REPL(this)

  /** a worklist of control points */
  val worklist: Worklist[ControlPoint] = QueueWorklist(npMap.keySet)

  /** the number of iterations */
  def getIter: Int = iter
  private var iter: Int = 0

  /** RunJobs function */
  val runJobs = cfg.fnameMap("RunJobs")

  /** get return point of RunJobs */
  val runJobsRp = ReturnPoint(runJobs, View())

  /** get abstract return values and states of RunJobs */
  def finalResult: AbsRet = this(runJobsRp)

  /** abstract transfer function */
  val transfer: AbsTransfer = AbsTransfer(this)

  /** set start time of analyzer */
  val startTime: Long = System.currentTimeMillis

  /** fixpiont computation */
  @tailrec
  final def fixpoint: AbsSemantics = worklist.next match
    case Some(cp) =>
      // increase iteration number
      iter += 1
      // check time limit
      if (iter % CHECK_PERIOD == 0) TIME_LIMIT.map(limit => {
        val duration = (System.currentTimeMillis - startTime) / 1000
        if (duration > limit) exploded("timeout")
      })
      // text-based debugging
      if (DEBUG) println(s"${cp.func.name}:$cp")
      // run REPL
      if (USE_REPL) repl(transfer, cp)
      // abstract transfer for the current control point
      else transfer(cp)
      // keep going
      fixpoint
    case None =>
      // finalize REPL
      if (USE_REPL) repl.finished
      // final result
      this

  /** get return edges */
  def getRetEdges(rp: ReturnPoint): Set[NodePoint[Call]] =
    retEdges.getOrElse(rp, Set())

  /** lookup for node points */
  def apply(np: NodePoint[Node]): AbsState = npMap.getOrElse(np, AbsState.Bot)

  /** lookup for return points */
  def apply(rp: ReturnPoint): AbsRet = rpMap.getOrElse(rp, AbsRet.Bot)

  /** update internal map */
  def +=(pair: (NodePoint[Node], AbsState)): Unit =
    val (np, newSt) = pair
    val oldSt = this(np)
    if (!oldSt.isBottom && USE_REPL) repl.merged = true
    if (!newSt.isBottom && !(newSt ⊑ oldSt))
      npMap += np -> (oldSt ⊔ newSt)
      worklist += np

  /** handle calls */
  def doCall(
    callerNp: NodePoint[Call],
    callerSt: AbsState,
    calleeFunc: Func,
    args: List[AbsValue],
    captured: Map[Name, AbsValue] = Map(),
  ): Unit =
    this.callInfo += callerNp -> callerSt
    for {
      (calleeNp, calleeSt) <- getCalleeEntries(
        callerNp,
        callerSt,
        calleeFunc,
        args,
        captured,
      )
    } {
      // add callee to worklist
      this += calleeNp -> calleeSt.doCall
      // add return edges from callee to caller
      val rp = ReturnPoint(calleeFunc, calleeNp.view)
      val set = retEdges.getOrElse(rp, Set())
      retEdges += rp -> (set + callerNp)
      // propagate callee analysis result
      val retT = this(rp)
      if (!retT.isBottom) worklist += rp
    }

  /** call transition */
  def getCalleeEntries(
    callerNp: NodePoint[Call],
    callerSt: AbsState,
    calleeFunc: Func,
    args: List[AbsValue],
    captured: Map[Name, AbsValue],
  ): List[(NodePoint[_], AbsState)] = {
    // handle ir callsite sensitivity
    val NodePoint(callerFunc, callSite, callerView) = callerNp
    val baseView =
      if (IR_SENS)
        callerView.copy(
          calls = callSite :: callerView.calls,
          intraLoopDepth = 0,
        )
      else callerView

    val calleeSt = callerSt.copied(locals =
      getLocals(calleeFunc, args) ++ captured,
    )
    val calleeNp = NodePoint(calleeFunc, calleeFunc.entry, baseView)
    List((calleeNp, calleeSt))
  }

  /** get local variables */
  def getLocals(
    func: Func,
    args: List[AbsValue],
    cont: Boolean = false,
  ): Map[Local, AbsValue] = {
    val params = func.irFunc.params
    var map = Map[Local, AbsValue]()

    @tailrec
    def aux(ps: List[Param], as: List[AbsValue]): Unit = (ps, as) match {
      case (Nil, Nil) =>
      case (Param(lhs, _, optional) :: pl, Nil) =>
        if (optional) {
          map += lhs -> AbsValue(Absent)
          aux(pl, Nil)
        }
      case (Nil, args) =>
      // XXX Handle GeneratorStart <-> GeneratorResume arith mismatch
      case (param :: pl, arg :: al) =>
        map += param.lhs -> arg
        aux(pl, al)
    }
    aux(params, args)
    map
  }

  /** update return points */
  def doReturn(rp: ReturnPoint, origRet: AbsRet): Unit =
    val ReturnPoint(func, view) = rp
    val retRp = ReturnPoint(func, getEntryView(view))
    val newRet = if (func.isReturnComp) origRet.wrapCompletion else origRet
    if (!newRet.value.isBottom)
      val oldRet = this(retRp)
      if (!oldRet.isBottom && USE_REPL) repl.merged = true
      if (newRet !⊑ oldRet)
        rpMap += retRp -> (oldRet ⊔ newRet)
        worklist += retRp

  /** loop transition for next views */
  def loopNext(view: View): View = view.loops match
    case LoopCtxt(loop, k) :: rest if IR_SENS =>
      view.copy(loops = LoopCtxt(loop, k + 1) :: rest)
    case _ => view

  /** loop transition for function enter */
  def loopEnter(view: View, loop: Branch): View =
    val loopView =
      if (IR_SENS)
        view.copy(
          loops = LoopCtxt(loop, 0) :: view.loops,
          intraLoopDepth = view.intraLoopDepth + 1,
        )
      else view
    loopOut += loopView -> (loopOut.getOrElse(loopView, Set()) + view)
    loopView

  /** loop transition for bases */
  def loopBase(view: View): View = view.loops match
    case LoopCtxt(loop, k) :: rest if IR_SENS =>
      view.copy(loops = LoopCtxt(loop, 0) :: rest)
    case _ => view

  /** loop transition for function exits */
  def loopExit(view: View): View = if (IR_SENS) {
    val views = loopOut.getOrElse(loopBase(view), Set())
    views.size match
      case 0 => error("invalid loop exit")
      case 1 => views.head
      case _ => exploded("loop is too merged.")
  } else view

  /** get entry views of loops */
  @tailrec
  final def getEntryView(view: View): View =
    if (!IR_SENS | view.intraLoopDepth == 0) view
    else getEntryView(loopExit(view))

  /** get abstract state of control points */
  def getState(cp: ControlPoint): AbsState = cp match
    case np: NodePoint[_] => this(np)
    case rp: ReturnPoint  => this(rp).state

  /** get string for result of control points */
  def getString(
    cp: ControlPoint,
    color: String,
    detail: Boolean,
  ): String =
    val func = cp.func.name
    val cpStr = cp.toString(detail = detail)
    val k = setColor(color)(cpStr)
    cp match
      case np: NodePoint[_] =>
        val st = this(np).getString(detail = detail)
        s"""$k -> $st
           |${np.node}""".stripMargin
      case rp: ReturnPoint =>
        val st = this(rp).getString(detail = detail)
        s"""$k -> $st"""

  /** check reachability based on call contexts */
  def reachable(np: NodePoint[Node]): Boolean =
    !getNps(np).forall(this(_).isBottom)

  /** get node points */
  def getNps(givenNp: NodePoint[Node]): Set[NodePoint[Node]] =
    val entryView = getEntryView(givenNp.view)
    for {
      np <- npMap.keySet
      if givenNp.node == np.node && entryView == getEntryView(np.view)
    } yield np

  /** string */
  override def toString: String =
    val funcs = npMap.keySet.map(_.func) ++ rpMap.keySet.map(_.func)
    s"${funcs.size} functions are analyzed in $iter iterations."
}