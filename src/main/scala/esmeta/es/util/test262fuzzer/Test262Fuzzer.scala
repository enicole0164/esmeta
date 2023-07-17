package esmeta.es.util.test262fuzzer

import esmeta.error.*
import esmeta.es.*
import esmeta.es.util.*
import esmeta.es.util.injector.*
import esmeta.es.util.mutator.*
import esmeta.es.util.synthesizer.*
import esmeta.js.*
import esmeta.state.*
import esmeta.util.*
import esmeta.util.BaseUtils.*
import esmeta.util.SystemUtils.*
import esmeta.{ESMeta, TEST262FUZZ_LOG_DIR, LINE_SEP}
import io.circe.*, io.circe.syntax.*
import java.io.PrintWriter
import scala.collection.mutable.{ListBuffer, Map => MMap}
import scala.collection.parallel.CollectionConverters._
import esmeta.es.util.fuzzer.{TargetSelector, WeightedSelector, RandomSelector, BranchSelector}

import esmeta.es.util.Coverage.fromLog_testfuzz_multiple_files
import esmeta.{COV_DIR, BASE_DIR}

/* For Initializing test262 pool*/
import esmeta.test262.Test262
import esmeta.es.util.Coverage.Interp
import esmeta.test262.NormalConfig

/** ECMAScript program fuzzer with ECMA-262 (w Test262 biased) */
object Test262Fuzzer {
  def apply(
    logInterval: Option[Int] = Some(600), // default is 10 minutes.
    debug: Int = NO_DEBUG, // 2: all, 1: partial, 0: no-debug
    stdOut: Boolean = false,
    timeLimit: Option[Int] = None, // time limitation for each evaluation
    trial: Option[Int] = None, // `None` denotes no bound
    duration: Option[Int] = None, // `None` denotes no bound
    kFs: Int = 0,
    cp: Boolean = false,
    target: Test262
  ): Coverage = new Test262Fuzzer(
    logInterval,
    debug,
    stdOut,
    timeLimit,
    trial,
    duration,
    kFs,
    cp,
    target,
  ).result

  // debugging levels
  val ALL = 2
  val PARTIAL = 1
  val NO_DEBUG = 0
}

