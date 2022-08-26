package esmeta.phase

import esmeta.*
import esmeta.ai.*
import esmeta.ai.domain
import esmeta.ai.{Config => AnalysisConfig, *}
import esmeta.cfg.CFG
import esmeta.util.*
import esmeta.util.SystemUtils.*

/** `type-check` phase */
case object TypeCheck extends Phase[CFG, AbsSemantics] {
  val name = "type-check"
  val help = "performs a type analysis of ECMA-262."
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): AbsSemantics = ???
  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "repl",
      BoolOption(c => AnalysisConfig.USE_REPL = true),
      "use a REPL for type analysis of ECMA-262.",
    ),
  )
  case class Config()
}
