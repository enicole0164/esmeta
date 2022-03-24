package esmeta.spec.util

import scala.io.Source
import esmeta.*
import esmeta.lang.Step
import esmeta.spec.{*, given}
import esmeta.util.BasicParsers
import esmeta.util.HtmlUtils.*
import esmeta.util.SystemUtils.*
import org.jsoup.nodes.*

/** specification parser */
object Parser extends Parsers {

  /** parses a specification */
  def parseSpec(
    content: String,
    version: Option[Spec.Version] = None,
  ): Spec =
    val document = content.toHtml
    val grammar = parseGrammar(document)
    val idxMap = grammar.idxMap
    val algorithms = parseAlgorithms(document, idxMap)
    val tables = parseTables(document)
    Spec(
      version = version,
      grammar = grammar,
      algorithms = algorithms,
      tables = tables,
      document = document,
    )

  /** parses a specification with versions */
  def parseSpecWithVersion(nameOpt: Option[String]): Spec =
    val cur = currentVersion(ECMA262_DIR)
    val (src, name, hash) = nameOpt match
      case Some(name) =>
        val hash = getVersion(name, ECMA262_DIR)
        changeVersion(hash, ECMA262_DIR)
        val src = readFile(SPEC_HTML)
        changeVersion(cur, ECMA262_DIR)
        (src, name, hash)
      case None =>
        (readFile(SPEC_HTML), cur, cur)
    parseSpec(src, Some(Spec.Version(name, hash)))

  /** parses a grammar */
  def parseGrammar(document: Document): Grammar = {
    val allProds = for {
      elem <- document.getElems("emu-grammar[type=definition]:not([example])")
      content = elem.html.trim.unescapeHtml
      prods = parseProductions(content)
      prod <- prods
      inAnnex = elem.isInAnnex
    } yield (prod, inAnnex)
    val prods =
      (for ((prod, inAnnex) <- allProds if !inAnnex) yield prod).sorted
    val prodsForWeb =
      (for ((prod, inAnnex) <- allProds if inAnnex) yield prod).sorted
    Grammar(prods, prodsForWeb)
  }

  /** parses productions */
  def parseProductions(content: String): List[Production] = parse(content)

  /** parses algorithms */
  def parseAlgorithms(
    document: Document,
    idxMap: Map[String, (Int, Int)],
  ): List[Algorithm] = concurrent(for {
    elem <- document.getElems("emu-alg:not([example])")
  } yield () => parseAlgorithms(elem, idxMap)).toList.flatten

  /** parses an algorithm */
  def parseAlgorithms(
    elem: Element,
    idxMap: Map[String, (Int, Int)],
  ): List[Algorithm] = for {
    head <- parseHeads(elem, idxMap)
    code = elem.html.unescapeHtml
    body = Step.from(code)
  } yield Algorithm(head, elem, body, code)

  /** TODO ignores elements whose parents' ids are in this list */
  val IGNORE_ALGO_PARENT_IDS = Set(
    // TODO handle memory model
    "sec-weakref-execution",
    "sec-valid-chosen-reads",
    "sec-coherent-reads",
    "sec-tear-free-aligned-reads",
    "sec-races",
    "sec-data-races",
    "sec-%typedarray%.prototype.sort",
  )

