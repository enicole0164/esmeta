package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.ir.Program
import esmeta.util.*
import esmeta.util.SystemUtils.*

/** `build-cfg` phase */
case object BuildCFG extends Phase[Program, CFG] {
  val name = "build-cfg"
  val help = "builds a control-flow graph (CFG) from an IR program."
  def apply(
    program: Program,
    globalConfig: GlobalConfig,
    config: Config,
  ): CFG = {
    // TODO refactor
    def norm(name: String) = name
      .replace("/", "")
      .replace(" ", "")
      .replace("<", "")
      .replace(">", "")
      .replace("`", "")
    val cfg = program.toCFG

    if (LOG) cfg.dumpTo(CFG_LOG_DIR)
    if (config.dot) {
      mkdir(CFG_LOG_DIR)
      // dump dot format
      cfg.funcs.foreach(f => {
        val name =
          s"${CFG_LOG_DIR}/${norm(f.irFunc.name)}"
        dumpFile(f.toDot, s"$name.dot")
      })
      // check wheter dot is available
      if (config.pdf) {
        if (isNormalExit("dot -V")) {
          cfg.funcs.foreach(f => {
            val name =
              s"${CFG_LOG_DIR}/${norm(f.irFunc.name)}"
            try executeCmd(s"dot -Tpdf $name.dot -o $name.pdf")
            catch {
              case ex: Exception =>
                println(
                  s"[ERROR] $name: exception occured while converting to pdf",
                )
            }
          })
        } else println("Dot is not installed!")
      }
    }

    cfg
  }
  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "dot",
      BoolOption(c => c.dot = true),
      "dump the cfg in a dot format.",
    ),
    (
      "pdf",
      BoolOption(c => { c.dot = true; c.pdf = true }),
      "dump the cfg in a dot and pdf format.",
    ),
  )
  case class Config(
    var dot: Boolean = false,
    var pdf: Boolean = false,
  )
}
