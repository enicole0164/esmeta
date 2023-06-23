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
$assert.sameValue($Object_getPrototypeOf(globalThis["actual"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["actual"]), true);
$assert.notCallable(globalThis["actual"]);
$assert.notConstructable(globalThis["actual"]);
$assert.compareArray($Reflect_ownKeys(globalThis["actual"]), ['1', '3', '5', '6', '7', '8', '9', 'length'], globalThis["actual"]);
$verifyProperty(globalThis["actual"], "9", {
  value: "Z",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "7", {
  value: "X",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "length", {
  value: 10.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["actual"], "8", {
  value: "Y",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["actual"]?.["6"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["actual"]?.["6"]), true);
$assert.notCallable(globalThis["actual"]?.["6"]);
$assert.notConstructable(globalThis["actual"]?.["6"]);
$assert.compareArray($Reflect_ownKeys(globalThis["actual"]?.["6"]), ['0', '1', '2', 'length'], globalThis["actual"]?.["6"]);
$verifyProperty(globalThis["actual"]?.["6"], "1", {
  value: "1",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"]?.["6"], "2", {
  value: "2",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"]?.["6"], "length", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"]?.["6"], "0", {
  value: "0",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "6", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "1", {
  value: "A",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "3", {
  value: "B",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["actual"], "5", {
  value: "C",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['0', '1', '2', 'length'], globalThis["arr"]);
$verifyProperty(globalThis["arr"], "1", {
  value: "Y",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "2", {
  value: "Z",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "length", {
  value: 3.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["arr"], "0", {
  value: "X",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'sameValue', 'notSameValue', 'throws', '_toString', 'compareArray'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["compareArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["compareArray"]), true);
$assert.callable(globalThis["assert"]?.["compareArray"]);
$assert.constructable(globalThis["assert"]?.["compareArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["compareArray"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["compareArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["compareArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["compareArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["compareArray"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["compareArray"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["compareArray"]);
$verifyProperty(globalThis["assert"]?.["compareArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "compareArray", {
  writable: true,
  enumerable: true,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]), true);
$assert.callable(globalThis["compareArray"]);
$assert.constructable(globalThis["compareArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]), ['length', 'name', 'prototype', 'isSameValue', 'format'], globalThis["compareArray"]);
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
$verifyProperty(globalThis["compareArray"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["format"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["format"]), true);
$assert.callable(globalThis["compareArray"]?.["format"]);
$assert.constructable(globalThis["compareArray"]?.["format"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["format"]), ['length', 'name', 'prototype'], globalThis["compareArray"]?.["format"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["format"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["format"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["format"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["format"]?.["prototype"]?.["constructor"], globalThis["compareArray"]?.["format"]);
$verifyProperty(globalThis["compareArray"]?.["format"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "format", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "name", {
  value: "compareArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["expected"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["expected"]), true);
$assert.notCallable(globalThis["expected"]);
$assert.notConstructable(globalThis["expected"]);
$assert.compareArray($Reflect_ownKeys(globalThis["expected"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'length'], globalThis["expected"]);
$verifyProperty(globalThis["expected"], "4", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "2", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "9", {
  value: "Z",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "7", {
  value: "X",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "length", {
  value: 10.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["expected"], "8", {
  value: "Y",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "0", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["expected"]?.["6"], globalThis["actual"]?.["6"]);
$verifyProperty(globalThis["expected"], "6", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "1", {
  value: "A",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "3", {
  value: "B",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["expected"], "5", {
  value: "C",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["obj"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["obj"]), true);
$assert.notCallable(globalThis["obj"]);
$assert.notConstructable(globalThis["obj"]);
$assert.compareArray($Reflect_ownKeys(globalThis["obj"]), ['1', '3', '5', 'length', Symbol.isConcatSpreadable], globalThis["obj"]);
$verifyProperty(globalThis["obj"], "length", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["obj"], "1", {
  value: "A",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["obj"], Symbol.isConcatSpreadable, {
  value: true,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["obj"], "3", {
  value: "B",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["obj"], "5", {
  value: "C",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["obj2"], globalThis["actual"]?.["6"]);
