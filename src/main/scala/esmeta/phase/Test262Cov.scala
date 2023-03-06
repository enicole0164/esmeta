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
import esmeta.es.util.fuzzer.Fuzzer
import esmeta.es.Script

/** `test262-cov` phase */
case object Test262Cov
  extends Phase[
    CFG,
    Unit,
  ] {
  val name = "test262-cov"
  val help = "Loads coverage from JSON files"
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Unit = withCFG(cfg) {
    // 0. Set inputs
    val log_cov_dir = cmdConfig.targets(0)
    val script_path = cmdConfig.targets(1)

    val logDir: String = s"$TEST262COV_LOG_DIR/cov-$dateStr"
    
    // Example command
    // run test262-cov eval-230306_15_16 tests/test262/test/language/expressions/addition/bigint-and-number.js dir_test262-cov

    // 1. Load Coverage from log
    import Coverage.{*, given}

    val from_log : (Coverage, CoverageConstructor) = fromLog2(s"$TEST262TEST_LOG_DIR/$log_cov_dir")

    val log_cov : Coverage = from_log._1
    val log_con : CoverageConstructor = from_log._2

    // 2. Get new_script's coverage and compare.
    val script_cov : Coverage = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)

    // 3. Load new_script
    val script = Script(readFile(s"$TEST262TEST_LOG_DIR/$log_cov_dir/minimal/$script_path"), s"$script_path")

    // 4. Record the code's Coverage

    // take script as input
    script_cov.runAndCheck(script)

    val result = log_cov.runAndCheck(script)
    // updated, covered
    println((result._2, result._3))

    // 5. Dump the coverage.
    script_cov.dumpTo(logDir)


    // 6. Compare the coverage. (return the coverage that the original cov doesn't have)
    
  
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
