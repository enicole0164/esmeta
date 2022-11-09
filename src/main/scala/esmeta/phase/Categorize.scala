package esmeta.phase

import esmeta.*
import esmeta.es.util.*
import esmeta.util.*
import esmeta.util.SystemUtils.*
import esmeta.util.BaseUtils.*
import io.circe.*, io.circe.generic.semiauto.*
import io.circe.syntax._

/** `categorize` phase */
case object Categorize extends Phase[Unit, Map[String, Map[String, Int]]] {
  val name = "categorize"
  val help = "Categorize the bug"

  type Target = String
  type Tag = String
  type Test = String

  def apply(
    unit: Unit,
    cmdConfig: CommandConfig,
    config: Config,
  ): Map[Target, Map[Tag, Int]] = 
    // name of json files
    val scripts = cmdConfig.targets(0)
    val failsMapJson = cmdConfig.targets(1)
    val failsMap: Map[Target, Set[Test]] = readJson(failsMapJson)

    val init: Map[Target, Map[Target, Int]] = Map()
    val result = failsMap.foldLeft(init){ case (cur, (target, fails)) =>
      val db = s"$RESOURCE_DIR/bugs/$target"
      cur + (target -> fails.foldLeft(Map[Target, Int]()){ case (count, test) =>
        val script = readFile(s"$scripts/$test")
        val tag = tagFinder(db, script)
        val c = count.getOrElse(tag, 0) + 1
        count + (tag -> c)
      })
    }

    dumpJson(result, s"$CATEGORIZE_LOG_DIR/result.json")

    result

  private def tagFinder(db: String, script: String) =
    val buggies = listFiles(db).filter(jsFilter)
    buggies.foldLeft("YET")((cur, buggy) =>
      if (cur != "YET") cur
      else {
        if containsScript(readFile(buggy.getPath), script) then
          buggy.getName.dropRight(3)
        else cur
      }
    )
  
  private def containsScript(lines: String, script: String): Boolean =
   val scriptLine = script.split(LINE_SEP)(1)
    lines.split(LINE_SEP).exists(_.trim == scriptLine.trim)

  def defaultConfig: Config = Config()
  val options: List[PhaseOption[Config]] = List()
  case class Config()
}