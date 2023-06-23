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
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncMethod"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncMethod"]), true);
$assert.notCallable(globalThis["asyncMethod"]);
$assert.notConstructable(globalThis["asyncMethod"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncMethod"]), ['0', 'length', 'callee', Symbol.iterator], globalThis["asyncMethod"]);
$assert.sameValue(globalThis["asyncMethod"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["asyncMethod"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["asyncMethod"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["asyncMethod"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["asyncMethod"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["asyncMethod"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncMethod"], "0", {
  value: "async method",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["asyncMethodParam"], globalThis["asyncMethod"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["genMethod"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["genMethod"]), true);
$assert.notCallable(globalThis["genMethod"]);
$assert.notConstructable(globalThis["genMethod"]);
$assert.compareArray($Reflect_ownKeys(globalThis["genMethod"]), ['0', 'length', 'callee', Symbol.iterator], globalThis["genMethod"]);
$assert.sameValue(globalThis["genMethod"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["genMethod"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["genMethod"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["genMethod"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["genMethod"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["genMethod"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["genMethod"], "0", {
  value: "generator method",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["genMethodParam"], globalThis["genMethod"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["getter"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["getter"]), true);
$assert.notCallable(globalThis["getter"]);
$assert.notConstructable(globalThis["getter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["getter"]), ['length', 'callee', Symbol.iterator], globalThis["getter"]);
$assert.sameValue(globalThis["getter"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["getter"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["getter"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["getter"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["getter"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["getter"], "length", {
  value: 0.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["instance"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["instance"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])), ['constructor', 'method', 'accessor', 'gen', 'async'], $Object_getPrototypeOf(globalThis["instance"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])?.["async"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])?.["async"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["instance"])?.["async"]);
$assert.notConstructable($Object_getPrototypeOf(globalThis["instance"])?.["async"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])?.["async"]), ['length', 'name'], $Object_getPrototypeOf(globalThis["instance"])?.["async"]);
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["async"], "name", {
  value: "async",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["async"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"]), "async", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])?.["method"]), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])?.["method"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["instance"])?.["method"]);
$assert.notConstructable($Object_getPrototypeOf(globalThis["instance"])?.["method"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])?.["method"]), ['length', 'name'], $Object_getPrototypeOf(globalThis["instance"])?.["method"]);
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["method"], "name", {
  value: "method",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["method"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"]), "method", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]);
$assert.constructable($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["instance"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["instance"])?.["constructor"]?.["prototype"], $Object_getPrototypeOf(globalThis["instance"]));
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["constructor"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"]), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get, "name", {
  value: "get accessor",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set, "name", {
  value: "set accessor",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["instance"]), "accessor")?.set, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"]), "accessor", {
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])?.["gen"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])?.["gen"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["instance"])?.["gen"]);
$assert.notConstructable($Object_getPrototypeOf(globalThis["instance"])?.["gen"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])?.["gen"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["instance"])?.["gen"]);
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]), [], $Object_getPrototypeOf(globalThis["instance"])?.["gen"]?.["prototype"]);
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["gen"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["gen"], "name", {
  value: "gen",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"])?.["gen"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["instance"]), "gen", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["instance"]), true);
$assert.notCallable(globalThis["instance"]);
$assert.notConstructable(globalThis["instance"]);
$assert.compareArray($Reflect_ownKeys(globalThis["instance"]), [], globalThis["instance"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["method"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["method"]), true);
$assert.notCallable(globalThis["method"]);
$assert.notConstructable(globalThis["method"]);
$assert.compareArray($Reflect_ownKeys(globalThis["method"]), ['0', 'length', 'callee', Symbol.iterator], globalThis["method"]);
$assert.sameValue(globalThis["method"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["method"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["method"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["method"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["method"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["method"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["method"], "0", {
  value: "method",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["methodParam"], globalThis["method"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["setter"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["setter"]), true);
$assert.notCallable(globalThis["setter"]);
$assert.notConstructable(globalThis["setter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["setter"]), ['0', 'length', 'callee', Symbol.iterator], globalThis["setter"]);
$assert.sameValue(globalThis["setter"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["setter"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["setter"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["setter"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["setter"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["setter"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["setter"], "0", {
  value: "setter",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["setterParam"], globalThis["setter"]);
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
$verifyProperty(C, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
