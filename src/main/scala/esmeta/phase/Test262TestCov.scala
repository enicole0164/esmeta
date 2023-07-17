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
import esmeta.es.util.{Coverage, withCFG}
import esmeta.test262.{*, given}
import esmeta.test262.util.TestFilter
import java.io.File
import scala.collection.mutable.ListBuffer
import esmeta.es.util.Coverage.*
import esmeta.cfg.util.JsonProtocol
import esmeta.es.util.JsonProtocol
import io.circe.*, io.circe.syntax.*
import scala.io.Source
import esmeta.cfg.Func
import esmeta.cfg.Node

/** `test262-test` phase */
case object Test262TestCov extends Phase[CFG, Unit] {
  val name = "test262-testcov"
  val help = "save coverage of test262 files (default: tests/test262)."
  def apply(
    cfg: CFG,
    cmdConfig: CommandConfig,
    config: Config,
  ): Unit = withCFG(cfg) {
    // set test mode
    if (!config.noTestMode) TEST_MODE = true

    // Phase 1
    // Get target version of Test262
    val version = Test262.getVersion(config.target)
    val test262 = Test262(version)

    val target = test262
    val dataList = test262.getDataList()
    val iterable = TestFilter(dataList).summary.normal

    val initPool = {
      val tests = target.getTests(
        name = "test262-testcov",
        dataList = target.getDataList(Nil),
        useProgress = true,
      )
      tests
    }
    
    // Phase2
    // Generate all test coverage
    // 1. Eliminating test cases that are yet
    val lines = Source.fromFile("/Users/jaeryeong/Documents/URP/esmeta/logs/test262-fuzz/test262-testcov-230526_13_53/yet.log").getLines.toSet
    val filtered_lines = lines
                          .filter(s => s.contains("built-ins/") || s.contains("language/"))
                          .map(_.split(" - ").apply(0))
    // 2. Generate coverage by file
    logForTests(
      name = "test262-testcov",
      tests = initPool,
      postSummary = "",
      log = true,
    )(
      check = normalConfig => {
        val testPath = normalConfig.name
        val testName = testPath.substring(BASE_DIR.length() + 1, testPath.length())
        val testName_shorter = testName.substring(19)
        if (filtered_lines.contains(testName_shorter))
          throw NotSupported("in yet logs")
        val testDir = testName.substring(0 , testName.length() - 3)
        val test262CovDir = s"${COV_DIR}_2/$testDir"
        if (!File(test262CovDir).exists()) {
          val rawCode = test262.loadTest(normalConfig.name)
          val cov: Coverage = Coverage()
          cov.runAndCheck(Script(rawCode, testName))
          cov.dumpToBaseDir(
            baseDir = test262CovDir,
            withScripts = true,
            withScriptInfo = true,
            withTargetCondViews = true,
            withUnreachableFuncs = true,
            withMsg = false,
            logBool = true,
          )
        }
      }
    )

    // Phase 3
    // Get statistics
    println(s"Total Node Available: ${cfg.nodeMap.size}")
    println(s"Total Branch Available: ${cfg.branches.length}")
    println(s"Total riaExprs Available: ${cfg.riaExprs.length}")
    println(s"Total Complete Funcs Available: ${cfg.program.completeFuncs.length}")
    println(s"Total Incomplete Funcs Available: ${cfg.program.incompleteFuncs.length}")
    println(s"Total Program Funcs Available: ${cfg.program.funcs.length}")
    println(s"Total CFG Funcs Available: ${cfg.funcs.length}")

    // Phase 4
    // Dump Test262 coverage
    val test262_cov = Coverage(Some(1), 0, false)
    val fileList = iterateDir(s"$COV_DIR")

    for (filepath <- fileList) {
      fromLog_testfuzz_multiple_files(filepath, test262_cov)
    }

    test262_cov.dumpTo(
      baseDir = s"$COV_DIR/test262coverage",
      withScripts = true,
      withScriptInfo = false,
      withTargetCondViews = true,
      withUnreachableFuncs = true,
      withMsg = true,
      logBool = true,
    )

    // Phase 5
    // Compare two coverage
    val test262coverage_dir = s"$COV_DIR/test262coverage"
    val test262fuzzcoverage_dir = s"$COV_DIR/logs/test262-fuzz/fuzz-230522_07_42"

    val discoveredNodeScript = compareNodeCov(test262coverage_dir, test262fuzzcoverage_dir)
    val discoveredCondScript = compareCondCov(test262coverage_dir, test262fuzzcoverage_dir)


    // Generate a map that contains
    // key: Node
    // value: map"(NodeView, script, func.name)
    var discoveredNodeMap: Map[Node, DiscoveredNodeInfo] = Map()
    var discoveredCondMap: Map[Cond, DiscoveredCondInfo] = Map()

    for ((nodeview, script) <- discoveredNodeScript) {
      val NodeView(node, view) = nodeview
      val func = cfg.funcOf(node)
      print(s"${script},\"${func.name}\",")
      getDetailedDescriptionOfANode((nodeview, script))
      discoveredNodeMap += (node -> DiscoveredNodeInfo(node, nodeview, script, func))
    }

    for ((condview, script) <- discoveredCondScript) {
      val CondView(cond, view) = condview
      val func = cfg.funcOf(cond.node.get)
      print(s"${script}\"${func.name}\",")
      getDetailedDescriptionOfACond((condview, script))
      discoveredCondMap += (cond -> DiscoveredCondInfo(cond, condview, script, func))
    }
  }

  case class DiscoveredNodeInfo(node: Node, nodeView: NodeView, script: String, func: Func)
  case class DiscoveredCondInfo(cond: Cond, condView: CondView, script: String, func: Func)

  private def iterateDir(dirname: String): List[String] = walkTree(dirname).toList
    .filter(f => f.getName == "code.js")
    .map(f => f.getAbsolutePath().substring(0, f.getAbsolutePath().length() - 8))

  private def logForTests(
    name: String,
    tests: ProgressBar[NormalConfig],
    postSummary: => String = "",
    log: Boolean = true,
  )(
    check: NormalConfig => Unit,
    postJob: String => Unit = _ => {},
  ): Unit = 
    val summary = tests.summary
    val logDir = s"$TEST262FUZZ_LOG_DIR/$name-$dateStr"

    // setting for logging
    if (log)
      println(s"- Logging to $logDir...")
      mkdir(logDir)
      dumpFile(ESMeta.currentVersion, s"$logDir/esmeta-version")
      summary.timeouts.setPath(s"$logDir/timeout.log")
      summary.yets.setPath(s"$logDir/yet.log")
      summary.fails.setPath(s"$logDir/fail.log")
      summary.passes.setPath(s"$logDir/pass.log")

    var num_done = 0

    // run tests
    for (test <- tests) {
      check(test)
    }
    // logging after tests
    if (log)
      summary.close
      val summaryStr =
        if (postSummary.isEmpty) s"$summary"
        else s"$summary$LINE_SEP$postSummary"
      dumpFile(s"Test262 $name test summary", summaryStr, s"$logDir/summary")

    // post job
    postJob(logDir)
    

    
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
