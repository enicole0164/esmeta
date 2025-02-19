package esmeta.mutator.synthesizer

import esmeta.es.*
import esmeta.spec.*
import esmeta.util.BaseUtils.*

// TODO refactoring
/** A random ECMAScript AST synthesizer */
class RandomSynthesizer(
  val grammar: Grammar,
) extends Synthesizer {
  import grammar.*
  import SimpleSynthesizer.*

  /** for syntactic production */
  def apply(name: String, args: List[Boolean]): Syntactic =
    val prod @ Production(lhs, _, _, rhsList) = nameMap(name)
    val argsMap = (lhs.params zip args).toMap
    val pairs = for {
      (rhs, rhsIdx) <- rhsList.zipWithIndex
      if rhs.condition.fold(true)(cond => argsMap(cond.name) == cond.pass)
    } yield (rhs, rhsIdx)
    val (rhs, rhsIdx) = choose(pairs)
    val children = rhs.symbols.flatMap(synSymbol(argsMap))
    Syntactic(name, args, rhsIdx, children)

  /** for lexical production */
  def apply(name: String): Lexical = simpleSyn(name)

  // ---------------------------------------------------------------------------
  // private helpers
  // ---------------------------------------------------------------------------
  private val simpleSyn = SimpleSynthesizer(grammar)

  private def synSymbol(argsMap: Map[String, Boolean])(
    symbol: Symbol,
  ): Option[Option[Ast]] = symbol match
    case ButNot(nt, _) => synSymbol(argsMap)(nt)
    case Nonterminal(name, args, optional) =>
      if (reservedLexicals contains name)
        Some(Some(Lexical(name, reservedLexicals(name))))
      else if (optional && randBool) Some(None)
      else {
        import NonterminalArgumentKind.*
        val newArgs = for (arg <- args) yield arg.kind match
          case True  => true
          case False => false
          case Pass  => argsMap(arg.name)
        val syn =
          if (randBool) simpleSyn(name, newArgs)
          else apply(name, newArgs)
        Some(Some(syn))
      }
    case _ => None
}
object RandomSynthesizer extends Synthesizer.Builder {
  def apply(grammar: Grammar) = new RandomSynthesizer(grammar)
}
