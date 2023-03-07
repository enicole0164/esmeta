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
  def coverage_runAndCheck(script_path: String): (Boolean, Boolean) =
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
    (true, true)
}
