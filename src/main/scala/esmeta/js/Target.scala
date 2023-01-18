package esmeta.js

import esmeta.util.BaseUtils.*
import esmeta.es.util.injector.ConformTest
import esmeta.es.util.Coverage.Interp

case class Target(
  val name: String,
  val isTrans: Boolean,
  val _cmd: String = "",
) {
  lazy val cmd = optional {
    if (!isTrans)
      JSEngine.defaultCmd(name)
    else
      JSTrans.defaultCmd(name)
  }.getOrElse(_cmd)

  override def toString = name

  def doConformTest(test: ConformTest): Boolean = ???
  def minimize(code: String): (String, Interp) = ???
}