  /** parses algorithm heads */
  def parseHeads(elem: Element, idxMap: Map[String, (Int, Int)]): List[Head] = {
    var parent = elem.parent
    // TODO more general rules
    if (
      (parent.id endsWith "statement-rules") ||
      (parent.id endsWith "expression-rules")
    ) parent = parent.parent

    // checks whether it is an algorithm that should be ignored
    if (IGNORE_ALGO_PARENT_IDS contains parent.id) return Nil

    // checks whether it is a valid algorithm heaad
    if (parent.tagName != "emu-clause") return Nil

    // checks whether an element is of Chapter 5. Notational Conventions
    if (elem.isNotation) return Nil

    // handles NormalCompletion and ThrowCompletion in es2021
    if (
      (parent.id == "sec-normalcompletion" || parent.id == "sec-throwcompletion") &&
      parent.attr("type") != "abstract operation"
    )
      return if (shorthandPattern.matches(elem.getPrevText))
        parseAbsOpHead(parent, elem, false)
      else Nil

    // consider algorithm head types using `type` attributes
    elem.getPrevText match
      // unusual patterns
      case thisValuePattern(name, param) =>
        List(
          AbstractOperationHead(false, name, List(Param(param)), UnknownType),
        )
      case aliasPattern() =>
        parseAbsOpHead(parent, elem, false)
      case aliasPatternExample() => Nil
      case anonBuiltinPattern(name, param) =>
        val rname = name.trim.split(" ").map(_.capitalize).mkString
        val ref = BuiltinHead.Ref.YetRef(rname)
        List(BuiltinHead(ref, List(Param(param)), UnknownType))
      // normal patterns
      case _ =>
        if (isNumericMethod(parent, elem))
          parseNumMethodHead(parent, elem)
        else if (isAbstractOperation(parent, elem))
          parseAbsOpHead(parent, elem, false)
        else if (isHostDefinedOp(parent, elem))
          parseAbsOpHead(parent, elem, true)
        else if (isSDO(parent, elem))
          parseSdoHead(parent, elem, idxMap)
        else if (isConcreteMethod(parent, elem))
          parseConcMethodHead(parent, elem)
        else if (isInternalMethod(parent, elem))
          parseInMethodHead(parent, elem)
        else
          parseBuiltinHead(parent, elem)
  }

  /** parses tables */
  def parseTables(
    document: Document,
  ): Map[String, Table] = (for {
    elem <- document.getElems("emu-table")
    id = elem.getId
    datas = (for {
      row <- elem.getElems("tr")
    } yield row.getChildren.map(_.text)).toList
  } yield id -> Table(id, datas.head, datas.tail)).toMap

  // ///////////////////////////////////////////////////////////////////////////
  // classify algorithm heads
  // ///////////////////////////////////////////////////////////////////////////

  // handle unusual heads
  private lazy val thisValuePattern =
    "The abstract operation (this\\w+Value) takes argument _(\\w+)_.*".r
  private lazy val aliasPatternExample = "Algorithm steps that say".r
  private lazy val aliasPattern =
    "means? the same thing as:".r
  private lazy val anonBuiltinPattern =
    "When (?:a|an) ([A-Za-z.`\\- ]+) is called with argument _(\\w+)_,.*".r
  private lazy val shorthandPattern = "Is a shorthand that is defined as.*".r

  // numeric method
  private lazy val numericMethodPattern =
    "The abstract operation (Number::|BigInt::).*".r
  private def isNumericMethod(parent: Element, elem: Element): Boolean =
    parent.attr("type") == "numeric method" ||
    numericMethodPattern.matches(elem.getPrevText)

  // host-defined abstract operation
  private lazy val hostDefinedOpPattern =
    "The host-defined abstract operation.*".r
  private def isHostDefinedOp(parent: Element, elem: Element): Boolean =
    parent.attr("type") == "host-defined abstract operation" ||
    hostDefinedOpPattern.matches(elem.getPrevText)

  // abstract operation
  private lazy val abstractOpPattern = "The abstract operation.*".r
  private def isAbstractOperation(parent: Element, elem: Element): Boolean =
    parent.attr("type") == "abstract operation" ||
    ((abstractOpPattern.matches(
      parent.getSecondChildContent,
    ) || abstractOpPattern.matches(
      elem.getPrevText,
    )) && parent.getFirstChildElem.tagName == "h1")

  // syntax-directed operation
  private def isSDO(parent: Element, elem: Element): Boolean =
    val prev = elem.getPrevElem
    parent.attr("type") == "sdo" ||
    prev.tagName == "emu-grammar" ||
    isRegexpSDO(parent, elem)

  // regular expression section for es2021
  private lazy val regexpPattern = "The |\\w+| productions.*".r
  private def isRegexpSDO(parent: Element, elem: Element): Boolean =
    val prev = elem.getPrevElem
    (prev.tagName == "p" && !prev.getElems("emu-grammar").isEmpty) ||
    (regexpPattern.matches(parent.getFirstChildContent))

  // concrete method operation
  private lazy val concretePattern =
    "The \\w+ concrete method of ((?:[^_,:()]|, )+) _([^_]+)_.*".r
  private def isConcreteMethod(parent: Element, elem: Element): Boolean =
    parent.attr("type") == "concrete method" ||
    concretePattern.matches(parent.getSecondChildContent)

