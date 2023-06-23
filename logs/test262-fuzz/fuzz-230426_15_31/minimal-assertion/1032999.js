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
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]), ['join'], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]), true);
$assert.callable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]), ['length', 'name'], globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"], "name", {
  value: "join",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["join"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "join", {
  writable: true,
  enumerable: true,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["__consolePrintHandle__"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["__consolePrintHandle__"]), true);
$assert.callable(globalThis["__consolePrintHandle__"]);
$assert.constructable(globalThis["__consolePrintHandle__"]);
$assert.compareArray($Reflect_ownKeys(globalThis["__consolePrintHandle__"]), ['length', 'name', 'prototype'], globalThis["__consolePrintHandle__"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["__consolePrintHandle__"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["__consolePrintHandle__"]?.["prototype"]), true);
$assert.notCallable(globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.notConstructable(globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["__consolePrintHandle__"]?.["prototype"]), ['constructor'], globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.sameValue(globalThis["__consolePrintHandle__"]?.["prototype"]?.["constructor"], globalThis["__consolePrintHandle__"]);
$verifyProperty(globalThis["__consolePrintHandle__"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "name", {
  value: "__consolePrintHandle__",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'notSameValue', 'throws', '_toString'], globalThis["assert"]);
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
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]), true);
$assert.notCallable(globalThis["assert"]?.["_toString"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]), [Symbol.replace], globalThis["assert"]?.["_toString"]);
$verifyProperty(globalThis["assert"]?.["_toString"], Symbol.replace, {
  value: null,
  writable: true,
  enumerable: true,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["checkAssertions"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["checkAssertions"]), true);
$assert.callable(globalThis["checkAssertions"]);
$assert.notConstructable(globalThis["checkAssertions"]);
$assert.compareArray($Reflect_ownKeys(globalThis["checkAssertions"]), ['length', 'name'], globalThis["checkAssertions"]);
$verifyProperty(globalThis["checkAssertions"], "name", {
  value: "checkAssertions",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["checkAssertions"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]), true);
$assert.callable(globalThis["compareArray"]);
$assert.constructable(globalThis["compareArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]), ['length', 'name', 'prototype', 'isSameValue'], globalThis["compareArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["prototype"]?.["constructor"], globalThis["compareArray"]);
$verifyProperty(globalThis["compareArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"], "name", {
  value: "compareArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["isSameValue"]), true);
$assert.callable(globalThis["compareArray"]?.["isSameValue"]);
$assert.constructable(globalThis["compareArray"]?.["isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["isSameValue"]), ['length', 'name', 'prototype'], globalThis["compareArray"]?.["isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]?.["constructor"], globalThis["compareArray"]?.["isSameValue"]);
$verifyProperty(globalThis["compareArray"]?.["isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "isSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["countdown"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["countdown"]), true);
$assert.callable(globalThis["countdown"]);
$assert.constructable(globalThis["countdown"]);
$assert.compareArray($Reflect_ownKeys(globalThis["countdown"]), ['length', 'name', 'prototype'], globalThis["countdown"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["countdown"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["countdown"]?.["prototype"]), true);
$assert.notCallable(globalThis["countdown"]?.["prototype"]);
$assert.notConstructable(globalThis["countdown"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["countdown"]?.["prototype"]), ['constructor'], globalThis["countdown"]?.["prototype"]);
$assert.sameValue(globalThis["countdown"]?.["prototype"]?.["constructor"], globalThis["countdown"]);
$verifyProperty(globalThis["countdown"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["countdown"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["countdown"], "name", {
  value: "countdown",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["countdown"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["naturalNumbers"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["naturalNumbers"]), true);
$assert.callable(globalThis["naturalNumbers"]);
$assert.notConstructable(globalThis["naturalNumbers"]);
$assert.compareArray($Reflect_ownKeys(globalThis["naturalNumbers"]), ['length', 'name', 'prototype'], globalThis["naturalNumbers"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["naturalNumbers"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["naturalNumbers"]?.["prototype"]), true);
$assert.notCallable(globalThis["naturalNumbers"]?.["prototype"]);
$assert.notConstructable(globalThis["naturalNumbers"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["naturalNumbers"]?.["prototype"]), [], globalThis["naturalNumbers"]?.["prototype"]);
$verifyProperty(globalThis["naturalNumbers"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["naturalNumbers"], "name", {
  value: "naturalNumbers",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["naturalNumbers"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["trigger"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["trigger"]), true);
$assert.callable(globalThis["trigger"]);
$assert.notConstructable(globalThis["trigger"]);
$assert.compareArray($Reflect_ownKeys(globalThis["trigger"]), ['length', 'name'], globalThis["trigger"]);
$verifyProperty(globalThis["trigger"], "name", {
  value: "trigger",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["trigger"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(actual), Array.prototype);
$assert.sameValue(Object.isExtensible(actual), true);
$assert.notCallable(actual);
$assert.notConstructable(actual);
$assert.compareArray($Reflect_ownKeys(actual), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'length'], actual);
$verifyProperty(actual, "4", {
  value: "Promise: 3",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "2", {
  value: "Await: 3",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "9", {
  value: "Promise: 0",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "7", {
  value: "Promise: 1",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "length", {
  value: 10.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(actual, "8", {
  value: "Await: 1",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "0", {
  value: "Promise: 6",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "6", {
  value: "Promise: 2",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "1", {
  value: "Promise: 5",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "3", {
  value: "Promise: 4",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(actual, "5", {
  value: "Await: 2",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(expected), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(expected), true);
$assert.callable(expected);
$assert.notConstructable(expected);
$assert.compareArray($Reflect_ownKeys(expected), ['length', 'name'], expected);
$verifyProperty(expected, "name", {
  value: "expected",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(expected, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(iterations, 3.0);
