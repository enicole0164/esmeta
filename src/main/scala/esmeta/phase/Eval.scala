package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.interpreter.*
import esmeta.state.*
import esmeta.util.*
import esmeta.util.SystemUtils.*
import esmeta.es.*

/** `eval` phase */
case object Eval extends Phase[CFG, State] {
  val name = "eval"
  val help = "evaluates an ECMAScript file."
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): State =
    val filename = getFirstFilename(cmdConfig, this.name)
    val initSt = cfg.init.fromFile(filename)
    val st = Interpreter(initSt, log = config.log, timeLimit = config.timeLimit)
    st
  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "timeout",
      NumOption((c, k) => c.timeLimit = Some(k)),
      "set the time limit in seconds (default: no limit).",
    ),
    (
      "log",
      BoolOption(c => c.log = true),
      "turn on logging mode.",
    ),
  )
  case class Config(
    var timeLimit: Option[Int] = None,
    var log: Boolean = false,
  )
}
