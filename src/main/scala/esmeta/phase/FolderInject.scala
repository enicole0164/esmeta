
package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.es.util.withCFG
import esmeta.es.util.injector.Injector
import esmeta.es.Script
import esmeta.interpreter.Interpreter
import esmeta.es.*
import esmeta.es.util.*
import esmeta.state.*
import esmeta.test262.*
import esmeta.js.*
import esmeta.util.*
import esmeta.util.SystemUtils.*
import esmeta.util.BaseUtils.*

/** `FolderInject` phase */
case object FolderInject extends Phase[CFG, Unit] {
  val name = "folder-inject"
  val help = "injects assertions to check final state of a folder of ECMAScript files."
  private var _config: Config = null

  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Unit = withCFG(cfg) {
    _config = config
    
    // Collect file name
    val codeDir = optional {
        cmdConfig.targets(0)
    }
      .getOrElse {
        warn(
            "No explicit directories are given. Trying to use the default folder instead ..",
        )
        s"./reported-bugs",
      }
    val assertDir = s"$FOLDERINJECT_LOG_DIR/reported-bugs-assertion"
    val assertDir_usestrict = s"$FOLDERINJECT_LOG_DIR/reported-bugs-assertion-usestrict"
    val names = getNames(codeDir)
    
    debug(s"- Handling each code...")
    
    // IQ1. getData 함수를 잘 정의하면, dumpDir을 사용할 수 있지 않을까?
    // IQ2. USE_STRICT를 붙여서 새로운 reported-bugs-usestrict를 만들어보자.
    val useStrictDir = s"$FOLDERINJECT_LOG_DIR/reported-bugs-usestrict"
    val assertFullDir = s"$FOLDERINJECT_LOG_DIR/reported-bugs-assertfull"

    val injection = names.map(
        (filename:String) => {
        val filepath = s"$codeDir/$filename"
        dumpFile(
            data = USE_STRICT + readFile(s"$codeDir/$filename") + LINE_SEP,
            filename = s"$useStrictDir/$filename"
        )
        val injected = Injector.fromFile(filepath, config.defs, config.log)
        dumpFile(
            data = injected.core,
            filename = s"$assertDir/$filename"
        )
        val filepath_usestrict = s"$useStrictDir/$filename"
        val injected_usestrict = Injector.fromFile(filepath_usestrict, config.defs, config.log)
        dumpFile(
            data = injected_usestrict.core,
            filename = s"$assertDir_usestrict/$filename"
        )
        val filepath_assertFull = s"$useStrictDir/$filename"
        val injected_assertFull = Injector.fromFile(filepath_assertFull, config.defs, config.log)
        dumpFile(
            data = injected_usestrict,
            filename = s"$assertFullDir/$filename"
        )
    }
    )
  }
    
    // ----------
    // private helpers
    // ----------

    // debug
  private def debug(data: Any): Unit =
    if (_config.debug) println(data)

    // warn about correct usage
  private def warnUsage =
    throw new Exception("""
    |Usage: Please give two directory names,
    |       where the first directory contains raw code,
    |       and the second directory contains assertions.""".stripMargin)

  // get names of the files of the given directory
  private def getNames(dir: String) =
    listFiles(dir).filter(_.isFile).map(_.getName)

  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "defs",
      BoolOption(c => c.defs = true),
      "prepend definitions of helpers for assertions.",
    ),
    (
      "out",
      StrOption((c, s) => c.out = Some(s)),
      "dump assertion-injected ECMAScript programs to a given directory.",
    ),
    (
      "log",
      BoolOption(c => c.log = true),
      "turn on logging mode.",
    ),
  )
  case class Config(
    var defs: Boolean = false,
    var out: Option[String] = None,
    var log: Boolean = false,
    var debug: Boolean = false,
  )
}
