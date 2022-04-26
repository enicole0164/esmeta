package esmeta.error

import esmeta.interp.*
import esmeta.js.*
import esmeta.ir.{Func => IRFunc, *}
import esmeta.cfg.*

sealed abstract class InterpError(msg: String)
  extends ESMetaError(s"[Interp Error] $msg")
// invalid cases
case class InvalidNodeId(nid: Int) extends InterpError(s"invalid node id: $nid")
case class InvalidObjProp(obj: Obj, prop: PureValue)
  extends InterpError(s"invalid object property: $prop for $obj")
case class InvalidAstProp(ast: Ast, prop: PureValue)
  extends InterpError(s"invalid ast property: $prop for ${ast.name}")
case class InvalidRefBase(v: Value)
  extends InterpError(s"not a proper reference base: $v")
case class InvalidConversion(cop: COp, expr: Expr, v: Value)
  extends InterpError(s"invalid conversion to $cop: $expr, $v")
case class InvalidArgs(name: String, as: List[Value])
  extends InterpError(s"invalid arguments: ${as.mkString(", ")} @ name")
case class InvalidParseSource(expr: Expr, v: Value)
  extends InterpError(s"not a proper source for parse: $expr -> $v")
case class InvalidTypeExpr(expr: Expr, v: Value)
  extends InterpError(s"not a proper type expression: $expr -> $v")

// invalid completion values
sealed abstract class InvalidComp(msg: Option[String])
  extends InterpError(s"invalid completion${msg.fold("")(": " + _)}")
case object InvalidComp extends InvalidComp(None)
case class InvalidCompType(v: Value) extends InvalidComp(Some(s"(type) $v"))
case class InvalidCompTarget(v: Value) extends InvalidComp(Some(s"(target) $v"))

// no return values
case object NoReturnValue extends InterpError(s"no return value")

// arity mismatches
case class RemainingParams(ps: List[IRFunc.Param])
  extends InterpError(s"remaining parameters: ${ps.mkString(", ")}")
case class RemainingArgs(as: List[Value])
  extends InterpError(s"remaining arguments: ${as.mkString(", ")}")

// not a specific types
case class NoBoolean(expr: Expr, v: Value)
  extends InterpError(s"not a boolean: $expr -> $v")
case class NoString(expr: Expr, v: Value)
  extends InterpError(s"not a string: $expr -> $v")
case class NoInteger(expr: Expr, v: Value)
  extends InterpError(s"not an integer: $expr -> $v")
case class NoAddr(expr: Expr, v: Value)
  extends InterpError(s"not an address: $expr -> $v")
case class NoFunc(expr: Expr, v: Value)
  extends InterpError(s"not a function: $expr -> $v")
case class NoAst(expr: Expr, v: Value)
  extends InterpError(s"not an abstract syntax tree (AST): $expr -> $v")
case class NoGrammar(expr: Expr, v: Value)
  extends InterpError(s"not a grammar symbol: $expr -> $v")
case class NoList(expr: Expr, obj: Obj)
  extends InterpError(s"not a list: $expr -> $obj")

// type conversion fails
sealed abstract class InvalidTypeConversion(msg: Option[String])
  extends InterpError(s"invalid type conversion${msg.fold("")(": " + _)}")
case class NotStringType(v: Value)
  extends InvalidTypeConversion(Some(s"$v is not string"))
case class NotAstType(v: Value)
  extends InvalidTypeConversion(Some(s"$v is not ast"))
case class NotIntType(v: Value)
  extends InvalidTypeConversion(Some(s"$v is not integer"))
case class NotDecimalType(v: Value)
  extends InvalidTypeConversion(Some(s"$v is not decimal number"))

// undefined values
case class UnknownId(x: Id) extends InterpError(s"unknown variable: $x")
case class UnknownAddr(addr: Addr)
  extends InterpError(s"unknown address: $addr")
case class WrongStringRef(str: String, prop: PureValue)
  extends InterpError(s"wrong access of string reference: $str.$prop")

// missing cases
case class UncheckedAbrupt(comp: Comp)
  extends InterpError(s"unchecked abrupt completion: $comp")

// not supported cases
case class NotSupported(msg: String) extends InterpError(s"[YET] $msg")

// assertion failed
case class AssertionFail(expr: Expr)
  extends InterpError(s"assertion failure: $expr")
case class OutOfRange(list: ListObj, k: Int)
  extends InterpError(s"out of range: $k of $list")
