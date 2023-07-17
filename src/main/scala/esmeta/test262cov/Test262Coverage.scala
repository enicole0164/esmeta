package esmeta.test262coverage

import esmeta.*
import esmeta.es.Script
import esmeta.util.SystemUtils.*
import esmeta.test262coverage.MetaData
import esmeta.COVTEST_TEST_DIR
import esmeta.util.ProgressBar
import esmeta.test262coverage.util.*
import esmeta.es.util.{Coverage}


import io.circe.*, io.circe.generic.semiauto.*, io.circe.generic.auto.*
import io.circe.syntax.*

case class Test262Coverage(
  log_cov_dir : String,
  logDir : String,
) {
  import Coverage.{*, given}

  lazy val from_log = fromLog_testcov(s"$TEST262TEST_LOG_DIR/$log_cov_dir")
  lazy val log_cov = from_log._1
  lazy val log_con = from_log._2

  /** load test with specific filename */
  def loadTest(filename: String): String =
    readFile(filename)
  
  /** get data list */
  def getDataList(
    paths: List[String] = Nil,
    log: Boolean = false,
  ): List[MetaData] =
    if (log) println("- Extracting metadata of TestDIR tests...")
    MetaData.fromDirs(paths match
      case Nil   => List(COVTEST_TEST_DIR)
      case paths => paths,
    )

  def coverage_runAndCheck(paths: List[String] = Nil): (Boolean, Int, Int) =
    var covered = false
    var covered_tests = 0
    var uncovered_tests = 0

    val scripts = getDataList(paths)

    val coverageResult = scripts.filter(scriptMD =>
      val script = Script(readFile(s"${scriptMD}"), s"${scriptMD.relName}")
      doCoverageCheck(script) match
        case None =>
          covered_tests += 1
          false
        case Some(filename) =>
          covered = true
          uncovered_tests += 1
          true
    ).map(_.relName)

    dumpJson(coverageResult, s"$logDir/fails.json")

    (covered, covered_tests, uncovered_tests)

  // do coverage check, and returns Some(filename) if fails.
  def doCoverageCheck(script: Script, withMsg: Boolean = false) : Option[String] = 
    var covered = false
    val script_cov = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)
    script_cov.runAndCheck(script)
    script_cov.dumpTo(baseDir = s"$logDir/${script.name}", withMsg = false, logBool = false)

    val result = log_cov.runAndCheckwoUpdate(script)
    result match
      case true =>
        if (withMsg) println(s"Coverage of Test262 didn't cover the program ${script.name}");
        Some(script.name)
      case false =>
        if (withMsg) println(s"Coverage of Test262 covers the program ${script.name}")
        covered = true
        None
}
