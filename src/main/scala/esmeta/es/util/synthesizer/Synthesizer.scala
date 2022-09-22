package esmeta.es.util.synthesizer

import esmeta.cfg.*
import esmeta.es.*
import esmeta.spec.Grammar

/** ECMAScript AST synthesizer */
trait Synthesizer {

  /** get script */
  def script: String

  /** get initial pool */
  def initPool: Vector[String]

  /** for general production */
  def apply(ast: Ast): Ast = ast match
    case ast: Syntactic => apply(ast)
    case ast: Lexical   => apply(ast)

  /** for syntactic production */
  def apply(name: String, args: List[Boolean]): Syntactic
  def apply(ast: Syntactic): Syntactic = apply(ast.name, ast.args)

  /** for lexical production */
  def apply(name: String): Lexical
  def apply(ast: Lexical): Lexical = apply(ast.name)

  /** ECMAScript grammar */
  def cfg: CFG

  /** ECMAScript grammar */
  val grammar: Grammar = cfg.grammar

  /** synthesizer builder */
  def builder: Synthesizer.Builder

  /** synthesizer name */
  def name: String = builder.name
}
object Synthesizer:
  trait Builder extends (CFG => Synthesizer) { def name: String }
type SynBuilder = Synthesizer.Builder
