package esmeta.phase

import esmeta.*
import esmeta.es.util.injector.Injector
import esmeta.es.Script
import esmeta.js.*
import esmeta.util.*
import esmeta.util.SystemUtils.*
import esmeta.util.BaseUtils.*

/** `folder-gen-test` phase */
case object FolderGenTest
  extends Phase[
    Unit,
    (
      Map[Target, Iterable[Script]],
      Iterable[Script],
    ),
  ] {
  val name = "folder-gen-test"
  val help =
    "Generate executable conform tests for ECMAScript Engines and transpilers"

  private var _config: Config = null
  private var _onlySet: Option[Set[String]] = None
  private var _skipSet: Option[Set[String]] = None
  private type Result = Map[Target, Iterable[Script]]

  def apply(
    _unit: Unit,
    cmdConfig: CommandConfig,
    config: Config,
  ): (Result, Iterable[Script]) =
    _config = config
    _onlySet =
      config.only.map(list => readFile(list).trim.split(LINE_SEP).toSet)
    _skipSet =
      config.skip.map(list => readFile(list).trim.split(LINE_SEP).toSet)

    // collect target scripts and assertions
    // val (codeDir, assertionDir) = optional {
    //   (cmdConfig.targets(0), cmdConfig.targets(1))
    // }
    //   .getOrElse {
    //     warn(
    //       "No explicit directories are given. Trying to use the result from the most recent fuzz instead..",
    //     )
    //     (
    //       s"$FUZZ_LOG_DIR/recent/minimal",
    //       s"$FUZZ_LOG_DIR/recent/minimal-assertion",
    //     )
    //   }
    val codeDir = "./reported-bugs-usestrict"
    val assertionDir = "./reported-bugs-assertion-usestrict"
    val mygentestlogdir = 
    validate(codeDir, assertionDir)
    val names = getNames(codeDir)

    // collect target engines
    val engines: List[Target] = (config.engines match {
      case None     => List("d8", "js", "sm", "jsc")
      case Some(es) => es.split(",").toList
    }).map(e => Target(e, false))

    // pre-process for each engines
    engines.foreach(engine => {
      debug(s" - Pre-processing engine $engine...")
      val logDir = s"$FOLDERGENTEST_LOG_DIR/$engine"
      cleanDir(logDir)
      dumpFile(engine, s"$logDir/command.txt")
    })

    // generate tests for each script
    debug(s" - Handling each code..")
    names
      .filterNot(skip)
      .foldLeft(
        (
          engines.map(_ -> List[Script]()).toMap,
          List[Script](),
        ),
      ) {
        case ((engineTestMap, originals), name) =>
          val code = readFile(s"$codeDir/$name")
          val assertion = readFile(s"$assertionDir/$name")

          val isNormal =
            assertion.split(LINE_SEP).head.contains("[EXIT] normal")

          def testMaker(code: String) = {
            if (isNormal)
              List(
                code,
                libHead,
                Injector.assertionLib,
                delayHead,
                assertion,
                delayTail,
                libTail,
              ).mkString(LINE_SEP)
            else
              assertion + code
          }

          // generate engine tests
          val updatedEngineTestMap = engineTestMap.map((e, tests) => {
            val etest = testMaker(code)

            val logDir = s"$FOLDERGENTEST_LOG_DIR/$e"
            dumpFile(etest, s"$logDir/$name")

            e -> (Script(etest, name) :: tests)
          })

          (
            updatedEngineTestMap,
            Script(code, name) :: originals,
          )
      }

  // ---------------------------------------------------------------------------
  // private helpers
  // ---------------------------------------------------------------------------

  // debug
  private def debug(data: Any): Unit =
    if (_config.debug) println(data)

  // warn about correct usage
  private def warnUsage =
    throw new Exception("""
      |Usage: Please give two directory names,
      |       where the first directory contains raw code,
      |       and the second directory contains assertions.""".stripMargin)

  // get names of the files of the given directory
  private def getNames(dir: String) =
    listFiles(dir).filter(_.isFile).map(_.getName)

  // check if the given directory structure is valid
  private def validate(dir1: String, dir2: String): Unit =
    val names1 = getNames(dir1)
    val names2 = getNames(dir2)
    def assert(b: Boolean) = if (!b) warnUsage
    assert(!names1.isEmpty)
    assert(names1.toSet == names2.toSet)

  // header and footer for tests
  private val libHead = "(()=>{"
  private val libTail = "})();"
  private val delayHead = "$delay(() => {"
  private val delayTail = "});"

  // skip the test if this test should be skipped.
  private def skip(name: String): Boolean =
    val skips = _skipSet.getOrElse(Set())
    if (skips.contains(name))
      true
    else
      _onlySet.map(noSkips => !noSkips.contains(name)).getOrElse(false)

  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List(
    (
      "debug",
      BoolOption(c => c.debug = true),
      "turn on debug mode",
    ),
    (
      "engines",
      StrOption((c, s) => c.engines = Some(s)),
      "list of engines to test, separated by comma",
    ),
    (
      "transpilers",
      StrOption((c, s) => c.transpilers = Some(s)),
      "list of transpilers to test, separated by comma",
    ),
    (
      "use-cache",
      BoolOption(c => c.cache = true),
      "use cached transpiled codes from previous run",
    ),
    (
      "only",
      StrOption((c, s) => c.only = Some(s)),
      "file that contains test names to run only",
    ),
    (
      "skip",
      StrOption((c, s) => c.skip = Some(s)),
      "file that contains test names to skip",
    ),
  )
  case class Config(
    var debug: Boolean = false,
    var engines: Option[String] = None,
    var transpilers: Option[String] = None,
    var cache: Boolean = false,
    var only: Option[String] = None,
    var skip: Option[String] = None,
  )
}
