package esmeta.es.util

import esmeta.util.BasicWalker
import esmeta.es.*

/** a walker for ECMAScript */
trait Walker extends BasicWalker {
  def walk(elem: ESElem): ESElem = elem match
    case elem: Script      => walk(elem)
    case elem: Ast         => walk(elem)
    case elem: ConformTest => walk(elem)
    case elem: Assertion   => walk(elem)

  /** ECMAScript script program */
  def walk(script: Script): Script =
    val Script(code, ast, name, path) = script
    Script(code, walk(ast), name, path)

  /** ASTs */
  def walk(ast: Ast): Ast = ast match
    case ast: Syntactic => walk(ast)
    case ast: Lexical   => walk(ast)

  /** syntactic productions */
  def walk(ast: Syntactic): Syntactic =
    val Syntactic(name, args, rhsIdx, children) = ast
    Syntactic(name, args, rhsIdx, walkList(children, walkOpt(_, walk)))

  /** lexical productions */
  def walk(ast: Lexical): Lexical = ast

  /** conformance test */
  def walk(test: ConformTest): ConformTest =
    val ConformTest(id, script, exitTag, isAsync, assertions) = test
    ConformTest(id, script, exitTag, isAsync, walkVector(assertions, walk))

  /** assertions */
  def walk(assert: Assertion): Assertion = assert
}
