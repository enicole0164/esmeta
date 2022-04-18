package esmeta.editor

import esmeta.editor.sview.*
import esmeta.editor.util.CFGHelper
import esmeta.ir.util.UnitWalker
import esmeta.ir.Inst
import esmeta.ir.NormalInst
import esmeta.ir.IIf
import esmeta.ir.ILoop
import esmeta.ir.ISeq
import esmeta.editor.util.*
import esmeta.*
import esmeta.util.BaseUtils.*
import esmeta.util.SystemUtils.*
import java.io.PrintWriter

class InstCounter extends UnitWalker {
  var instCount = 0
  var branchCount = 0
  override def walk(i: Inst) = i match
    case IIf(_, trueInst, falseInst) => {
      instCount += 1; branchCount += 1; walk(trueInst); walk(falseInst)
    }
    case ILoop(_, _, body) => { instCount += 1; branchCount += 1; walk(body) }
    case ISeq(insts)       => insts.foreach(walk)
    case _                 => instCount += 1

  def summary: (Int, Int) = (instCount, branchCount)
}

class BasicSyntacticViewTest extends EditorTest {
  val name: String = "basicSyntacticViewTest"
  var pw: Option[PrintWriter] = None

  // registration
  def init: Unit =
    val cfgHelper = CFGHelper(EditorTest.cfg)
    val peval = PartialEval(cfgHelper)
    val viewSet = BasicSyntacticView(cfgHelper).viewSet2
    val mcgs = EditorTest.cfg.funcs
      .map((f) => f.name -> SyntacticCallGraph(cfgHelper, f.irFunc))
      .toMap
    val mergeCG = SyntacticMergedCallGraph(mcgs, cfgHelper)
    mkdir(logDir)
    pw = Some(getPrintWriter(s"${logDir}/${name}.log"))

    viewSet.foreach((v) =>
      check(
        s"${v.name}${v.rhsIdx}: ${v.toString(true, false, Some(EditorTest.cfg.grammar))}",
      ) {
        val transitiveCG = SyntacticTransitiveClosedCallGraph(
          mcgs,
          cfgHelper.getSDOView(v, "Evaluation").get._2.name,
        )
        val analysisCG = peval.cg(v)
        pw.foreach((pw) => {
          pw.println(s"${v.name}${v.rhsIdx}: ${v
            .toString(true, false, Some(EditorTest.cfg.grammar))}")
          pw.println(
            s"    ${mergeCG.funcs.size}/${mergeCG.func_targets
              .map { case (i, j) => j.map((k) => (i -> k)) }
              .toSet
              .size}  -> ${transitiveCG.funcs.size}/${transitiveCG.func_targets
              .map { case (i, j) => j.map((k) => (i -> k)) }
              .toSet
              .size} -> ${analysisCG.funcs.size}/${analysisCG.func_targets
              .map {
                case (i, j) => j.map((k) => (i -> k))
              }
              .toSet
              .size}",
          )
        })
      },
    )

  override def afterAll(): Unit = {
    pw.map(_.close)
    super.afterAll()
  }
  init

}
