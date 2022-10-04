package esmeta.es.util.mutator

import esmeta.cfg.CFG
import esmeta.es.*
import esmeta.es.util.synthesizer.*
import esmeta.es.util.{Walker => AstWalker}
import esmeta.es.util.Coverage.*
import esmeta.spec.Grammar
import esmeta.util.*
import esmeta.util.BaseUtils.*

/** A random ECMAScript AST mutator */
class RandomMutator(
  val synBuilder: Synthesizer.Builder = RandomSynthesizer,
) extends Mutator {

  /** mutate programs */
  def mutate(
    cfg: CFG,
    ast: Ast,
    condView: Option[CondView],
    nearest: Option[Nearest],
  ): (String, Ast) = ("RandomMutator", Walker(cfg).walk(ast))

  /** internal walker */
  class Walker(cfg: CFG) extends AstWalker {
    override def walk(ast: Syntactic): Syntactic = ast.name match
      case "AssignmentExpression" | "PrimaryExpression" | "Statement" |
          "Declaration" if randBool =>
        synBuilder(cfg)(ast)
      case _ =>
        super.walk(ast)
  }
}
