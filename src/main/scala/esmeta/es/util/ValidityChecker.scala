package esmeta.es.util

import esmeta.es.*
import esmeta.spec.*
import esmeta.util.JSEngine

/** ECMAScript program validity checker */
object ValidityChecker {
  def apply(grammar: Grammar, ast: Ast): Boolean = apply(ast.toString(grammar))
  def apply(code: String): Boolean =
    val MESSAGE = "VALIDITY_CHECKER_EXPECTED_EXCEPTION"
    val src = s"\"use strict\";\nthrow $MESSAGE;\n$code"
    JSEngine
      .runSingle(src)
      .failed
      .filter(_.getMessage contains MESSAGE)
      .isSuccess
}
