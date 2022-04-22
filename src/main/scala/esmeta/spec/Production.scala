package esmeta.spec

import esmeta.spec.util.Parser

/** productions for ECMAScript grammars */
case class Production(
  lhs: Lhs,
  kind: Production.Kind,
  oneof: Boolean,
  rhsList: List[Rhs],
) extends SpecElem {

  /** get name */
  lazy val name: String = lhs.name

  /** get the index mapping for productions */
  lazy val idxMap: Map[String, (Int, Int)] = (for {
    (rhs, i) <- rhsList.zipWithIndex
    (name, j) <- rhs.allNames.zipWithIndex
  } yield lhs.name + ":" + name -> (i, j)).toMap

  /** get non-terminals in RHSs */
  lazy val nts: List[Nonterminal] = for {
    rhs <- rhsList
    nt <- rhs.nts
  } yield nt

  def isSyntactic: Boolean = kind == Production.Kind.Syntactic
}
object Production extends Parser.From[Production]:
  enum Kind extends SpecElem:
    case Syntactic, Lexical, NumericString

/** ordering of productions */
given Ordering[Production] =
  Ordering.by(prod => (prod.kind.ordinal, prod.lhs.name))
