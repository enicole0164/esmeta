
package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.es.util.withCFG
import esmeta.es.util.injector.Injector
import esmeta.es.Script
import esmeta.interpreter.Interpreter
import esmeta.es.*
import esmeta.state.*
import esmeta.test262.*
import esmeta.js.*
import esmeta.util.*
import esmeta.util.SystemUtils.*
import esmeta.util.BaseUtils.*

/** `inject` phase */
case object FolderInject extends Phase[CFG, Unit] {
  val name = "folder-inject"
  val help = "injects assertions to check final state of a folder of ECMAScript files."
  private var _config: Config = null

  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Unit = withCFG(cfg) {
    println("Hi there~")
    _config = config

//   ): Unit = withCFG(cfg) {
//     val filename = getFirstFilename(cmdConfig, this.name)
//     val injected = Injector.fromFile(filename, config.defs, config.log)

//     // dump the assertion-injected ECMAScript program
//     for (filename <- config.out)
//       dumpFile(
//         name = "an assertion-injected ECMAScript program",
//         data = injected,
//         filename = filename,
//       )

//     injected.toString
//   }
    
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
    val assertDir = s"./reported-bugs-assertion"
    val names = getNames(codeDir)
    println(names)
    
    debug(s"- Handling each code...")
    // names
    //   .filterNot(skip)
    //   .foldLeft
    // for every file, inject assertion
    val injection = names.map(
        (filename:String) => {
        val filepath = s"$codeDir/$filename"
        val injected = Injector.fromFile(filepath, config.defs, config.log)
        dumpFile(
            name = "an assertion-injected ECMAScript program",
            data = injected.core,
            filename = s"$assertDir/$filename"
        )
    }
    )
    // println(injection)

    // val filepath = s"$codeDir/bbl-01.js"
    // val injected = Injector.fromFile(filepath, config.defs, config.log)
    // // println(injected.core) // 저장 in dir
    // dumpFile(
    //     name = "an assertion-injected ECMAScript program",
    //     data = injected.core,
    //     filename = s"$assertDir/bbl-01.js"
    // )
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