  // internal method operation
  private lazy val internalPattern =
    "The [A-Za-z0-9\\[\\]]+ internal method of ((?:[^_,:()]|, )+) _([^_]+)_.*".r
  private def isInternalMethod(parent: Element, elem: Element): Boolean =
    parent.attr("type") == "internal method" ||
    internalPattern.matches(parent.getSecondChildContent)

  // ///////////////////////////////////////////////////////////////////////////
  // Private Helpers
  // ///////////////////////////////////////////////////////////////////////////

  // get abstract operation heads
  private def parseAbsOpHead(
    parent: Element,
    elem: Element,
    isHostDefined: Boolean,
  ): List[AbstractOperationHead] =
    val headContent = getHeadContent(parent)
    val generator = parseBy(absOpHeadGen)(headContent)
    List(generator(isHostDefined))

  // get numeric method heads
  private def parseNumMethodHead(
    parent: Element,
    elem: Element,
  ): List[NumericMethodHead] =
    val headContent = getHeadContent(parent)
    List(parseBy(numMethodHead)(headContent))

  // get syntax-directed operation (SDO) heads
  private lazy val oldWithParamPattern = "With (optional )?parameter(s)?.*".r
  private def parseSdoHead(
    parent: Element,
    elem: Element,
    idxMap: Map[String, (Int, Int)],
  ): List[SyntaxDirectedOperationHead] = {
    val (generator, prevContent) =
      if (isRegexpSDO(parent, elem)) {
        // handle regexp section in es2021
        val prev = elem.getPrevElem
        val ps =
          // parse <p>With parameter... </p>
          if (oldWithParamPattern.matches(parent.getSecondChildContent))
            parseBy(withParams)(parent.getSecondChildContent)
          else List()
        val prevContent =
          if (prev.tagName == "p" && !prev.getElems("emu-grammar").isEmpty)
            elem.getPrevElem.getElems("emu-grammar")(0).text
          else elem.getPrevContent
        (
          SyntaxDirectedOperationHead(_, "Evaluation", false, ps, UnknownType),
          prevContent,
        )
      } else if (
        parent.getSecondChildElem.tagName == "p" &&
        oldWithParamPattern.matches(parent.getSecondChildContent)
      ) {
        // handle SDO with parameter in es2021
        // parse <h1> ... </h1>
        val isStatic ~ x =
          parseBy(semanticsKind ~ name)(parent.getFirstChildContent)
        // parse <p>With parameter... </p>
        val ps = parseBy(withParams)(parent.getSecondChildContent)
        (
          SyntaxDirectedOperationHead(_, x, isStatic, ps, UnknownType),
          elem.getPrevContent,
        )
      } else {
        // handle recent
        val headContent = getHeadContent(parent)
        (parseBy(sdoHeadGen)(headContent), elem.getPrevContent)
      }
    val defaultCaseStr =
      "Every grammar production alternative in this specification which is not listed below implicitly has the following default definition of"

    // to hande "default" case algorithms
    if (!prevContent.startsWith(defaultCaseStr)) {
      // normal case
      for {
        prod <- parse[List[Production]](prevContent)
        lhsName = prod.lhs.name
        rhs <- prod.rhsList
        rhsName <- rhs.allNames
        syntax = lhsName + ":" + rhsName
        (idx, subIdx) = idxMap(syntax)
        rhsParams = rhs.params
        target = SyntaxDirectedOperationHead.Target(
          lhsName,
          idx,
          subIdx,
          rhsParams,
        )
      } yield generator(Some(target))
    } else {
      // special 'Default' case: assigned to special LHS named "Default")
      List(generator(None))
    }
  }

  // get concrete method heads
  private def parseConcMethodHead(
    parent: Element,
    elem: Element,
  ): List[ConcreteMethodHead] =
    val headContent = getHeadContent(parent)
    val generator =
      parseBy(concMethodHeadGen <~ opt("Concrete Method"))(headContent)
    val receiverParam =
      if (concretePattern.matches(parent.getSecondChildContent)) {
        // handle es2021
        val concretePattern(t, receiver) = parent.getSecondChildContent
        Param(receiver, ty = Type(t))
      } else {
        // handle recent
        val dataMap = elem.getPrevElem.toDataMap
        val forData = dataMap("for")
        parseBy(paramDesc)(forData)
      }
    List(generator(receiverParam))

