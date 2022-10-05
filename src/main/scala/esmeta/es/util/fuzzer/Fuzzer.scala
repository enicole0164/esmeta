package esmeta.es.util.fuzzer

import esmeta.error.*
import esmeta.es.*
import esmeta.es.util.*
import esmeta.es.util.injector.*
import esmeta.es.util.mutator.*
import esmeta.es.util.synthesizer.*
import esmeta.state.*
import esmeta.util.*
import esmeta.util.BaseUtils.*
import esmeta.util.SystemUtils.*
import esmeta.{ESMeta, FUZZ_LOG_DIR, LINE_SEP}
import io.circe.*, io.circe.syntax.*
import java.io.PrintWriter
import scala.collection.mutable.{ListBuffer, Map => MMap}
import scala.util._

/** ECMAScript program fuzzer with ECMA-262 */
object Fuzzer:
  def apply(
    logInterval: Option[Int] = Some(600), // default is 10 minutes.
    debug: Boolean = false,
    stdOut: Boolean = false,
    timeLimit: Option[Int] = None, // time limitation for each evaluation
    trial: Option[Int] = None, // `None` denotes no bound
    conformTest: Boolean = false,
    synK: Option[Int] = None,
  ): Coverage = new Fuzzer(
    logInterval,
    debug,
    stdOut,
    timeLimit,
    trial,
    conformTest,
    synK,
  ).result

