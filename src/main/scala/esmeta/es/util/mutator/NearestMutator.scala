package esmeta.es.util.mutator

import esmeta.cfg.CFG
import esmeta.es.*
import esmeta.es.util.synthesizer.*
import esmeta.es.util.{Walker => AstWalker, *}
import esmeta.es.util.Coverage.*
import esmeta.spec.Grammar
import esmeta.state.Nearest
import esmeta.util.*
import esmeta.util.BaseUtils.*
import esmeta.ty.AstSingleTy

/** A nearest ECMAScript AST mutator */
class NearestMutator(
  val synthesizer: Synthesizer = RandomSynthesizer,
) extends Mutator {

  val names = "NearestMutator" :: RandomMutator.default.names

  /** mutate programs */
  def apply(
    ast: Ast,
    n: Int,
    target: Option[(CondView, Coverage)],
  ): Iterable[(String, Ast)] = (for {
    (condView, cov) <- target
    nearest <- cov.targetCondViews.getOrElse(condView, None)
  } yield Walker(nearest, n).walk(ast).map((name, _)))
    .getOrElse(RandomMutator.default(ast, n, target))

  /** internal walker */
  class Walker(nearest: Nearest, n: Int) extends Util.MultiplicativeListWalker {
    val AstSingleTy(name, rhsIdx, subIdx) = nearest.ty
    override def walk(ast: Syntactic): List[Syntactic] =
      if (
        ast.name == name &&
        ast.rhsIdx == rhsIdx &&
        ast.subIdx == subIdx &&
        ast.loc == Some(nearest.loc)
      )
        TotalWalker(ast, n)
      else
        super.walk(ast)
  }

  /** internal walker that mutates all internal nodes with same prob. */
  object TotalWalker extends Util.AdditiveListWalker {
    var c = 0
    def apply(ast: Syntactic, n: Int): List[Syntactic] =
      val k = Util.simpleAstCounter(ast)
      c = (n - 1) / k + 1
      shuffle(walk(ast)).take(n).toList

    override def walk(ast: Syntactic): List[Syntactic] =
      val mutants = super.walk(ast)
      List.tabulate(c)(_ => synthesizer(ast)) ++ mutants
  }
}