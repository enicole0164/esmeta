package esmeta.phase

import esmeta.*
import esmeta.cfg.CFG
import esmeta.error.*
import esmeta.interpreter.*
import esmeta.state.*
import esmeta.util.*
import esmeta.util.BaseUtils.*
import esmeta.util.SystemUtils.*
import esmeta.es.*
import esmeta.es.util.{Coverage, withCFG, JsonProtocol}
import esmeta.test262.{*, given}
import esmeta.test262.util.TestFilter
import java.io.File
import esmeta.es.util.Coverage.CoverageConstructor
import io.circe.*, io.circe.syntax.*
import io.circe.Json

/** `test262-cov` phase */
case object Test262Cov extends Phase[CFG, Unit] {
  val name = "test262-cov"
  val help = "Loads coverage from JSON files"
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Unit = withCFG(cfg) {
    println("In test262-cov phase")

    // load coverage from JSON files
    // node-coverage,
    // branch-coverage,
    

    // Resulting Coverage.
    import Coverage.{*, given}

    val cov : Coverage = fromLog(s"$TEST262TEST_LOG_DIR/eval-230303_17_32/", true)
    // val jsonProtocol = JsonProtocol(cfg)
    // import jsonProtocol.given

    // def rj[T](json: String)(implicit decoder: Decoder[T]) =
    //   readJson[T](s"$TEST262TEST_LOG_DIR/ecal-230303_17_32/$json")

    // val con: CoverageConstructor = rj(s"constructor.json")
    // val cov = new Coverage(con.timeLimit, con.kFs, con.cp)

    // val nodeViewInfos: Vector[NodeViewInfo] = rj("node-coverage.json")
    // val condViewInfos: Vector[CondViewInfo] = rj("branch-coverage.json")



    // ------------------------------- From Test262Test ----------------------------------
    // // set test mode
    // if (!config.noTestMode) TEST_MODE = true

    // // get target version of Test262
    // val version = Test262.getVersion(config.target)
    // val test262 = Test262(version)

    // // run test262 eval test in debugging mode
    // if (config.debug)
    //   test262.evalTest(
    //     cmdConfig.targets,
    //     kFs = config.kFs,
    //     cp = config.cp,
    //   )
    // // run test262 eval test
    // else
    //   test262.evalTest(
    //     cmdConfig.targets,
    //     config.log,
    //     config.progress,
    //     config.coverage,
    //     config.timeLimit,
    //     config.kFs,
    //     config.cp,
    //   )
  }

  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "debug",
      BoolOption(c => c.debug = true),
      "turn on the debugging mode.",
    ),
    (
      "log",
      BoolOption(c => c.log = true),
      "turn on logging mode.",
    ),
    (
      "target",
      StrOption((c, s) => c.target = Some(s)),
      "set the target git version of Test262 (default: current version).",
    ),
    (
      "progress",
      BoolOption(c => c.progress = true),
      "show progress bar.",
    ),
    (
      "coverage",
      BoolOption(c => c.coverage = true),
      "measure node/branch coverage in CFG of ECMA-262.",
    ),
    (
      "timeout",
      NumOption((c, k) => c.timeLimit = Some(k)),
      "set the time limit in seconds (default: no limit).",
    ),
    (
      "k-fs",
      NumOption((c, k) => c.kFs = k),
      "set the k-value for feature sensitivity. (default: 0)",
    ),
    (
      "cp",
      BoolOption(c => c.cp = true),
      "turn on the call-path mode (default: false) (meaningful if k-fs > 0).",
    ),
    (
      "no-test-mode",
      BoolOption(c => c.noTestMode = true),
      "set no test mode for print.",
    ),
  )
  case class Config(
    var target: Option[String] = None,
    var debug: Boolean = false,
    var log: Boolean = false,
    var coverage: Boolean = false,
    var progress: Boolean = false,
    var timeLimit: Option[Int] = None,
    var kFs: Int = 0,
    var cp: Boolean = false,
    var noTestMode: Boolean = false,
  )
}