/** extensible helper of ECMAScript program fuzzer with ECMA-262 */
class Fuzzer(
  logInterval: Option[Int] = Some(600), // default is 10 minutes.
  debug: Boolean = false,
  stdOut: Boolean = false,
  timeLimit: Option[Int] = None, // time limitation for each evaluation
  trial: Option[Int] = None, // `None` denotes no bound
  conformTest: Boolean = false,
  synK: Option[Int] = None,
) {

  /** generated ECMAScript programs */
  lazy val result: Coverage =
    logInterval.map(_ => {
      // start logging
      mkdir(logDir, remove = true)
      dumpFile(ESMeta.currentVersion, s"$logDir/version")
      dumpFile(getSeed, s"$logDir/seed")
      var row = Vector(
        "iter(#)",
        "time(ms)",
        "time(h:m:s)",
        "script(#)",
        "node(#)",
        "branch(#)",
      )
      synK.map(k => row ++= Vector(s"$k-syn-node(#)", s"$k-syn-branch(#)"))
      row ++= Vector("target-conds(#)")
      if (conformTest) row ++= Vector("conform-bug(#)", "trans-bug(#)")
      addRow(row)
    })
    time(
      s"- initializing program pool with ${initPool.size} programs", {
        for ((synthesizer, code) <- initPool; insertedCode <- insertSemi(code))
          debugging(f"[${synthesizer.name}%-30s] $code")
          add(insertedCode)
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
          case Some(count) => for (_ <- Range(0, count)) fuzz
          case None        => while (true) fuzz
      },
    )

    // finish logging
    logInterval.map(_ => {
      logging
      nf.close
    })

    cov

  /** current program pool */
  def pool: Set[Script] = cov.minimalScripts

  /** one trial to fuzz a new program to increase coverage */
  def fuzz: Boolean =
    iter += 1
    for (bound <- logInterval) {
      val seconds = bound * 1000
      if (interval > seconds) {
        logging
        startInterval += seconds
      }
    }
    val (script, condView, nearest) = selector(pool, cov, cfg.grammar, debug)
    val mutated = mutator(script.code, condView, nearest, debug)
    val code = mutated.toString(grammar)
    add(code)

  /** add new program */
  def add(code: String): Boolean =
    val result = Try {
      if (visited contains code)
        fail("ALREADY VISITED")
      visited += code
      if (!ValidityChecker(code))
        fail("INVALID PROGRAM")
      val script = toScript(code)
      val (initSt, exitSt, interp, updated) = cov.runAndCheck(script)
      if (conformTest) doConformTest(initSt, exitSt, interp)
      if (!updated) fail("NO UPDATE")
    }
    debugging(f" ${"COVERAGE RESULT"}%30s: ", newline = false)
    result match {
      case Success(_)                   => debugging(passMsg("")); true
      case Failure(e: TimeoutException) => debugging(failMsg("TIMEOUT")); false
      case Failure(e: NotSupported) =>
        debugging(failMsg("NOT SUPPORTED")); false
      case Failure(e) => debugging(failMsg(e.getMessage)); false
    }

  // conformance check counter for engines
  val engineMap: MMap[Coverage.NodeView, Counter] = MMap()

  // conformance check counter for transpilers
  val transMap: MMap[Coverage.NodeView, Counter] = MMap()

  // conformance check counter
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

  // all meaningful tests
  private val failedTests: ListBuffer[(String, ConformTest)] = ListBuffer()
  private val transFailedTests: ListBuffer[(String, ConformTest)] = ListBuffer()
  private def doConformTest(
    initSt: State,
    finalSt: State,
    interp: Coverage.Interp,
  ): Unit =
    val code = initSt.sourceText.get
    val (test, transTest) = ConformTest.createTestPair(initSt, finalSt)
    val d = if (iter == 0) 0 else duration
    val comment = List(
      s"// generated at iteration $iter",
      s"// took $d ms (${Time(d).simpleString})",
    ).mkString("", LINE_SEP, LINE_SEP)
    test.comment = comment
    transTest.comment = comment
    // conformance check for engines
    val pass = test.isPass
    if (debug) print(f" ${"GRAAL-JS CONFORMANCE RESULT"}%30s: ")
    if (!pass) failedTests.addOne(code, test)
    interp.touchedNodeViews.keys.map(update(_, engineMap, pass))
    debugging(if (test.isPass) passMsg("") else failMsg(""))
    // conformance check for transpilers
    val transPass = transTest.isPass
    if (debug) print(f" ${"BABEL TRANSPILATION RESULT"}%30s: ")
    if (!transPass) transFailedTests.addOne(code, transTest)
    interp.touchedNodeViews.keys.map(update(_, transMap, transPass))
    debugging(if (transTest.isPass) passMsg("") else failMsg(""))

  /** ECMAScript grammar */
  val grammar = cfg.grammar
  val scriptParser = cfg.scriptParser

  /** coverage */
  val cov: Coverage = Coverage(timeLimit, synK)

  /** target selector */
  val selector: TargetSelector = WeightedSelector(
    RandomSelector -> 2,
    BranchSelector -> 8,
  )

  /** mutator */
  // val mutator: Mutator = RandomMutator()
  val mutator: Mutator = WeightedMutator(
    RandomMutator() -> 2,
    NearestMutator() -> 8,
  )

  /** initial pool */
  val initPool =
    SimpleSynthesizer.initPool.map(SimpleSynthesizer -> _) ++
    BuiltinSynthesizer.initPool.map(BuiltinSynthesizer -> _)

  /** logging */
  def debugging(msg: String, newline: Boolean = true): Unit = if (debug) {
    if (newline) println(msg) else print(msg)
  }
  def logging: Unit =
    val n = cov.nodeCov
    val b = cov.branchCov
    val d = duration
    val t = Time(d).simpleString
    val nv = cov.nodeViewCov
    val bv = cov.branchViewCov
    val cb = failedTests.size
    val tb = transFailedTests.size
    val tc = cov.targetCondSize
    var row = Vector(iter, d, t, pool.size, n, b)
    if (synK.isDefined) row ++= Vector(nv, bv)
    row ++= Vector(tc)
    if (conformTest) row ++= Vector(cb, tb)
    addRow(row)
    // dump coveragge
    cov.dumpToWithDetail(logDir, withMsg = false)
    // dump failed conformance tests
    if (conformTest)
      dumpConformTestCounter(logDir, false)
      dumpFailedConformTests(logDir, false)

  /** dump conformance test counters */
  def dumpConformTestCounter(
    baseDir: String = logDir,
    withMsg: Boolean = true,
  ): Unit =
    dumpJson(
      name = if (withMsg) Some("conformance test counter") else None,
      data = counterJson(engineMap),
      filename = s"$baseDir/engine-count.json",
      space = true,
    )
    dumpJson(
      name = if (withMsg) Some("transpiled conformance test counter") else None,
      data = counterJson(transMap),
      filename = s"$baseDir/trans-count.json",
      space = true,
    )

  /** dump failed conformance tests */
  def dumpFailedConformTests(
    baseDir: String = logDir,
    withMsg: Boolean = true,
  ): Unit =
    /** dump failed engine conformance tests */
    rmdir(s"$baseDir/failed")
    val indexedFailedTests = failedTests.zipWithIndex
    val indexedTransFailedTests = transFailedTests.zipWithIndex
    type IndexedTest = ((String, ConformTest), Int)
    dumpDir[IndexedTest](
      name = if (withMsg) Some("failed conformance codes") else None,
      iterable = indexedFailedTests,
      dirname = s"$baseDir/failed",
      getName = { case ((c, t), i) => s"$i.js" },
      getData = { case ((c, t), i) => t.comment + USE_STRICT + c + LINE_SEP },
      remove = true,
    )
    dumpDir[IndexedTest](
      name = if (withMsg) Some("failed conformance tests") else None,
      iterable = indexedFailedTests,
      dirname = s"$baseDir/failed",
      getName = { case ((c, t), i) => s"$i.test.js" },
      getData = { case ((c, t), i) => t },
      remove = false,
    )
    dumpDir[IndexedTest](
      name =
        if (withMsg) Some("message for failed conformance tests") else None,
      iterable = indexedFailedTests,
      dirname = s"$baseDir/failed",
      getName = { case ((c, t), i) => s"$i.msg" },
      getData = { case ((c, t), i) => "TAG: " + t.category + LINE_SEP + t.msg },
      remove = false,
    )

    /** dump failed transpiler conformance tests */
    rmdir(s"$baseDir/trans-failed")
    dumpDir[IndexedTest](
      name = if (withMsg) Some("failed transpiled conformance codes") else None,
      iterable = indexedTransFailedTests,
      dirname = s"$baseDir/trans-failed",
      getName = { case ((c, t), i) => s"$i.js" },
      getData = { case ((c, t), i) => t.comment + USE_STRICT + c + LINE_SEP },
      remove = true,
    )
    dumpDir[IndexedTest](
      name = if (withMsg) Some("failed transpiled conformance tests") else None,
      iterable = indexedTransFailedTests,
      dirname = s"$baseDir/trans-failed",
      getName = { case ((c, t), i) => s"$i.test.js" },
      getData = { case ((c, t), i) => t },
      remove = false,
    )
    dumpDir[IndexedTest](
      name =
        if (withMsg) Some("message for failed transpiled conformance tests")
        else None,
      iterable = indexedTransFailedTests,
      dirname = s"$baseDir/trans-failed",
      getName = { case ((c, t), i) => s"$i.msg" },
      getData = { case ((c, t), i) => "TAG: " + t.category + LINE_SEP + t.msg },
      remove = false,
    )

  lazy val logDir: String = s"$FUZZ_LOG_DIR/fuzz-$dateStr"

  def addRow(data: Iterable[Any]): Unit =
    val row = data.mkString("\t")
    if (stdOut) println(row)
    nf.println(row)
    nf.flush
  lazy val nf: PrintWriter = getPrintWriter(s"$logDir/summary.tsv")

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
  private def duration: Long = System.currentTimeMillis - startTime
  private var startInterval: Long = 0L
  private def interval: Long = System.currentTimeMillis - startInterval

  // conversion from code string to `Script` object
  private def toScript(code: String): Script = Script(code, s"$nextId.js")

  // check if the added code is visited
  private var visited: Set[String] = Set()

  // try parsing and inserting semicolon
  private def insertSemi(code: String) =
    Try(cfg.scriptParser.fromWithCode(code)._2)

  // indicating that add failed
  private def fail(msg: String) = throw new Exception(msg)
}
