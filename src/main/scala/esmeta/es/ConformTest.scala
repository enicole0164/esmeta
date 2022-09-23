package esmeta.es

import scala.util.*
import esmeta.*
import esmeta.util.*
import esmeta.es.util.injector.*
import esmeta.cfg.CFG
import esmeta.state.State
import java.util.concurrent.TimeoutException

/** conformance test */
case class ConformTest(
  id: Int,
  script: String,
  exitTag: ExitTag,
  defs: Boolean,
  isAsync: Boolean,
  assertions: Vector[Assertion],
) extends ESElem
  with UId {

  /** replace script */
  def replaceScript(newScript: String) =
    ConformTest(id, newScript, exitTag, defs, isAsync, assertions)

  /** indicates if the test should exit normally */
  val isNormal = exitTag == NormalTag

  /** Execute test and get result */
  lazy val (
    concreteExitTag: ExitTag,
    passedAssertions: Vector[Assertion],
    failedAssertions: Vector[(Assertion, String)],
  ) = JSEngine
    .usingContext((context, out) => {
      JSEngine.run("\"use strict\";", context)
      JSEngine.run(script, context, Some(1000))
      JSEngine.run(Injector.assertionLib, context)
      val (passes, fails) = assertions
        .map(assertion =>
          (
            assertion,
            JSEngine.runAndGetStdout(assertion.toString, context, out),
          ),
        )
        .partition(_._2.isEmpty)
      (NormalTag, passes.map(_._1), fails)
    })
    .recoverWith(_ match {
      case e: JSEngine.JSException =>
        // TODO handle ThrowValueTag more carefully
        val msg = e.getMessage
        val tag =
          if msg.contains("Error:") then ThrowErrorTag(msg.split(":")(0))
          else ThrowValueTag(esmeta.state.Str(msg))
        Success((tag, Vector(), Vector()))
      case e: TimeoutException =>
        Success((TimeoutTag, Vector(), Vector()))
      case e =>
        Failure(e)
    })
    .get

  lazy val sameExitTag =
    exitTag == concreteExitTag ||
    // TODO handle ThrowValueTag more carefully
    exitTag.isInstanceOf[ThrowValueTag] && concreteExitTag
      .isInstanceOf[ThrowValueTag]

  /** Indicates if the test is passed */
  lazy val isPass = sameExitTag && failedAssertions.length == 0

  /** human readable message indication the reason of test fail */
  lazy val msg =
    if isPass then ""
    else if (!sameExitTag) then
      s"[Exit Tag Mismatch]$LINE_SEP > Expected $exitTag but got $concreteExitTag"
    else failedAssertions.map((a, m) => s"$a$LINE_SEP > $m").mkString(LINE_SEP)

  /** retain only passed assertions */
  def filterAssertion: ConformTest =
    ConformTest(id, script, concreteExitTag, defs, isAsync, passedAssertions)
}

object ConformTest {

  /** Create a pair of tests using code string */
  def createTestPair(script: String, cfg: CFG): (ConformTest, ConformTest) =
    val transpiled = Babel.transpile(script)
    val injectedTest = Injector(cfg, script, true)
    val transpiledTest =
      injectedTest.filterAssertion.replaceScript(transpiled)
    (injectedTest, transpiledTest)

  /** Create a pair of tests using init state and exit state */
  def createTestPair(initSt: State, exitSt: State): (ConformTest, ConformTest) =
    val script = initSt.sourceText.get
    val transpiled = Babel.transpile(script)
    val injectedTest = new Injector(initSt, exitSt, true, false).conformTest
    val transpiledTest =
      injectedTest.filterAssertion.replaceScript(transpiled)
    (injectedTest, transpiledTest)
}
