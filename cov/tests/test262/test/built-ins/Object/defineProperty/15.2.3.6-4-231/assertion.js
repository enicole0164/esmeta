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
$assert.sameValue(globalThis["__isArray"], Array.isArray);
$assert.sameValue($Object_getPrototypeOf(globalThis["arrObj"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arrObj"]), true);
$assert.notCallable(globalThis["arrObj"]);
$assert.notConstructable(globalThis["arrObj"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arrObj"]), ['length', 'helpVerifySet'], globalThis["arrObj"]);
$verifyProperty(globalThis["arrObj"], "helpVerifySet", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arrObj"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["getFunc1"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["getFunc1"]), true);
$assert.callable(globalThis["getFunc1"]);
$assert.constructable(globalThis["getFunc1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["getFunc1"]), ['length', 'name', 'prototype'], globalThis["getFunc1"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["getFunc1"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["getFunc1"]?.["prototype"]), true);
$assert.notCallable(globalThis["getFunc1"]?.["prototype"]);
$assert.notConstructable(globalThis["getFunc1"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["getFunc1"]?.["prototype"]), ['constructor'], globalThis["getFunc1"]?.["prototype"]);
$assert.sameValue(globalThis["getFunc1"]?.["prototype"]?.["constructor"], globalThis["getFunc1"]);
$verifyProperty(globalThis["getFunc1"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["getFunc1"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["getFunc1"], "name", {
  value: "getFunc1",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["getFunc1"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["getFunc2"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["getFunc2"]), true);
$assert.callable(globalThis["getFunc2"]);
$assert.constructable(globalThis["getFunc2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["getFunc2"]), ['length', 'name', 'prototype'], globalThis["getFunc2"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["getFunc2"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["getFunc2"]?.["prototype"]), true);
$assert.notCallable(globalThis["getFunc2"]?.["prototype"]);
$assert.notConstructable(globalThis["getFunc2"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["getFunc2"]?.["prototype"]), ['constructor'], globalThis["getFunc2"]?.["prototype"]);
$assert.sameValue(globalThis["getFunc2"]?.["prototype"]?.["constructor"], globalThis["getFunc2"]);
$verifyProperty(globalThis["getFunc2"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["getFunc2"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["getFunc2"], "name", {
  value: "getFunc2",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["getFunc2"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isConfigurable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isConfigurable"]), true);
$assert.callable(globalThis["isConfigurable"]);
$assert.constructable(globalThis["isConfigurable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isConfigurable"]), ['length', 'name', 'prototype'], globalThis["isConfigurable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isConfigurable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isConfigurable"]?.["prototype"]), true);
$assert.notCallable(globalThis["isConfigurable"]?.["prototype"]);
$assert.notConstructable(globalThis["isConfigurable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isConfigurable"]?.["prototype"]), ['constructor'], globalThis["isConfigurable"]?.["prototype"]);
$assert.sameValue(globalThis["isConfigurable"]?.["prototype"]?.["constructor"], globalThis["isConfigurable"]);
$verifyProperty(globalThis["isConfigurable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isConfigurable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isConfigurable"], "name", {
  value: "isConfigurable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isConfigurable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isEnumerable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isEnumerable"]), true);
$assert.callable(globalThis["isEnumerable"]);
$assert.constructable(globalThis["isEnumerable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isEnumerable"]), ['length', 'name', 'prototype'], globalThis["isEnumerable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isEnumerable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isEnumerable"]?.["prototype"]), true);
$assert.notCallable(globalThis["isEnumerable"]?.["prototype"]);
$assert.notConstructable(globalThis["isEnumerable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isEnumerable"]?.["prototype"]), ['constructor'], globalThis["isEnumerable"]?.["prototype"]);
$assert.sameValue(globalThis["isEnumerable"]?.["prototype"]?.["constructor"], globalThis["isEnumerable"]);
$verifyProperty(globalThis["isEnumerable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isEnumerable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isEnumerable"], "name", {
  value: "isEnumerable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isEnumerable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isSameValue"]), true);
$assert.callable(globalThis["isSameValue"]);
$assert.constructable(globalThis["isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isSameValue"]), ['length', 'name', 'prototype'], globalThis["isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isSameValue"]?.["prototype"]), ['constructor'], globalThis["isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["isSameValue"]?.["prototype"]?.["constructor"], globalThis["isSameValue"]);
$verifyProperty(globalThis["isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isSameValue"], "name", {
  value: "isSameValue",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isWritable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isWritable"]), true);
$assert.callable(globalThis["isWritable"]);
$assert.constructable(globalThis["isWritable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isWritable"]), ['length', 'name', 'prototype'], globalThis["isWritable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isWritable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isWritable"]?.["prototype"]), true);
$assert.notCallable(globalThis["isWritable"]?.["prototype"]);
$assert.notConstructable(globalThis["isWritable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isWritable"]?.["prototype"]), ['constructor'], globalThis["isWritable"]?.["prototype"]);
$assert.sameValue(globalThis["isWritable"]?.["prototype"]?.["constructor"], globalThis["isWritable"]);
$verifyProperty(globalThis["isWritable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isWritable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isWritable"], "name", {
  value: "isWritable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isWritable"], "length", {
  value: 4.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["setFunc"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["setFunc"]), true);
$assert.callable(globalThis["setFunc"]);
$assert.constructable(globalThis["setFunc"]);
$assert.compareArray($Reflect_ownKeys(globalThis["setFunc"]), ['length', 'name', 'prototype'], globalThis["setFunc"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["setFunc"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["setFunc"]?.["prototype"]), true);
$assert.notCallable(globalThis["setFunc"]?.["prototype"]);
$assert.notConstructable(globalThis["setFunc"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["setFunc"]?.["prototype"]), ['constructor'], globalThis["setFunc"]?.["prototype"]);
$assert.sameValue(globalThis["setFunc"]?.["prototype"]?.["constructor"], globalThis["setFunc"]);
$verifyProperty(globalThis["setFunc"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["setFunc"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["setFunc"], "name", {
  value: "setFunc",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["setFunc"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyConfigurable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyConfigurable"]), true);
$assert.callable(globalThis["verifyConfigurable"]);
$assert.constructable(globalThis["verifyConfigurable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyConfigurable"]), ['length', 'name', 'prototype'], globalThis["verifyConfigurable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyConfigurable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyConfigurable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyConfigurable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyConfigurable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyConfigurable"]?.["prototype"]), ['constructor'], globalThis["verifyConfigurable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyConfigurable"]?.["prototype"]?.["constructor"], globalThis["verifyConfigurable"]);
$verifyProperty(globalThis["verifyConfigurable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyConfigurable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyConfigurable"], "name", {
  value: "verifyConfigurable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyConfigurable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEnumerable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEnumerable"]), true);
$assert.callable(globalThis["verifyEnumerable"]);
$assert.constructable(globalThis["verifyEnumerable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEnumerable"]), ['length', 'name', 'prototype'], globalThis["verifyEnumerable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEnumerable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEnumerable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyEnumerable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyEnumerable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEnumerable"]?.["prototype"]), ['constructor'], globalThis["verifyEnumerable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyEnumerable"]?.["prototype"]?.["constructor"], globalThis["verifyEnumerable"]);
$verifyProperty(globalThis["verifyEnumerable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEnumerable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyEnumerable"], "name", {
  value: "verifyEnumerable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEnumerable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEqualTo"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEqualTo"]), true);
$assert.callable(globalThis["verifyEqualTo"]);
$assert.constructable(globalThis["verifyEqualTo"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEqualTo"]), ['length', 'name', 'prototype'], globalThis["verifyEqualTo"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEqualTo"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEqualTo"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyEqualTo"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyEqualTo"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEqualTo"]?.["prototype"]), ['constructor'], globalThis["verifyEqualTo"]?.["prototype"]);
$assert.sameValue(globalThis["verifyEqualTo"]?.["prototype"]?.["constructor"], globalThis["verifyEqualTo"]);
$verifyProperty(globalThis["verifyEqualTo"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEqualTo"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyEqualTo"], "name", {
  value: "verifyEqualTo",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEqualTo"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotConfigurable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotConfigurable"]), true);
$assert.callable(globalThis["verifyNotConfigurable"]);
$assert.constructable(globalThis["verifyNotConfigurable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotConfigurable"]), ['length', 'name', 'prototype'], globalThis["verifyNotConfigurable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotConfigurable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotConfigurable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyNotConfigurable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyNotConfigurable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotConfigurable"]?.["prototype"]), ['constructor'], globalThis["verifyNotConfigurable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyNotConfigurable"]?.["prototype"]?.["constructor"], globalThis["verifyNotConfigurable"]);
$verifyProperty(globalThis["verifyNotConfigurable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotConfigurable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyNotConfigurable"], "name", {
  value: "verifyNotConfigurable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotConfigurable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotEnumerable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotEnumerable"]), true);
$assert.callable(globalThis["verifyNotEnumerable"]);
$assert.constructable(globalThis["verifyNotEnumerable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotEnumerable"]), ['length', 'name', 'prototype'], globalThis["verifyNotEnumerable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotEnumerable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotEnumerable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyNotEnumerable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyNotEnumerable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotEnumerable"]?.["prototype"]), ['constructor'], globalThis["verifyNotEnumerable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyNotEnumerable"]?.["prototype"]?.["constructor"], globalThis["verifyNotEnumerable"]);
$verifyProperty(globalThis["verifyNotEnumerable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotEnumerable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyNotEnumerable"], "name", {
  value: "verifyNotEnumerable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotEnumerable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotWritable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotWritable"]), true);
$assert.callable(globalThis["verifyNotWritable"]);
$assert.constructable(globalThis["verifyNotWritable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotWritable"]), ['length', 'name', 'prototype'], globalThis["verifyNotWritable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotWritable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotWritable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyNotWritable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyNotWritable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotWritable"]?.["prototype"]), ['constructor'], globalThis["verifyNotWritable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyNotWritable"]?.["prototype"]?.["constructor"], globalThis["verifyNotWritable"]);
$verifyProperty(globalThis["verifyNotWritable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotWritable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyNotWritable"], "name", {
  value: "verifyNotWritable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotWritable"], "length", {
  value: 4.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyProperty"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyProperty"]), true);
$assert.callable(globalThis["verifyProperty"]);
$assert.constructable(globalThis["verifyProperty"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyProperty"]), ['length', 'name', 'prototype'], globalThis["verifyProperty"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyProperty"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyProperty"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyProperty"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyProperty"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyProperty"]?.["prototype"]), ['constructor'], globalThis["verifyProperty"]?.["prototype"]);
$assert.sameValue(globalThis["verifyProperty"]?.["prototype"]?.["constructor"], globalThis["verifyProperty"]);
$verifyProperty(globalThis["verifyProperty"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyProperty"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyProperty"], "name", {
  value: "verifyProperty",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyProperty"], "length", {
  value: 4.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyWritable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyWritable"]), true);
$assert.callable(globalThis["verifyWritable"]);
$assert.constructable(globalThis["verifyWritable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyWritable"]), ['length', 'name', 'prototype'], globalThis["verifyWritable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyWritable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyWritable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyWritable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyWritable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyWritable"]?.["prototype"]), ['constructor'], globalThis["verifyWritable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyWritable"]?.["prototype"]?.["constructor"], globalThis["verifyWritable"]);
$verifyProperty(globalThis["verifyWritable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyWritable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyWritable"], "name", {
  value: "verifyWritable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyWritable"], "length", {
  value: 4.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
