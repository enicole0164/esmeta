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

  /**
  def coverage_runAndCheck_script(script_path: String): (Boolean, Boolean) =
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
    
    (result._2, result._3) match
      case ( _ , true) =>
        println("Coverage of Test262 didn't cover the program")
      case ( _ , false) =>
        println("Coverage of Test262 covers the program")

    // 5. Dump the coverage.
    script_cov.dumpTo(logDir)

    (result._2, result._3)

  def coverage_runAndCheck_dir(dir: String = COVTEST_TEST_DIR): Boolean =
    val from_log : (Coverage, CoverageConstructor) = fromLog2(s"$TEST262TEST_LOG_DIR/$log_cov_dir")
    val log_cov : Coverage = from_log._1
    val log_con : CoverageConstructor = from_log._2

    val covered = false

    val combined_script_cov : Coverage = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)

    val scripts = getDataList(List(dir)).map(_.relName)

    for (script_path <- scripts) {
      // Get coverage of specific script
      val script = Script(readFile(s"$COVTEST_TEST_DIR/$script_path"), s"$script_path")
      val script_cov : Coverage = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)
      script_cov.runAndCheck(script)
      combined_script_cov.runAndCheck(script)

      val result = log_cov.runAndCheckwoUpdate(script)
      result match
        case true =>
          println(s"Coverage of Test262 didn't cover the program ${script.name}")
        case false =>
          println(s"Coverage of Test262 covers the program ${script.name}")
      script_cov.dumpTo(baseDir = s"$logDir/${script.name}", withMsg = false, logBool = false)
    }

    // 5. Dump the coverage.
    combined_script_cov.dumpTo(s"$logDir/combined_script_coverage", withMsg = false, logBool = false)

    covered
  */

  def coverage_runAndCheck(paths: List[String] = Nil): (Boolean, Int, Int) =
    var covered = false
    var covered_tests = 0
    var uncovered_tests = 0

    // val combined_script_cov : Coverage = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)

    // val scripts = getDataList(paths).map(_.relName)
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
