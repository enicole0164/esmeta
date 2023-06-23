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
$assert.sameValue(globalThis["attr"], "length");
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
$assert.sameValue($Object_getPrototypeOf(A), Function.prototype);
$assert.sameValue(Object.isExtensible(A), true);
$assert.callable(A);
$assert.constructable(A);
$assert.compareArray($Reflect_ownKeys(A), ['length', 'name', 'prototype', 'method'], A);
$assert.sameValue($Object_getPrototypeOf(A?.["method"]), Function.prototype);
$assert.sameValue(Object.isExtensible(A?.["method"]), true);
$assert.callable(A?.["method"]);
$assert.notConstructable(A?.["method"]);
$assert.compareArray($Reflect_ownKeys(A?.["method"]), ['length', 'name'], A?.["method"]);
$verifyProperty(A?.["method"], "name", {
  value: "method",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A?.["method"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A, "method", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(A?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(A?.["prototype"]), true);
$assert.notCallable(A?.["prototype"]);
$assert.notConstructable(A?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(A?.["prototype"]), ['constructor'], A?.["prototype"]);
$assert.sameValue(A?.["prototype"]?.["constructor"], A);
$verifyProperty(A?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(A, "name", {
  value: "A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(A?.["length"]), Function.prototype);
$assert.sameValue(Object.isExtensible(A?.["length"]), true);
$assert.callable(A?.["length"]);
$assert.notConstructable(A?.["length"]);
$assert.compareArray($Reflect_ownKeys(A?.["length"]), ['length', 'name'], A?.["length"]);
$verifyProperty(A?.["length"], "name", {
  value: "length",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A?.["length"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A, "length", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(B), Function.prototype);
$assert.sameValue(Object.isExtensible(B), true);
$assert.callable(B);
$assert.constructable(B);
$assert.compareArray($Reflect_ownKeys(B), ['length', 'name', 'prototype'], B);
$assert.sameValue($Object_getPrototypeOf(B?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(B?.["prototype"]), true);
$assert.notCallable(B?.["prototype"]);
$assert.notConstructable(B?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(B?.["prototype"]), ['constructor'], B?.["prototype"]);
$assert.sameValue(B?.["prototype"]?.["constructor"], B);
$verifyProperty(B?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(B, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(B, "name", {
  value: "B",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(B?.["length"]), Function.prototype);
$assert.sameValue(Object.isExtensible(B?.["length"]), true);
$assert.callable(B?.["length"]);
$assert.notConstructable(B?.["length"]);
$assert.compareArray($Reflect_ownKeys(B?.["length"]), ['length', 'name'], B?.["length"]);
$verifyProperty(B?.["length"], "name", {
  value: "length",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(B?.["length"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(B, "length", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(C), Function.prototype);
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(C?.["prototype"]), true);
$assert.notCallable(C?.["prototype"]);
$assert.notConstructable(C?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(C?.["prototype"]), ['constructor'], C?.["prototype"]);
$assert.sameValue(C?.["prototype"]?.["constructor"], C);
$verifyProperty(C?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(C, "name", {
  value: "C",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(C, "length")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(C, "length")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(C, "length")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(C, "length")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(C, "length")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(C, "length")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(C, "length")?.get, "name", {
  value: "get length",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(C, "length")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "length", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(D), Function.prototype);
$assert.sameValue(Object.isExtensible(D), true);
$assert.callable(D);
$assert.constructable(D);
$assert.compareArray($Reflect_ownKeys(D), ['length', 'name', 'prototype'], D);
$assert.sameValue($Object_getPrototypeOf(D?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(D?.["prototype"]), true);
$assert.notCallable(D?.["prototype"]);
$assert.notConstructable(D?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(D?.["prototype"]), ['constructor'], D?.["prototype"]);
$assert.sameValue(D?.["prototype"]?.["constructor"], D);
$verifyProperty(D?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(D, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(D, "name", {
  value: "D",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(D, "length")?.set), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(D, "length")?.set), true);
$assert.callable(Object.getOwnPropertyDescriptor(D, "length")?.set);
$assert.notConstructable(Object.getOwnPropertyDescriptor(D, "length")?.set);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(D, "length")?.set), ['length', 'name'], Object.getOwnPropertyDescriptor(D, "length")?.set);
$verifyProperty(Object.getOwnPropertyDescriptor(D, "length")?.set, "name", {
  value: "set length",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(D, "length")?.set, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(D, "length", {
  get: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(E), Function.prototype);
$assert.sameValue(Object.isExtensible(E), true);
$assert.callable(E);
$assert.constructable(E);
$assert.compareArray($Reflect_ownKeys(E), ['length', 'name', 'prototype'], E);
$assert.sameValue($Object_getPrototypeOf(E?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(E?.["prototype"]), true);
$assert.notCallable(E?.["prototype"]);
$assert.notConstructable(E?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(E?.["prototype"]), ['constructor'], E?.["prototype"]);
$assert.sameValue(E?.["prototype"]?.["constructor"], E);
$verifyProperty(E?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(E, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(E, "name", {
  value: "E",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(E?.["length"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(E?.["length"]), true);
$assert.callable(E?.["length"]);
$assert.notConstructable(E?.["length"]);
$assert.compareArray($Reflect_ownKeys(E?.["length"]), ['length', 'name', 'prototype'], E?.["length"]);
$assert.sameValue($Object_getPrototypeOf(E?.["length"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(E?.["length"]?.["prototype"]), true);
$assert.notCallable(E?.["length"]?.["prototype"]);
$assert.notConstructable(E?.["length"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(E?.["length"]?.["prototype"]), [], E?.["length"]?.["prototype"]);
$verifyProperty(E?.["length"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(E?.["length"], "name", {
  value: "length",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(E?.["length"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(E, "length", {
  writable: true,
  enumerable: false,
  configurable: true,
});
