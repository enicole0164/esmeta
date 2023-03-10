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
import java.io.File
import esmeta.es.util.Coverage.CoverageConstructor
import io.circe.*, io.circe.syntax.*
import io.circe.Json
import esmeta.es.Script
import esmeta.test262coverage.Test262Coverage

/** `test262-cov` phase */
case object Test262Cov
  extends Phase[
    CFG,
    Boolean,
  ] {
  val name = "test262-cov"
  val help = "Loads coverage from JSON files"
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Boolean = withCFG(cfg) {
    // Set inputs
    val log_cov_dir = cmdConfig.targets(0)
    val targets = cmdConfig.targets.drop(1)

    val logDir: String = s"$TEST262COV_LOG_DIR/cov-$dateStr"
    
    // Example command
    // run test262-cov eval-230306_15_16 tests/test262/test/language/expressions/addition/bigint-and-number.js
    // run test262-cov eval-230306_15_16

    val result = Test262Coverage(log_cov_dir, logDir).coverage_runAndCheck(targets)
    
    result

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
