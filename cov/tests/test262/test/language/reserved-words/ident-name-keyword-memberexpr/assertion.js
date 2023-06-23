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
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', 'length'], globalThis["arr"]);
$verifyProperty(globalThis["arr"], "30", {
  value: "void",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "24", {
  value: "switch",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "10", {
  value: "do",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "17", {
  value: "if",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "32", {
  value: "with",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "27", {
  value: "try",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "29", {
  value: "var",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "18", {
  value: "import",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "35", {
  value: "implements",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "0", {
  value: "await",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "15", {
  value: "for",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "4", {
  value: "class",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "28", {
  value: "typeof",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "23", {
  value: "super",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "40", {
  value: "public",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "39", {
  value: "private",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "2", {
  value: "case",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "33", {
  value: "yield",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "9", {
  value: "delete",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "25", {
  value: "this",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "22", {
  value: "return",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "34", {
  value: "enum",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "31", {
  value: "while",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "7", {
  value: "debugger",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "14", {
  value: "finally",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "37", {
  value: "package",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "20", {
  value: "instanceof",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "11", {
  value: "else",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "length", {
  value: 43.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["arr"], "26", {
  value: "throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "21", {
  value: "new",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "38", {
  value: "protected",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "16", {
  value: "function",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "41", {
  value: "let",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "13", {
  value: "extends",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "6", {
  value: "continue",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "1", {
  value: "break",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "12", {
  value: "export",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "42", {
  value: "static",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "36", {
  value: "interface",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "8", {
  value: "default",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "19", {
  value: "in",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "3", {
  value: "catch",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "5", {
  value: "const",
  writable: true,
  enumerable: true,
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
$assert.sameValue(globalThis["i"], 43.0);
$assert.sameValue(globalThis["propertyName"], "static");
$assert.sameValue($Object_getPrototypeOf(globalThis["tokenCodes"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["tokenCodes"]), true);
$assert.notCallable(globalThis["tokenCodes"]);
$assert.notConstructable(globalThis["tokenCodes"]);
$assert.compareArray($Reflect_ownKeys(globalThis["tokenCodes"]), ['await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield', 'enum', 'implements', 'interface', 'package', 'protected', 'private', 'public', 'let', 'static'], globalThis["tokenCodes"]);
$verifyProperty(globalThis["tokenCodes"], "enum", {
  value: "enum",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "finally", {
  value: "finally",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "super", {
  value: "super",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "extends", {
  value: "extends",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "delete", {
  value: "delete",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "static", {
  value: "static",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "with", {
  value: "with",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "while", {
  value: "while",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "this", {
  value: "this",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "debugger", {
  value: "debugger",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "in", {
  value: "in",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "for", {
  value: "for",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "new", {
  value: "new",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "instanceof", {
  value: "instanceof",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "public", {
  value: "public",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "break", {
  value: "break",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "else", {
  value: "else",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "continue", {
  value: "continue",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "return", {
  value: "return",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "typeof", {
  value: "typeof",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "catch", {
  value: "catch",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "void", {
  value: "void",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "protected", {
  value: "protected",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "private", {
  value: "private",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "implements", {
  value: "implements",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "interface", {
  value: "interface",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "case", {
  value: "case",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "throw", {
  value: "throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "export", {
  value: "export",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "import", {
  value: "import",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "function", {
  value: "function",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "if", {
  value: "if",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "let", {
  value: "let",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "switch", {
  value: "switch",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "do", {
  value: "do",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "yield", {
  value: "yield",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "class", {
  value: "class",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "try", {
  value: "try",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "default", {
  value: "default",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "const", {
  value: "const",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "package", {
  value: "package",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "await", {
  value: "await",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["tokenCodes"], "var", {
  value: "var",
  writable: true,
  enumerable: true,
  configurable: true,
});
