// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONOTEVALUATE"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONOTEVALUATE"]), true);
$assert.callable(globalThis["$DONOTEVALUATE"]);
$assert.constructable(globalThis["$DONOTEVALUATE"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONOTEVALUATE"]), ['length', 'name', 'prototype'], globalThis["$DONOTEVALUATE"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONOTEVALUATE"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONOTEVALUATE"]?.["prototype"]), true);
$assert.notCallable(globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.notConstructable(globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONOTEVALUATE"]?.["prototype"]), ['constructor'], globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.sameValue(globalThis["$DONOTEVALUATE"]?.["prototype"]?.["constructor"], globalThis["$DONOTEVALUATE"]);
$verifyProperty(globalThis["$DONOTEVALUATE"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "name", {
  value: "$DONOTEVALUATE",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype', 'thrower'], globalThis["Test262Error"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["thrower"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["thrower"]), true);
$assert.callable(globalThis["Test262Error"]?.["thrower"]);
$assert.notConstructable(globalThis["Test262Error"]?.["thrower"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["thrower"]), ['length', 'name'], globalThis["Test262Error"]?.["thrower"]);
$verifyProperty(globalThis["Test262Error"]?.["thrower"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["thrower"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "thrower", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]), ['constructor', 'toString'], globalThis["Test262Error"]?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]), true);
$assert.callable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.constructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["Test262Error"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"], "name", {
  value: "Test262Error",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'sameValue', 'notSameValue', 'throws', '_toString'], globalThis["assert"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["prototype"]?.["constructor"], globalThis["assert"]);
$verifyProperty(globalThis["assert"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]), true);
$assert.callable(globalThis["assert"]?.["_isSameValue"]);
$assert.constructable(globalThis["assert"]?.["_isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["_isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["_isSameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["_isSameValue"]);
$verifyProperty(globalThis["assert"]?.["_isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_isSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["throws"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["throws"]), true);
$assert.callable(globalThis["assert"]?.["throws"]);
$assert.constructable(globalThis["assert"]?.["throws"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["throws"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["throws"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["throws"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["throws"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["throws"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["throws"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["throws"]);
$verifyProperty(globalThis["assert"]?.["throws"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["throws"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["throws"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["throws"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "throws", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]), true);
$assert.callable(globalThis["assert"]?.["notSameValue"]);
$assert.constructable(globalThis["assert"]?.["notSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["notSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["notSameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["notSameValue"]);
$verifyProperty(globalThis["assert"]?.["notSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "notSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]), true);
$assert.callable(globalThis["assert"]?.["_toString"]);
$assert.constructable(globalThis["assert"]?.["_toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["_toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["_toString"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["_toString"]);
$verifyProperty(globalThis["assert"]?.["_toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]), true);
$assert.callable(globalThis["assert"]?.["sameValue"]);
$assert.constructable(globalThis["assert"]?.["sameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["sameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["sameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["sameValue"]);
$verifyProperty(globalThis["assert"]?.["sameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "sameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["largeStr"], "Standard ECMA-2623r d Edition - December 1999S t a n d a r d i z i n g Informat i o n and Commu n i c a t i o n SystemsPhone: +41 22 849.60.00 - Fax: +41 22 849.60.01 - URL: ht tp: / /www.ecma.ch - Internet: helpdesk@ecma.chECMAScript LanguageSpecificationStandard ECMA-2623r d Edition - December 1999S t a n d a r d i z i n g Informat i o n and Commu n i c a t i o n SystemsPhone: +41 22 849.60.00 - Fax: +41 22 849.60.01 - URL: ht tp: / /www.ecma.ch - Internet: helpdesk@ecma.chMB Ecma-262.doc 08-04-02 16,53ECMAScript LanguageSpecificationBrief HistoryThis ECMA Standard is based on several originating technologies, the most well known being JavaScript (Netscape)and JScript (Microsoft). The language was invented by Brendan Eich at Netscape and first appeared in thatcompan Navigator 2.0 browser. It has appeared in all subsequent browsers from Netscape and in all browsers fromMicrosoft starting with Internet Explorer 3.0.The development of this Standard started in November 1996. The first edition of this ECMA Standard was adopted bythe ECMA General Assembly of June 1997.That ECMA Standard was submitted to ISO/IEC JTC 1 for adoption under the fast-track procedure, and approved asinternational standard ISO/IEC 16262, in April 1998. The ECMA General Assembly of June 1998 approved thesecond edition of ECMA-262 to keep it fully aligned with ISO/IEC 16262. Changes between the first and the secondedition are editorial in nature.The current document defines the third edition of the Standard and includes powerful regular expressions, betterstring handling, new control statements, try/catch exception handling, tighter definition of errors, formatting fornumeric output and minor changes in anticipation of forthcoming internationalisation facilities and future languagegrowth.Work on the language is not complete. The technical committee is working on significant enhancements, includingmechanisms for scripts to be created and used across the Internet, and tighter coordination with other standards bodiessuch as groups within the World Wide Web Consortium and the Wireless Application Protocol Forum.This Standard has been adopted as 3rd Edition of ECMA-262 by the ECMA General Assembly in December, 1999.- i -Table of contents1 Scope 12 Conformance 13 References 14 Overview 1 4.1 Web Scripting 2 4.2 Language Overview 2 4.2.1 Objects 3 4.3 Definitions 4 4.3.1 Type 4 4.3.2 Primitive Value 4 4.3.3 Object 4 4.3.4 Constructor 4 4.3.5 Prototype 4 4.3.6 Native Object 4 4.3.7 Built-in Object 4 4.3.8 Host Object 4 4.3.9 Undefined Value 4 4.3.10 Undefined Type 4 4.3.11 Null Value 4 4.3.12 Null Type 4 4.3.13 Boolean Value 4 4.3.14 Boolean Type 4 4.3.15 Boolean Object 5 4.3.16 String Value 5 4.3.17 String Type 5 4.3.18 String Object 5 4.3.19 Number Value 5 4.3.20 Number Type 5 4.3.21 Number Object 5 4.3.22 Infinity 5 4.3.23 NaN 5 5 Notational Conventions 6 5.1 Syntactic and Lexical Grammars 6 5.1.1 Context-Free Grammars 6 5.1.2 The Lexical and RegExp Grammars 6 5.1.3 The Numeric String Grammar 6 5.1.4 The Syntactic Grammar 6 5.1.5 Grammar Notation 7 5.2 Algorithm Conventions 9 6. Source Text 10 7 Lexical Conventions 11 7.1 Unicode Format-Control Characters 11 7.2 White Space 11 7.3 Line Terminators 12 7.4 Comments 12 - ii - 7.5 Tokens 13 7.5.1 Reserved Words 13 7.5.2 Keywords 13 7.5.3 Future Reserved Words 14 7.6 Identifiers 14 7.7 Punctuators 15 7.8 Literals 16 7.8.1 Null Literals 16 7.8.2 Boolean Literals 16 7.8.3 Numeric Literals 16 7.8.4 String Literals 18 7.8.5 Regular Expression Literals 20 7.9 Automatic Semicolon Insertion 21 7.9.1 Rules of Automatic Semicolon Insertion 21 7.9.2 Examples of Automatic Semicolon Insertion 22 8 Types 24 8.1 The Undefined Type 24 8.2 The Null Type 24 8.3 The Boolean Type 24 8.4 The String Type 24 8.5 The Number Type 24 8.6 The Object Type 25 8.6.1 Property Attributes 25 8.6.2 Internal Properties and Methods 26 8.7 The Reference Type 29 8.7.1 GetValue (V) 29 8.7.2 PutValue (V, W) 29 8.8 The List Type 30 8.9 The Completion Type 30 9 Type Conversion 30 9.1 ToPrimitive 30 9.2 ToBoolean 30 9.3 ToNumber 31 9.3.1 ToNumber Ap");
