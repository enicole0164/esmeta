package esmeta.phase

import esmeta.{error => _, *}
import esmeta.cfg.CFG
import esmeta.es.util.{Coverage, withCFG}
// import esmeta.es.util.fuzzer.*
import esmeta.util.*
import esmeta.util.BaseUtils.*
import esmeta.util.SystemUtils.*
import esmeta.es.util.test262fuzzer.*
import esmeta.test262.{*, given}

/** `test262-fuzz` phase */

case object Test262Fuzz
    extends Phase[
        CFG,
        Coverage,
    ] {
    val name = "test262-fuzz"
    val help = "Fuzz to reach 100% coverage in Test262"
    def apply(
        cfg: CFG,
        cmdConfig: CommandConfig,
        config: Config,
    ): Coverage = withCFG(cfg) {
        // optionally set the seed for the random number generator
        config.seed.foreach(setSeed)

        // get target version of Test262
        val version = Test262.getVersion(config.target)
        val test262 = Test262(version)

        val cov = Test262Fuzzer(
        logInterval = config.logInterval,
        debug = config.debug,
        timeLimit = config.timeLimit,
        trial = config.trial,
        duration = config.duration,
        kFs = config.kFs,
        cp = config.cp,
        target = test262,
        )

        // optionally dump the generated ECMAScript programs
        for (dirname <- config.out) cov.dumpToWithDetail(dirname)

        cov
    }
    def defaultConfig: Config = Config()
    val options: List[PhaseOption[Config]] = List(
        (
        "out",
        StrOption((c, s) => c.out = Some(s)),
        "dump the generated ECMAScript programs to a given directory.",
        ),
        (
        "log-interval",
        NumOption((c, k) => c.logInterval = Some(k)),
        "turn on logging mode and set logging interval (default: 600 seconds).",
        ),
        (
        "debug",
        NumOption((c, k) =>
            if (k < 0 || k > 2) error("invalid debug level: please set 0 to 2")
            else c.debug = k,
        ),
        "turn on deug mode with level (0: no-debug, 1: partial, 2: all)",
        ),
        (
        "timeout",
        NumOption((c, k) => c.timeLimit = Some(k)),
        "set the time limit in seconds (default: 1 second).",
        ),
        (
        "trial",
        NumOption((c, k) => c.trial = Some(k)),
        "set the number of trials (default: INF).",
        ),
        (
        "duration",
        NumOption((c, k) => c.duration = Some(k)),
        "set the maximum duration for fuzzing (default: INF)",
        ),
        (
        "seed",
        NumOption((c, k) => c.seed = Some(k)),
        "set the specific seed for the random number generator (default: None).",
        ),
        (
        "k-fs",
        NumOption((c, k) => c.kFs = k),
        "set the k-value for feature sensitivity (default: 0).",
        ),
        (
        "cp",
        BoolOption(c => c.cp = true),
        "turn on the call-path mode (default: false) (meaningful if k-fs > 0).",
        ),
        (
        "target",
        StrOption((c, s) => c.target = Some(s)),
        "set the target git version of Test262 (default: current version)."
        ),
    )
    case class Config(
        var out: Option[String] = None,
        var logInterval: Option[Int] = Some(600),
        var debug: Int = 0,
        var timeLimit: Option[Int] = Some(1),
        var trial: Option[Int] = None,
        var duration: Option[Int] = None,
        var seed: Option[Int] = None,
        var kFs: Int = 0,
        var cp: Boolean = false,
        var target: Option[String] = None,
    )
}