  // get internal method heads
  private def parseInMethodHead(
    parent: Element,
    elem: Element,
  ): List[InternalMethodHead] =
    val headContent = getHeadContent(parent)
    val generator =
      parseBy(inMethodHeadGen)(headContent)
    val receiverParam =
      if (internalPattern.matches(parent.getSecondChildContent)) {
        // handle es2021
        val internalPattern(t, receiver) = parent.getSecondChildContent
        Param(receiver, ty = Type(t))
      } else {
        // handle recent
        val dataMap = elem.getPrevElem.toDataMap
        val forData = dataMap("for")
        parseBy(paramDesc)(forData)
      }
    List(generator(receiverParam))

  // get built-in heads
  private def parseBuiltinHead(
    parent: Element,
    elem: Element,
  ): List[BuiltinHead] =
    val headContent = getHeadContent(parent)
    List(parseBy(builtinHead)(headContent))

  // parse built-in head reference
  def parseBuiltinRef(str: String): BuiltinHead.Ref =
    parseBy(ref)(str)

  // get head contents from parent elements
  private def getHeadContent(parent: Element): String =
    val headContent = parent.getFirstChildContent
    parent.id match
      case "await" => "Await (_value_)"
      case "sec-normalcompletion"
          if parent.attr("type") != "abstract operation" =>
        "NormalCompletion (_argument_)"
      case "sec-throwcompletion"
          if parent.attr("type") != "abstract operation" =>
        "ThrowCompletion (_argument_)"
      case _ => headContent
}

/** specification parsers */
trait Parsers extends BasicParsers {
  // skip only white spaces and comments
  protected override val whiteSpace = "[ \t]*//.*|[ \t]+".r

  // production lists
  given prods: Parser[List[Production]] = {
    rep1(rep(newline) ~> prod)
  }.named("List[spec.Production]")

  // productions
  given prod: Parser[Production] = {
    lhs ~ prodKind ~ opt("one of") ~ rep1(opt(newline) ~> rhs) ^^ {
      case l ~ k ~ Some(_) ~ origRs =>
        val rs = for {
          r <- origRs
          s <- r.symbols
        } yield Rhs(None, List(s), None)
        Production(l, k, true, rs)
      case l ~ k ~ None ~ rs => Production(l, k, false, rs)
    }
  }.named("spec.Production")

  // production kinds
  lazy val prodKind: Parser[Production.Kind] =
    import Production.Kind.*
    ":::" ^^^ NumericString | "::" ^^^ Lexical | ":" ^^^ Syntactic

  // production left-hand-sides (LHSs)
  given lhs: Parser[Lhs] = {
    word ~ opt("[" ~> repsep(word, ",") <~ "]") ^^ {
      case name ~ params =>
        Lhs(name, params.getOrElse(Nil))
    }
  }.named("spec.Lhs")

  // production alternative right-hand-sides (RHSs)
  given rhs: Parser[Rhs] = {
    opt(rhsCond) ~ rep1(symbol) ~ opt(rhsId) ^^ {
      case c ~ ss ~ i =>
        Rhs(c, ss, i)
    }
  }.named("spec.Rhs")

  // RHS conditions
  given rhsCond: Parser[RhsCond] = {
    "[" ~> ("[+~]".r) ~ word <~ "]" ^^ {
      case str ~ name =>
        RhsCond(name, str == "+")
    }
  }.named("spec.RhsCond")

  // RHS ids
  lazy val rhsId: Parser[String] = "#" ~> "[-a-zA-Z0-9]+".r

  // grammar symbols
  given symbol: Parser[Symbol] = {
    term | butnot | lookahead | butOnlyIf | nt | abbr | unicodeSet | empty | nlt
  }.named("spec.Symbol")

  // terminals
  lazy val term: Parser[Terminal] =
    "`[^`]+`|```".r ^^ {
      case str =>
        Terminal(str.substring(1, str.length - 1))
    }

