package esmeta.lang

import esmeta.util.BaseUtils.*
import esmeta.spec.*
import esmeta.lang.*

class ParseAndStringifyTinyTest extends LangTest {
  val name: String = "langParseAndStringifyTest"

  // registration
  def init: Unit = {
    // pre-defined values

    // variables
    val x = Variable("x")

    // expressions
    val idExpr = IdentifierExpression(x)
    val lengthExpr = LengthExpression(idExpr)
    val substrExpr = SubstringExpression(idExpr, idExpr, idExpr)
    val addExpr = BinaryExpression(idExpr, BinaryExpression.Op.Add, idExpr)
    val subExpr = BinaryExpression(idExpr, BinaryExpression.Op.Sub, idExpr)
    val mulExpr = BinaryExpression(idExpr, BinaryExpression.Op.Mul, idExpr)
    val unExpr = UnaryExpression(UnaryExpression.Op.Neg, idExpr)
    val invokeExpr = InvokeExpression("ToObject", List(addExpr, unExpr))
    val riaCheckExpr = ReturnIfAbruptExpression(invokeExpr, true)
    val riaNoCheckExpr = ReturnIfAbruptExpression(invokeExpr, false)

    // conditions
    val exprCond = ExpressionCondition(idExpr)
    val binaryCondIs =
      BinaryCondition(idExpr, BinaryCondition.Op.Is, lengthExpr)
    val binaryCondLt =
      BinaryCondition(idExpr, BinaryCondition.Op.LessThan, addExpr)
    val compCond =
      CompoundCondition(exprCond, CompoundCondition.Op.And, exprCond)

    // steps
    val letStep = LetStep(x, idExpr)
    val setStep = SetStep(x, addExpr)
    val ifStep = IfStep(binaryCondIs, letStep, None)
    val returnStep = ReturnStep(idExpr)
    val assertStep = AssertStep(compCond)
    val forEachIntStepTrue =
      ForEachIntegerStep(x, idExpr, exprCond, true, letStep)
    val forEachIntStepFalse =
      ForEachIntegerStep(x, idExpr, exprCond, false, letStep)
    val throwStep = ThrowStep("TypeError")
    val performStep = PerformStep(invokeExpr)

    // blocks
    val orderedBlock = Order(
      List(
        letStep,
        letStep,
        letStep,
      ),
    )
    val unOrderedBlock = Unorder(
      List(
        letStep,
        letStep,
        letStep,
      ),
    )
    val figureBlock = Figure(List("a", "b", "c"))

    // TODO handle upper case
    // // -----------------------------------------------------------------------------
    // // Block
    // // -----------------------------------------------------------------------------
    // checkString("Block", Block.apply)(
    //   orderedBlock -> s"""
    //   |  1. Let _x_ be _x_.
    //   |  1. Let _x_ be _x_.
    //   |  1. Let _x_ be _x_.
    //   |""".stripMargin,
    //   // unOrderedBlock -> s"""
    //   // |  * $letStepStr
    //   // |  * $letStepStr
    //   // |  * $letStepStr
    //   // |""".stripMargin,
    //   // figureBlock -> s"""
    //   // |  <figure>
    //   // |a
    //   // |b
    //   // |c
    //   // |  </figure>
    //   // """,
    // )

    // -----------------------------------------------------------------------------
    // Step
    // -----------------------------------------------------------------------------
    checkParseAndStringify("Step", Step.apply)(
      letStep -> "let _x_ be _x_.",
      setStep -> "set _x_ to _x_ + _x_.",
      ifStep -> "if _x_ is the length of _x_, let _x_ be _x_.",
      returnStep -> "return _x_.",
      assertStep -> "assert: _x_ and _x_.",
      forEachIntStepTrue -> "for each integer _x_ starting with _x_ such that _x_, in ascending order, let _x_ be _x_.",
      forEachIntStepFalse -> "for each integer _x_ starting with _x_ such that _x_, in descending order, let _x_ be _x_.",
      throwStep -> "throw a *TypeError* exception.",
      performStep -> "perform ToObject(_x_ + _x_, -_x_).",
    )

    // -----------------------------------------------------------------------------
    // Expression
    // -----------------------------------------------------------------------------
    checkParseAndStringify("Expression", Expression.apply)(
      idExpr -> "_x_",
      lengthExpr -> "the length of _x_",
      substrExpr -> "the substring of _x_ from _x_ to _x_",
      EmptyStringExpression -> "the empty String",
      addExpr -> "_x_ + _x_",
      subExpr -> "_x_ - _x_",
      mulExpr -> "_x_ × _x_",
      unExpr -> "-_x_",
      invokeExpr -> "ToObject(_x_ + _x_, -_x_)",
      riaCheckExpr -> "? ToObject(_x_ + _x_, -_x_)",
      riaNoCheckExpr -> "! ToObject(_x_ + _x_, -_x_)",
      StringLiteral("abc") -> "*\"abc\"*",
      PositiveInfinityMathValueLiteral -> "+∞",
      NegativeInfinityMathValueLiteral -> "-∞",
      DecimalMathValueLiteral(BigDecimal("0.5")) -> "0.5",
      NumberLiteral(+0.0) -> "*+0*<sub>𝔽</sub>",
      NumberLiteral(-0.0) -> "*-0*<sub>𝔽</sub>",
      NumberLiteral(Double.PositiveInfinity) -> "*+∞*<sub>𝔽</sub>",
      NumberLiteral(Double.NegativeInfinity) -> "*-∞*<sub>𝔽</sub>",
      NumberLiteral(Double.NaN) -> "*NaN*",
      NumberLiteral(1) -> "*1*<sub>𝔽</sub>",
      BigIntLiteral(
        BigInt("1000000000000000000000000"),
      ) -> "*1000000000000000000000000*<sub>ℤ</sub>",
      TrueLiteral -> "*true*",
      FalseLiteral -> "*false*",
      UndefinedLiteral -> "*undefined*",
      NullLiteral -> "*null*",
    )

    // -----------------------------------------------------------------------------
    // Condition
    // -----------------------------------------------------------------------------
    checkParseAndStringify("Condition", Condition.apply)(
      exprCond -> "_x_",
      binaryCondIs -> "_x_ is the length of _x_",
      binaryCondLt -> "_x_ < _x_ + _x_",
      compCond -> "_x_ and _x_",
    )

    // -----------------------------------------------------------------------------
    // Identifier
    // -----------------------------------------------------------------------------
    checkParseAndStringify("Identifier", Identifier.apply)(
      x -> "_x_",
    )
  }

  init
}