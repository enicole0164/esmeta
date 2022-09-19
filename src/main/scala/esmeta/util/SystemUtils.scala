package esmeta.util

import java.io.{Reader, File, PrintWriter}
import java.nio.file.{Files, StandardCopyOption}
import esmeta.*
import esmeta.error.*
import esmeta.util.BaseUtils.*
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.*
import scala.concurrent.duration.*
import scala.io.Source
import scala.sys.process.*
import scala.util.Try
import io.circe.*, io.circe.syntax.*, io.circe.parser.*

/** file utilities */
object SystemUtils {
  // encoding
  private val ENC = "utf8"

  /** file reader */
  def fileReader(filename: String): Reader =
    Source.fromFile(filename, ENC).bufferedReader

  /** file trees with filename */
  def walkTree(filename: String): Iterable[File] = walkTree(File(filename))

  /** file trees with files */
  def walkTree(file: File): Iterable[File] =
    Seq(file) ++ new Iterable[File] {
      def iterator: Iterator[File] =
        if (file.isDirectory) file.listFiles.iterator
        else Iterator.empty
    }.flatMap(walkTree)

  /** extension filter */
  def extFilter(ext: String): String => Boolean = _.endsWith(s".$ext")
  lazy val algoFilter = extFilter("algo")
  lazy val irFilter = extFilter("ir")
  lazy val cfgFilter = extFilter("cfg")
  lazy val jsFilter = extFilter("js")

  /** print writer */
  def getPrintWriter(filename: String): PrintWriter =
    PrintWriter(File(filename))

  /** dump given data to a file */
  def dumpFile(data: Any, filename: String): Unit =
    val nf = getPrintWriter(filename)
    nf.print(data)
    nf.close()

  /** dump given data into a file and show message */
  def dumpFile(name: Option[String], data: Any, filename: String): Unit =
    dumpFile(data, filename)
    name.map(name => println(s"- Dumped $name into $filename."))
  def dumpFile(name: String, data: Any, filename: String): Unit =
    dumpFile(Some(name), data, filename)

  /** dump given data collection into a directory and show message */
  def dumpDir[T](
    name: Option[String],
    iterable: Iterable[T],
    dirname: String,
    getName: T => String,
    getData: T => Any,
  ): Unit =
    mkdir(dirname)
    for (x <- iterable) dumpFile(getData(x), s"$dirname/${getName(x)}")
    name.map(name => println(s"- Dumped $name into $dirname."))

  /** dump given data collection into a directory and show message */
  def dumpDir[T](
    name: String,
    iterable: Iterable[T],
    dirname: String,
    getName: T => String,
    getData: T => Any = (x: T) => x,
  ): Unit = dumpDir(Some(name), iterable, dirname, getName, getData)

  /** dump given data in a JSON format */
  def dumpJson[T](
    data: T,
    filename: String,
    noSpace: Boolean = false,
  )(using encoder: Encoder[T]): Unit =
    val json = data.asJson
    dumpFile(if (noSpace) json.noSpaces else json.spaces2, filename)

  /** dump given data in a JSON format and show message */
  def dumpJson[T](
    name: Option[String],
    data: T,
    filename: String,
    noSpace: Boolean,
  )(using encoder: Encoder[T]): Unit =
    dumpJson(data, filename, noSpace)
    name.map(name =>
      println(s"- Dumped $name into $filename in a JSON format."),
    )

  /** dump given data in a JSON format and show message */
  def dumpJson[T](
    name: String,
    data: T,
    filename: String,
    noSpace: Boolean,
  )(using encoder: Encoder[T]): Unit =
    dumpJson(Some(name), data, filename, noSpace)

  /** get first filename */
  def getFirstFilename(cmdConfig: CommandConfig, msg: String): String =
    cmdConfig.targets.headOption.getOrElse(throw NoFileError(msg))

  /** read file */
  def readFile(filename: String): String =
    val source = Source.fromFile(filename, ENC)
    val str = source.mkString
    source.close
    str.trim

  /** read JSON */
  def readJson[T](filename: String)(implicit decoder: Decoder[T]): T =
    parse(readFile(filename)) match {
      case Left(err) => throw err
      case Right(json) =>
        json.as[T] match {
          case Left(err) => throw err
          case Right(v)  => v
        }
    }

  /** read HTML */
  def readHtml(filename: String): org.jsoup.nodes.Document =
    import HtmlUtils.*
    readFile(filename).toHtml

  /** delete files */
  def deleteFile(filename: String): Unit = File(filename).delete

  /** change extension */
  def changeExt(from: String, to: String): String => String =
    filename => filename.substring(0, filename.length - from.length) + to

  /** get name without extension */
  def removedExt(filename: String): String =
    filename.split('.').dropRight(1).mkString(".")

  /** get extension */
  def getExt(filename: String): String =
    filename.split('.').last

  /** get absolute path */
  def getAbsPath(filename: String): String =
    File(filename).getAbsolutePath

  /** renamed filename */
  def renameFile(from: String, to: String): Unit =
    File(from).renameTo(File(to))

  /** copy file */
  def copyFile(from: String, to: String): Unit = Files.copy(
    File(from).toPath,
    File(to).toPath,
    StandardCopyOption.REPLACE_EXISTING,
  )

  /** create directories */
  def mkdir(name: String): Unit = File(name).mkdirs

  /** clean directories */
  def cleanDir(name: String) = for (file <- walkTree(name)) file.delete

  /** remove directories */
  def rmdir(name: String): Unit = {
    def deleteRecursively(f: File): Boolean =
      if (f.isDirectory) f.listFiles match {
        case files: Array[File] => files.foreach(deleteRecursively)
        case null               =>
      }
      f.delete()
    deleteRecursively(File(name))
  }

  /** file existence check */
  def exists(name: String): Boolean = File(name).exists

  /** check whether a shell command is normally terminated */
  def isNormalExit(str: String): Boolean = optional(executeCmd(str)).isDefined

  /** execute shell command with given dir, default to CUR_DIR */
  def executeCmd(cmdStr: String, dir: String = CUR_DIR): String =
    var cmd = s"$cmdStr 2> /dev/null"
    var directory = File(dir)
    var process = Process(Seq("sh", "-c", cmd), directory)
    process.!!

  /** concurrently execute a list of functions */
  def concurrent[T](
    fs: Iterable[() => T],
    duration: Duration = Duration.Inf,
  ): Iterable[T] = Await
    .result(
      Future.sequence(fs.map(f => Future(Try(f())))),
      duration,
    )
    .map(_.get)
}
