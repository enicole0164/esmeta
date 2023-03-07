package esmeta.test262coverage.util

import esmeta.util.*
import esmeta.util.Appender.*
import esmeta.util.BaseUtils.*
import esmeta.test262coverage.*

/*k stringifier for ECMAScript */
class Stringifier(
  detail: Boolean,
) {
  // elements
  given elemRule: Rule[TestElem] = (app, elem) =>
    elem match {
      case elem: MetaData      => dataRule(app, elem)
    }

  // metadata tests in Test
  given dataRule: Rule[MetaData] = (app, data) =>
    val MetaData(_, path) = data
    given Rule[Option[String]] = optionRule("-")
    given Rule[List[String]] =
      (app, list) => app.wrap("[", "]")(list.map(app :> _))
    app >> path 
}
