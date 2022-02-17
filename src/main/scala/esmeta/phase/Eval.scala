package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.interp.*
import esmeta.js.*
import esmeta.js.util.*

/** `parse` phase */
case object JsEval extends Phase[CFG, State] {
  val name = "js-eval"
  val help = "evaluates a JavaScript file."
  def apply(
    cfg: CFG,
    globalConfig: GlobalConfig,
    config: Config,
  ): State = {
    val st = State(cfg)
    new Interp(st).fixpoint
    st
  }
  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List()
  case class Config()
}