  // nonterminals
  lazy val nt: Parser[Nonterminal] =
    word ~ opt("[" ~> rep1sep(ntArg, ",") <~ "]") ~ opt("?") ^^ {
      case name ~ args ~ opt =>
        Nonterminal(name, args.getOrElse(Nil), opt.isDefined)
    }

  // butnot symbols
  lazy val butnot: Parser[ButNot] =
    (nt <~ ("but not" ~ opt("one of"))) ~ rep1sep(symbol, opt("or")) ^^ {
      case base ~ cases => ButNot(base, cases)
    }

  // but-only-if symbols
  // [> but only if MV of |HexDigits| > 0x10FFFF]
  lazy val butOnlyIf: Parser[ButOnlyIf] =
    nt ~ ("[> but only if" ~ opt("the") ~> word <~ "of |" ~ word ~ "|") ~
    "[^\\]]+".r <~ "]" ^^ {
      case base ~ name ~ cond => ButOnlyIf(base, name, cond)
    }

  // empty symbols
  lazy val empty: Parser[Empty.type] = "[empty]" ^^^ Empty

  // no-line-terminator symbols
  lazy val nlt: Parser[NoLineTerminator.type] =
    "\\[no [\\|]?LineTerminator[\\|]? here\\]".r ^^^ NoLineTerminator

  // symbols for code point abbreviations
  lazy val abbr: Parser[CodePointAbbr] =
    "<" ~> word <~ ">" ^^ { CodePointAbbr(_) }

  // symbols for sets of unicode code points with a condition
  lazy val unicodeSet: Parser[UnicodeSet] =
    ">" ~ "any Unicode code point" ~> opt(".+".r) ^^ { UnicodeSet(_) }

  // lookahead symbol
  lazy val lookahead: Parser[Lookahead] =
    "[lookahead " ~> containsSymbol ~ laList <~ "]" ^^ {
      case b ~ cases => Lookahead(b, cases)
    }
  lazy val laList: Parser[List[List[Symbol]]] =
    opt("{") ~> repsep(rep(symbol), ",") <~ opt("}")
  lazy val containsSymbol: Parser[Boolean] =
    ("!=" | "<!" | "∉") ^^^ false | ("==" | "<" | "∈") ^^^ true

  // nonterminal arguments
  lazy val ntArg: Parser[NtArg] =
    import NtArg.Kind.*
    ("+" ^^^ True | "~" ^^^ False | "?" ^^^ Pass) ~ word ^^ {
      case kind ~ name => NtArg(kind, name)
    }

  // identifiers
  lazy val id: Parser[String] = "_[^_]+_".r ^^ { s =>
    s.substring(1, s.length - 1)
  }

  // names
  lazy val name: Parser[String] = "[a-zA-Z0-9/]+".r

  // TODO handle type more precisely such as:
  // - ~normal~, ~generator~, ~async~, or ~asyncGenerator~
  // - an ECMAScript language value, but not *undefined* or *null*
  // - a possibly empty List, each of whose elements is a String or *undefined*
  // ...
  given ty: Parser[Type] = "([^_,:]|, )+".r ^^ { Type(_) }

  lazy val retTy: Parser[Type] = opt(":" ~> ty) ^^ { _.getOrElse(UnknownType) }

  lazy val ref: Parser[BuiltinHead.Ref] =
    import BuiltinHead.Ref
    import BuiltinHead.Ref.*
    lazy val name: Parser[String] = "[_`a-zA-Z0-9]+".r ^^ { _.trim }
    lazy val yet: Parser[String] = "[_`%a-zA-Z0-9.\\[\\]@:\\- ]+".r ^^ {
      _.trim
    }
    lazy val pre: Parser[Ref => Ref] =
      "get " ^^^ { Getter(_) } | "set " ^^^ { Setter(_) } | "" ^^^ { x => x }
    lazy val base: Parser[Ref] =
      opt("%") ~> name <~ opt("%") ^^ { Base(_) }
    lazy val access: Parser[Ref => Ref] =
      "." ~> name ^^ { case n => NormalAccess(_, n) } |
      "[" ~> "@@" ~> name <~ "]" ^^ { case s => SymbolAccess(_, s) }
    pre ~ base ~ rep(access) <~ (guard("(") | not(".".r)) ^^ {
      case p ~ b ~ as => p(as.foldLeft(b) { case (b, a) => a(b) })
    } | yet ^^ { YetRef(_) }

