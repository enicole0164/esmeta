package esmeta.interp

import esmeta.cfg.{Func, Block, Call}
import esmeta.ir.{Func => IRFunc, *}
import esmeta.js.Ast
import esmeta.util.BaseUtils.error
import scala.collection.mutable.{Map => MMap}

/** IR contexts */
case class Context(
  val func: Func,
  val locals: MMap[Local, Value] = MMap(),
) extends InterpElem {

  /** current cursor in this context */
  var cursor: Cursor = Cursor(func.entry, func)

  /** move cursor to next */
  def moveNext: Unit = cursor match
    case NodeCursor(block: Block) => cursor = Cursor(block.next, func)
    case NodeCursor(call: Call)   => cursor = Cursor(call.next, func)
    case _                        => error("cursor can't move to next")

  /** return variable */
  var retVal: Option[Value] = None

  /** copy contexts */
  def copied: Context = {
    val newContext = copy(locals = MMap.from(locals))
    newContext.cursor = cursor
    newContext
  }

  /** ast of current context */
  def astOpt: Option[Ast] =
    if (func.irFunc.kind == IRFunc.Kind.SynDirOp)
      Some(locals(NAME_THIS).asAst)
    else None

  /** name */
  def name: String = func.irFunc.name
}