/** extensible helper of ECMAScript program fuzzer with ECMA-262 */
class Test262Fuzzer(
  logInterval: Option[Int] = Some(600), // default is 10 minutes.
  debug: Int = NO_DEBUG, // 2: all, 1: partial, 0: no
  stdOut: Boolean = false,
  timeLimit: Option[Int] = None, // time limitation for each evaluation
  trial: Option[Int] = None, // `None` denotes no bound
  duration: Option[Int] = None, // `None` denotes no bound
  kFs: Int = 0,
  cp: Boolean = false,
  target: Test262,
) {
  import Test262Fuzzer.*

  /** generated ECMAScript programs */
  lazy val result: Coverage =
    logInterval.map(_ => {
      // start logging
      mkdir(logDir, remove = true)
      createSymlink(symlink, logDir, overwrite = true)
      dumpFile(ESMeta.currentVersion, s"$logDir/version")
      dumpFile(getSeed, s"$logDir/seed")
      dumpFile(JSEngine.defaultEngineToString, s"$logDir/default-engine")
      genSummaryHeader
      genStatHeader(selector.names, selStatTsv)
      genStatHeader(mutator.names, mutStatTsv)
    })
    time(
      s"- initializing program pool with ${initPool.size} programs", {
        // Get Available Cov.
        val fileList = iterateDir(s"$COV_DIR")

        for (filepath <- fileList) {
          fromLog_testfuzz_multiple_files(filepath, cov)
        }
        cov.dumpToBaseDir(
          baseDir = s"$BASE_DIR/test262-fuzz-coverage",
          withScripts = true,
          withScriptInfo = false,
          withTargetCondViews = true,
          withUnreachableFuncs = true,
          withMsg = true,
          logBool = true,
        )
      },
    )
    println(s"- the initial program pool consists of ${pool.size} programs.")
    time(
      "- repeatedly trying to fuzz new programs to increase coverage", {
        logInterval.map(_ => {
          startTime = System.currentTimeMillis
          startInterval = System.currentTimeMillis
          logging
        })
        trial match
          case Some(count) => for (_ <- Range(0, count)) if (!timeout) fuzz
          case None        => while (!timeout) fuzz
      },
    )

    // finish logging
    logInterval.map(_ => {
      logging
      summaryTsv.close
      selStatTsv.close
      mutStatTsv.close
    })

    cov
  
  private def iterateDir(dirname: String): List[String] = walkTree(dirname).toList
    .filter(f => f.getName == "code.js")
    .map(f => f.getAbsolutePath().substring(0, f.getAbsolutePath().length() - 8))

  /** current program pool */
  def pool: Set[Script] = cov.minimalScripts

  /** one trial to fuzz new programs to increase coverage */
  def fuzz: Unit =
    iter += 1
    debugging(("-" * 40) + f"  iter: $iter%10d  " + ("-" * 40))
    for (bound <- logInterval) {
      val seconds = bound * 1000
      if (interval > seconds) {
        if (debug == NO_DEBUG) logging else time("Logging", logging)
        startInterval += seconds
      }
    }
    val (selectorName, script, condView) = selector(pool, cov)
    val selectorInfo = selectorName + condView.map(" - " + _).getOrElse("")
    val code = script.code
    debugging(f"[$selectorInfo%-30s] $code")
    debugFlush

    val mutants = mutator(code, 100, condView.map((_, cov)))
      .map((name, ast) => (name, ast.toString(grammar)))
      .distinctBy(_._2)
      .toArray
      .par
      .map(infoExtractor)
      .toList

    for ((mutatorName, mutatedCode, info) <- mutants)
      debugging(f"----- $mutatorName%-20s-----> $mutatedCode")

      val result = add(mutatedCode, info)
      update(selectorName, selectorStat, result)
      update(mutatorName, mutatorStat, result)

  /** Case class to hold the information about mutant */
  case class MutantInfo(
    val visited: Boolean = false,
    val invalid: Boolean = false,
    val interp: Option[Coverage.Interp] = None,
  )

  /** Extract information for the mutated code. Should be side-effect free. */
  def infoExtractor(
    mutatorName: String,
    mutatedCode: String,
  ): (String, String, MutantInfo) =
    val info = {
      if (visited contains mutatedCode)
        MutantInfo(visited = true)
      else if (!ValidityChecker(mutatedCode))
        MutantInfo(invalid = true)
      else
        MutantInfo(interp = optional(cov.run(mutatedCode)))
    }
    (mutatorName, mutatedCode, info)

  /** add test262 test at init step */
  def add_test262(code: String): Boolean = handleResult(Try {
    if (visited contains code)
      fail("ALREADY VISITED")
    visited += code
    if (!ValidityChecker(code))
      fail("INVALID PROGRAM")
    val script = test262toScript(code)
    val (st, updated, covered) = cov.runAndCheck(script)
    if (!updated) fail("NO UPDATE")
    val returnValue = st(GLOBAL_RESULT)
    if (returnValue != Undef) throw InvalidExit(returnValue)
    covered
  })

  /** add new program with precomputed info */
  def add(code: String, info: MutantInfo): Boolean = handleResult(Try {
    if (info.visited)
      fail("ALREADY VISITED")
    visited += code
    if (info.invalid)
      fail("INVALID PROGRAM")
    val script = toScript(code)
    val (_, updated, covered) =
      cov.check_test262(script, info.interp.getOrElse(fail("Interp Fail")))
    if (!updated) fail("NO UPDATE")
    covered
  })

  /** handle add result */
  def handleResult(result: Try[Boolean]): Boolean =
    debugging(f" ${"COVERAGE RESULT"}%30s: ", newline = false)
    val pass = result match
      case Success(covered)             => debugging(passMsg("")); covered
      case Failure(e: TimeoutException) => debugging(failMsg("TIMEOUT")); false
      case Failure(e: NotSupported) =>
        debugging(failMsg("NOT SUPPORTED")); false
      case Failure(e) =>
        e.getMessage match
          case "ALREADY VISITED" | "INVALID PROGRAM" if debug == PARTIAL =>
            debugClean
          case msg =>
            debugging(failMsg(msg))
        false
    debugFlush
    pass

  // a pass-or-fail counter
  case class Counter(pass: Int = 0, fail: Int = 0)
  def update[T](t: T, map: MMap[T, Counter], pass: Boolean): Unit =
    val Counter(p, f) = map.getOrElse(t, Counter())
    val updated = if (pass) Counter(p + 1, f) else Counter(p, f + 1)
    map += t -> updated
  private def counterJson[T: Ordering](map: MMap[T, Counter]): Json =
    JsonObject(
      (for ((condView, Counter(pass, fail)) <- map.toList.sortBy(_._1)) yield {
        val key = condView.toString
        val obj = JsonObject(
          "pass" -> pass.asJson,
          "fail" -> fail.asJson,
        ).asJson
        key -> obj
      }): _*,
    ).asJson

  /** ECMAScript grammar */
  val grammar = cfg.grammar
  val scriptParser = cfg.scriptParser

  /** coverage */
  val cov: Coverage = Coverage(timeLimit, kFs, cp)

  /** target selector */
  val selector: TargetSelector = WeightedSelector(
    RandomSelector -> 2,
    BranchSelector -> 8,
  )

  /** selector stat */
  val selectorStat: MMap[String, Counter] = MMap()

  /** mutator */
  val mutator: Mutator = WeightedMutator(
    NearestMutator() -> 6,
    RandomMutator() -> 3,
    StatementInserter() -> 1,
    Remover() -> 1,
    SpecStringMutator() -> 1,
  )

  /** mutator stat */
  val mutatorStat: MMap[String, Counter] = MMap()

  /** initial pool */
  val initPool = {
    val tests = target.getTests(
        name = "eval",
        dataList = target.getDataList(Nil),
        useProgress = true,
    )
    tests
  }
    

  lazy val logDir: String = s"$TEST262FUZZ_LOG_DIR/fuzz-$dateStr"
  lazy val symlink: String = s"$TEST262FUZZ_LOG_DIR/recent"

  // ---------------------------------------------------------------------------
  // private helpers
  // ---------------------------------------------------------------------------
  // current iteration count
  private var iter: Int = 0

  // current id
  private var idCounter: Long = 0
  private def nextId: Long = { val id = idCounter; idCounter += 1; id }

  // evaluation start time
  private var startTime: Long = 0L
  private def elapsed: Long = System.currentTimeMillis - startTime
  private def timeout = duration.fold(false)(_ * 1000 < elapsed)
  private var startInterval: Long = 0L
  private def interval: Long = System.currentTimeMillis - startInterval

  // conversion from code string to `Script` object
  private def toScript(code: String): Script = Script(code, s"$nextId.js")

  // conversion from test262 code string to 'Script' object
  private def test262toScript(code: String): Script = Script(code, s"test262_${nextId}.js")

  // check if the added code is visited
  private var visited: Set[String] = Set()

  // indicating that add failed
  private def fail(msg: String) = throw Exception(msg)

  // debugging
  private var debugMsg = ""
  private def debugging(
    msg: String,
    newline: Boolean = true,
  ): Unit = if (debug == ALL) {
    if (newline) println(msg) else print(msg)
  } else if (debug > NO_DEBUG) {
    debugMsg += msg
    if (newline) debugMsg += LINE_SEP
  }
  private def debugClean: Unit = debugMsg = ""
  private def debugFlush: Unit = { print(debugMsg); debugClean }

  // generate headers
  private def genSummaryHeader =
    var header = Vector(
      "iter(#)",
      "time(ms)",
      "time(h:m:s)",
      "program(#)",
      "minimal(#)",
      "node(#)",
      "branch(#)",
    )
    if (kFs > 0) header ++= Vector(s"sens-node(#)", s"sens-branch(#)")
    header ++= Vector("target-conds(#)")
    if (kFs > 0) header ++= Vector(s"sens-target-conds(#)")
    addRow(header)
  private def genStatHeader(keys: List[String], nf: PrintWriter) =
    var header1 = Vector("iter(#)")
    var header2 = Vector("-")
    keys.foreach(k => {
      header1 ++= Vector(k, "-", "-", "-")
      header2 ++= Vector("pass", "fail", "total", "ratio")
    })
    addRow(header1, nf)
    addRow(header2, nf)

  // dump selector and mutator stat
  private def dumpStat(
    keys: List[String],
    stat: MMap[String, Counter],
    tsv: PrintWriter,
  ): Unit =
    var row = Vector[Any](iter)
    keys.foreach(k => {
      val Counter(pass, fail) = stat.getOrElse(k, Counter())
      val total = pass + fail
      val ratio = optional((pass * 10000) / total / 100.0).getOrElse(0.0)
      row ++= Vector(pass, fail, total, s"$ratio%")
    })
    addRow(row, tsv)

  // logging
  private def logging: Unit =
    val n = cov.nodeCov
    val b = cov.branchCov
    val e = elapsed
    val t = Time(e).simpleString
    val nv = cov.nodeViewCov
    val bv = cov.branchViewCov
    val tc = cov.targetCondViews.size
    val tcv = cov.targetCondViews.map(_._2.size).fold(0)(_ + _)
    var row = Vector(iter, e, t, visited.size, pool.size, n, b)
    if (kFs > 0) row ++= Vector(nv, bv)
    row ++= Vector(tc)
    if (kFs > 0) row ++= Vector(tcv)
    addRow(row)
    // dump coveragge
    cov.dumpToWithDetail(logDir, withMsg = (debug == ALL))
    // dump selector and mutator stat
    dumpStat(selector.names, selectorStat, selStatTsv)
    dumpStat(mutator.names, mutatorStat, mutStatTsv)
  private def addRow(data: Iterable[Any], nf: PrintWriter = summaryTsv): Unit =
    val row = data.mkString("\t")
    if (stdOut) println(row)
    nf.println(row)
    nf.flush
  private lazy val summaryTsv: PrintWriter = getPrintWriter(
    s"$logDir/summary.tsv",
  )
  private lazy val selStatTsv: PrintWriter = getPrintWriter(
    s"$logDir/selector-stat.tsv",
  )
  private lazy val mutStatTsv: PrintWriter = getPrintWriter(
    s"$logDir/mutation-stat.tsv",
  )

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
}