  // runtime/static semantics
  lazy val semanticsKind: Parser[Boolean] =
    (("Runtime" | "Static") <~ "Semantics" ~ ":") ^^ { _ == "Static" }

  // abstract opration (AO) heads
  lazy val absOpHeadGen: Parser[Boolean => AbstractOperationHead] =
    opt(semanticsKind) ~> name ~ params ~ retTy ^^ {
      case name ~ params ~ rty => AbstractOperationHead(_, name, params, rty)
    }

  // numeric method heads
  lazy val numMethodHead: Parser[NumericMethodHead] =
    (ty <~ "::") ~ name ~ params ~ retTy ^^ {
      case t ~ x ~ ps ~ rty => NumericMethodHead(t, x, ps, rty)
    }

  // algorithm parameters
  lazy val param: Parser[Param] =
    import Param.Kind.*
    opt("optional") ~ id ~ opt(":" ~> ty) ^^ {
      case opt ~ name ~ ty =>
        val kind = if (opt.isDefined) Optional else Normal
        Param(name, kind, ty.getOrElse(UnknownType))
    } | opt(",") ~ "…" ^^^ Param("", Ellipsis, UnknownType)

  // multiple algorithm parameters
  lazy val params: Parser[List[Param]] =
    import Param.Kind.Ellipsis
    opt(
      "(" ~ opt(newline) ~> repsep(param, "," ~ opt(newline)) ~ oldOptParams <~
      opt("," ~ newline) ~ ")",
    ) ^^ {
      case None           => Nil
      case Some(ps ~ ops) => ps ++ ops
    }

  // old parameters in <p> ... </p>
  lazy val withParams: Parser[List[Param]] =
    lazy val wTy: Parser[Type] = opt("(" ~> "([^_,:()]|, )+".r <~ ")") ^^ {
      _.map(s => Type(s)).getOrElse(UnknownType)
    }
    lazy val wParam: Parser[Param] =
      (opt("optional") <~ opt("parameters" | "parameter")) ~ id ~ wTy ^^ {
        case None ~ n ~ t    => Param(n, ty = t)
        case Some(_) ~ n ~ t => Param(n, kind = Param.Kind.Optional, ty = t)
      }
    "With" ~> repsep(wParam, ", and" | "and" | ",") <~ "."

  // TODO remove this legacy parser later
  lazy val oldOptParams: Parser[List[Param]] =
    import Param.Kind.*
    "[" ~> opt(",") ~> param ~ opt(oldOptParams) <~ "]" ^^ {
      case p ~ psOpt => p.copy(kind = Optional) :: psOpt.getOrElse(Nil)
    } |
    "," ~> param ^^ {
      case p => List(p.copy(kind = Optional))
    } | opt(",") ~ "..." ~> param ^^ {
      case p => List(p.copy(kind = Variadic))
    } | success(Nil)
  lazy val paramDesc: Parser[Param] =
    import Param.Kind.*
    ty ~ opt(id) ^^ {
      case ty ~ name => Param(name.getOrElse("this"), Normal, ty)
    }

  // syntax-directed operation (SDO) head generator
  lazy val sdoHeadGen: Parser[
    Option[SyntaxDirectedOperationHead.Target] => SyntaxDirectedOperationHead,
  ] =
    semanticsKind ~ name ~ params ~ retTy ^^ {
      case isStatic ~ x ~ params ~ rty =>
        SyntaxDirectedOperationHead(_, x, isStatic, params, rty)
    }

  // concrete method head generator
  lazy val concMethodHeadGen: Parser[Param => ConcreteMethodHead] =
    name ~ params ~ retTy ^^ {
      case name ~ params ~ rty =>
        ConcreteMethodHead(name, _, params, rty)
    }

  // internal method head generator
  lazy val inMethodHeadGen: Parser[Param => InternalMethodHead] =
    ("[[" ~> name <~ "]]") ~ params ~ retTy ^^ {
      case name ~ params ~ rty =>
        InternalMethodHead(name, _, params, rty)
    }

  // built-in heads
  lazy val builtinHead: Parser[BuiltinHead] =
    ref ~ params ~ retTy ^^ {
      case r ~ params ~ rty => BuiltinHead(r, params, rty)
    }
}
