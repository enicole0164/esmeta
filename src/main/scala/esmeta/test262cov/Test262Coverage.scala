package esmeta.test262coverage

import esmeta.*
import esmeta.es.Script
import esmeta.util.SystemUtils.*
import esmeta.test262coverage.MetaData
import esmeta.COVTEST_TEST_DIR
import esmeta.util.ProgressBar
import esmeta.test262coverage.util.*
import esmeta.es.util.{Coverage}

case class Test262Coverage(
  log_cov_dir : String,
  logDir : String,
) {
  import Coverage.{*, given}

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
  def coverage_runAndCheck(paths: List[String] = List(COVTEST_TEST_DIR)): Boolean =
    val from_log : (Coverage, CoverageConstructor) = fromLog2(s"$TEST262TEST_LOG_DIR/$log_cov_dir")
    val log_cov : Coverage = from_log._1
    val log_con : CoverageConstructor = from_log._2

    val covered = false

    val combined_script_cov : Coverage = new Coverage(log_con.timeLimit, log_con.kFs, log_con.cp)

    println(paths)
    // val scripts = getDataList(paths).map(_.relName)
    val scripts = getDataList(paths)
    

    for (script_path <- scripts) {
      // Get coverage of specific script
      val script = Script(readFile(s"${script_path}"), s"${script_path.relName}")
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
}
