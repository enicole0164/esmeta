package esmeta.editor.analyzer

import esmeta.{DEBUG}
import esmeta.editor.exploded
import esmeta.cfg.CFG
import esmeta.js.Ast
import esmeta.cfg.{Func, Node, Call}
import esmeta.util.BaseUtils.*
import esmeta.interp.State
import esmeta.editor.sview.*
import esmeta.editor.util.{Worklist, QueueWorklist}
import scala.annotation.tailrec
import esmeta.editor.util.CFGHelper
import esmeta.error.AnalysisTimeoutError
import esmeta.cfg.Branch
import esmeta.ir.Id

class AbsSemantics(
  val ard: RetDomain[_],
)(
  val cfgHelper: CFGHelper,
  var npMap: Map[NodePoint[Node], ard.asd.Elem] = Map(),
  var rpMap: Map[ReturnPoint, ard.Elem] = Map(),
  var callInfo: Map[NodePoint[Call], ard.asd.Elem] = Map(),
  var retEdges: Map[ReturnPoint, Set[NodePoint[Call]]] = Map(),
  var loopOut: Map[View, Set[View]] = Map(),
  val maxIJK: (Int, Int, Int) = (0, 0, 0),
  timeLimit: Option[Long] = None,
) {

  type AbsValue = ard.asd.aod.avd.Elem
  type AbsState = ard.asd.Elem
  type AbsRet = ard.Elem
  val AbsValue: ard.asd.aod.avd.type = ard.asd.aod.avd
  val AbsState: ard.asd.type = ard.asd
  val AbsRet: ard.type = ard

  // the number of iterations
  def getIter: Int = iter
  private var iter: Int = 0

  // set start time of analyzer
  val startTime: Long = System.currentTimeMillis

  // iteration period for check
  val CHECK_PERIOD = 10000

  // a worklist of control points
  val worklist: Worklist[ControlPoint] = new QueueWorklist(npMap.keySet)

  val transfer: AbsTransfer = AbsTransfer(this)

  // fixpiont computation
  @tailrec
  final def fixpoint: this.type = worklist.next match {
    case Some(cp) => {
      iter += 1

      // check time limit
      if (iter % CHECK_PERIOD == 0) timeLimit.map(limit => {
        val duration = (System.currentTimeMillis - startTime) / 1000
        if (duration > limit) throw AnalysisTimeoutError
      })

      // text-based debugging
      if (DEBUG) println(s"${cp.func.name}:$cp")

      // abstract transfer for the current control point
      transfer(cp)

      // keep going
      fixpoint
    }
    case None =>
      // final result
      this
  }

  // get return edges
  def getRetEdges(rp: ReturnPoint): Set[NodePoint[Call]] =
    retEdges.getOrElse(rp, Set())

  def apply(np: NodePoint[Node]): AbsState =
    npMap.getOrElse(np, AbsState.Bot)
  def apply(rp: ReturnPoint): AbsRet = rpMap.getOrElse(rp, AbsRet.Bot)

  // update internal map
  def +=(pair: (NodePoint[Node], AbsState)): Boolean = {
    val (np, newSt) = pair
    val oldSt = this(np)
    val rv = if (!(newSt ⊑ oldSt)) {
      npMap += np -> (oldSt ⊔ newSt)
      worklist += np
      true
    } else false
    rv
  }

  // handle calls
  def doCall(
    call: Call,
    callerView: View,
    callerSt: AbsState,
    func: Func,
    st: AbsState,
  ): Unit = {
    val callerNp = NodePoint(cfgHelper.cfg.funcOf(call), call, callerView)
    this.callInfo += callerNp -> callerSt

    val isJsCall = func.name match {
      case "Call" | "Construct" => true
      case _                    => false
    }
    val calleeView = viewCall(callerView, call)
    func.entry.map(entry =>
      this += NodePoint(func, entry, calleeView) -> st.doCall,
    )

    val rp = ReturnPoint(func, calleeView)
    val set = retEdges.getOrElse(rp, Set())
    retEdges += rp -> (set + callerNp)

    val retT = this(rp)
    if (!retT.isBottom) worklist += rp
  }

  // call transition
  def viewCall(
    callerView: View,
    call: Call,
  ): View = {
    val View(calls, _, _) = callerView
    val view = callerView.copy(
      calls = (call :: calls).take(maxIJK._3),
      intraLoopDepth = 0,
    )
    view
  }

  // update return points
  def doReturn(rp: ReturnPoint, newRet: AbsRet): Unit = {
    val ReturnPoint(func, view) = rp
    val retRp = ReturnPoint(func, getEntryView(view))
    if (!newRet.value.isBottom) {
      val oldRet = this(retRp)
      if (newRet !⊑ oldRet) {
        rpMap += retRp -> (oldRet ⊔ newRet)
        worklist += retRp
      }
    }
  }

  // loop transition
  def loopNext(view: View): View = view.loops match {
    case LoopCtxt(loop, k) :: rest =>
      view.copy(loops = LoopCtxt(loop, (k + 1) min maxIJK._1) :: rest)
    case _ => view
  }
  def loopEnter(view: View, loop: Branch): View = {
    val loopView = view.copy(
      loops = (LoopCtxt(loop.id, 0) :: view.loops).take(maxIJK._2),
      intraLoopDepth = view.intraLoopDepth + 1,
    )
    loopOut += loopView -> (loopOut.getOrElse(loopView, Set()) + view)
    loopView
  }
  def loopBase(view: View): View = view.loops match {
    case LoopCtxt(loop, k) :: rest =>
      view.copy(loops = LoopCtxt(loop, 0) :: rest)
    case _ => view
  }
  def loopExit(view: View): View = {
    val views = loopOut.getOrElse(loopBase(view), Set())
    views.size match {
      case 0 => ???
      case 1 => views.head
      case _ => exploded("loop is too merged.")
    }
  }

  // get entry views of loops
  @tailrec
  final def getEntryView(view: View): View = {
    if (view.intraLoopDepth == 0) view
    else getEntryView(loopExit(view))
  }

  // get abstract state of control points
  def getState(cp: ControlPoint): AbsState = cp match {
    case np: NodePoint[_] => this(np)
    case rp: ReturnPoint  => this(rp).state
  }

  def initialize(view: SyntacticView): Map[NodePoint[Node], AbsState] = {
    cfgHelper.getSDO(view, "Evaluation") match {
      case Some((s, f)) =>
        f.entry
          .map(n =>
            Map(
              NodePoint(f, n, View()) -> AbsState.Empty.update(
                f.irFunc.params.head.lhs,
                sviewToAbsValue(s),
              ),
            ),
          )
          .getOrElse(Map())
      case None => Map()
    }
  }

  def sviewToAbsValue(view: SyntacticView): AbsValue = AbsValue.Bot
}