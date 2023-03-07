package esmeta.test262coverage

import esmeta.test262coverage.util.*
import esmeta.util.BaseUtils.*

/** test elements */
trait TestElem {
  override def toString: String = toString()

  /** stringify with options */
  def toString(
    detail: Boolean = false,
  ): String = {
    val stringifier = TestElem.getStringifier(detail)
    import stringifier.elemRule
    stringify(this)
  }
}
object TestElem {
  val getStringifier = cached[Boolean, Stringifier] { Stringifier(_) }
}
