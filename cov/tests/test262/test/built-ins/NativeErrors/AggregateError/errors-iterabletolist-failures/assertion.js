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
$assert.sameValue($Object_getPrototypeOf(globalThis["case1"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case1"]), true);
$assert.notCallable(globalThis["case1"]);
$assert.notConstructable(globalThis["case1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case1"]), [Symbol.iterator], globalThis["case1"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get, "name", {
  value: "get [Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["case1"], Symbol.iterator)?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case1"], Symbol.iterator, {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case10"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case10"]), true);
$assert.notCallable(globalThis["case10"]);
$assert.notConstructable(globalThis["case10"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case10"]), [Symbol.iterator], globalThis["case10"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case10"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case10"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case10"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case10"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case10"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case10"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case10"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case10"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case10"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case11"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case11"]), true);
$assert.notCallable(globalThis["case11"]);
$assert.notConstructable(globalThis["case11"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case11"]), [Symbol.iterator], globalThis["case11"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case11"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case11"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case11"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case11"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case11"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case11"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case11"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case11"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case11"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case2"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case2"]), true);
$assert.notCallable(globalThis["case2"]);
$assert.notConstructable(globalThis["case2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case2"]), [Symbol.iterator], globalThis["case2"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get, "name", {
  value: "get [Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["case2"], Symbol.iterator)?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case2"], Symbol.iterator, {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case3"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case3"]), true);
$assert.notCallable(globalThis["case3"]);
$assert.notConstructable(globalThis["case3"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case3"]), [Symbol.iterator], globalThis["case3"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case3"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case3"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case3"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case3"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case3"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case3"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case3"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case3"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case3"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case4"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case4"]), true);
$assert.notCallable(globalThis["case4"]);
$assert.notConstructable(globalThis["case4"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case4"]), [Symbol.iterator], globalThis["case4"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case4"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case4"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case4"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case4"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case4"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case4"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case4"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case4"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case4"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case5"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case5"]), true);
$assert.notCallable(globalThis["case5"]);
$assert.notConstructable(globalThis["case5"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case5"]), [Symbol.iterator], globalThis["case5"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case5"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case5"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case5"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case5"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case5"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case5"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case5"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case5"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case5"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case6"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case6"]), true);
$assert.notCallable(globalThis["case6"]);
$assert.notConstructable(globalThis["case6"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case6"]), [Symbol.iterator], globalThis["case6"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case6"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case6"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case6"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case6"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case6"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case6"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case6"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case6"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case6"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case7"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case7"]), true);
$assert.notCallable(globalThis["case7"]);
$assert.notConstructable(globalThis["case7"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case7"]), [Symbol.iterator], globalThis["case7"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case7"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case7"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case7"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case7"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case7"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case7"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case7"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case7"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case7"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case8"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case8"]), true);
$assert.notCallable(globalThis["case8"]);
$assert.notConstructable(globalThis["case8"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case8"]), [Symbol.iterator], globalThis["case8"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case8"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case8"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case8"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case8"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case8"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case8"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case8"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case8"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case8"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["case9"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case9"]), true);
$assert.notCallable(globalThis["case9"]);
$assert.notConstructable(globalThis["case9"]);
$assert.compareArray($Reflect_ownKeys(globalThis["case9"]), [Symbol.iterator], globalThis["case9"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["case9"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["case9"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["case9"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["case9"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["case9"]?.[Symbol.iterator]), ['length', 'name'], globalThis["case9"]?.[Symbol.iterator]);
$verifyProperty(globalThis["case9"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case9"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["case9"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
