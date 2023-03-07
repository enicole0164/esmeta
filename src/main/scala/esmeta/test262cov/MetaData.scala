package esmeta.test262coverage

import esmeta.COVTEST_TEST_DIR
import esmeta.test262coverage.util.*
import esmeta.util.SystemUtils.*
import scala.io.Source

/** metadata tests in Test */
case class MetaData(
  relName: String,
  path: String,
) extends TestElem

/** helpers of metadata tests in TestElem */
object MetaData {

  /** metadata generation from multiple paths */
  def fromDirs(paths: List[String]): List[MetaData] = (for {
    path <- paths
    data <- MetaData.fromDir(path)
  } yield data).sorted

  /** metadata generation from multiple a directory */
  def fromDir(dirname: String): List[MetaData] = walkTree(dirname).toList
    .filter(f => jsFilter(f.getName))
    .map(x => MetaData(x.toString))
    .sorted

  /** metadata generation form a single file */
  def apply(filename: String): MetaData = {
    val absPath = getAbsPath(filename)
    val relName =
      if (absPath.startsWith(COVTEST_TEST_DIR))
        absPath.drop(COVTEST_TEST_DIR.length + 1)
      else ""
    val source = Source.fromFile(filename)
    val lines =
      try source.getLines.toList
      finally source.close()

    MetaData(
      relName,
      filename,
    )
  }
}

/** ordering of metadata */
given Ordering[MetaData] = Ordering.by(_.path)

/** extensions for list of metadata */
extension (data: List[MetaData]) {

  /** remove metadata using a filter */
  def remove(pairs: (String, MetaData => Boolean)*): List[MetaData] =
    pairs.foldLeft(data) {
      case (data, (desc, f)) =>
        val (filtered, removed) = data.foldLeft(List[MetaData](), 0) {
          case ((l, count), meta) =>
            if (f(meta)) (l, count + 1)
            else (meta :: l, count)
        }
        if (removed > 0)
          println(f"- $desc%-30s: $removed%,5d tests are removed")
        filtered.reverse
    }
}