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
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]), true);
$assert.notCallable(globalThis["calls"]);
$assert.notConstructable(globalThis["calls"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]), ['0', '1', '2', 'length'], globalThis["calls"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["1"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["1"]), true);
$assert.notCallable(globalThis["calls"]?.["1"]);
$assert.notConstructable(globalThis["calls"]?.["1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["1"]), ['args', 'thisArg'], globalThis["calls"]?.["1"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["1"]?.["args"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["1"]?.["args"]), true);
$assert.notCallable(globalThis["calls"]?.["1"]?.["args"]);
$assert.notConstructable(globalThis["calls"]?.["1"]?.["args"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["1"]?.["args"]), ['0', '1', 'length', 'callee', Symbol.iterator], globalThis["calls"]?.["1"]?.["args"]);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["1"]?.["args"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["1"]?.["args"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["calls"]?.["1"]?.["args"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["calls"]?.["1"]?.["args"], "length", {
  value: 2.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["1"]?.["args"], "0", {
  value: 42.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["1"]?.["args"], "1", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["calls"]?.["1"]?.["args"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["calls"]?.["1"]?.["args"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["1"], "args", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["1"], "thisArg", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"], "1", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["2"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["2"]), true);
$assert.notCallable(globalThis["calls"]?.["2"]);
$assert.notConstructable(globalThis["calls"]?.["2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["2"]), ['args', 'thisArg'], globalThis["calls"]?.["2"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["2"]?.["args"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["2"]?.["args"]), true);
$assert.notCallable(globalThis["calls"]?.["2"]?.["args"]);
$assert.notConstructable(globalThis["calls"]?.["2"]?.["args"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["2"]?.["args"]), ['0', '1', 'length', 'callee', Symbol.iterator], globalThis["calls"]?.["2"]?.["args"]);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["2"]?.["args"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["2"]?.["args"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["calls"]?.["2"]?.["args"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["calls"]?.["2"]?.["args"], "length", {
  value: 2.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["2"]?.["args"], "0", {
  value: 43.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["2"]?.["args"], "1", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["calls"]?.["2"]?.["args"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["calls"]?.["2"]?.["args"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["2"], "args", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["2"], "thisArg", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"], "2", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"], "length", {
  value: 3.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["0"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["0"]), true);
$assert.notCallable(globalThis["calls"]?.["0"]);
$assert.notConstructable(globalThis["calls"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["0"]), ['args', 'thisArg'], globalThis["calls"]?.["0"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["calls"]?.["0"]?.["args"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["calls"]?.["0"]?.["args"]), true);
$assert.notCallable(globalThis["calls"]?.["0"]?.["args"]);
$assert.notConstructable(globalThis["calls"]?.["0"]?.["args"]);
$assert.compareArray($Reflect_ownKeys(globalThis["calls"]?.["0"]?.["args"]), ['0', '1', 'length', 'callee', Symbol.iterator], globalThis["calls"]?.["0"]?.["args"]);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["0"]?.["args"], "callee")?.get, ThrowTypeError);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["calls"]?.["0"]?.["args"], "callee")?.set, ThrowTypeError);
$verifyProperty(globalThis["calls"]?.["0"]?.["args"], "callee", {
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["calls"]?.["0"]?.["args"], "length", {
  value: 2.0,
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["0"]?.["args"], "0", {
  value: 41.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["0"]?.["args"], "1", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["calls"]?.["0"]?.["args"]?.[Symbol.iterator], Array.prototype.values);
$verifyProperty(globalThis["calls"]?.["0"]?.["args"], Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["0"], "args", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"]?.["0"], "thisArg", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["calls"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["list"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["list"]), true);
$assert.notCallable(globalThis["list"]);
$assert.notConstructable(globalThis["list"]);
$assert.compareArray($Reflect_ownKeys(globalThis["list"]), ['0', '1', '2', 'length'], globalThis["list"]);
$verifyProperty(globalThis["list"], "1", {
  value: 42.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["list"], "2", {
  value: 43.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["list"], "length", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["list"], "0", {
  value: 41.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["mapFn"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["mapFn"]), true);
$assert.callable(globalThis["mapFn"]);
$assert.constructable(globalThis["mapFn"]);
$assert.compareArray($Reflect_ownKeys(globalThis["mapFn"]), ['length', 'name', 'prototype'], globalThis["mapFn"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["mapFn"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["mapFn"]?.["prototype"]), true);
$assert.notCallable(globalThis["mapFn"]?.["prototype"]);
$assert.notConstructable(globalThis["mapFn"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["mapFn"]?.["prototype"]), ['constructor'], globalThis["mapFn"]?.["prototype"]);
$assert.sameValue(globalThis["mapFn"]?.["prototype"]?.["constructor"], globalThis["mapFn"]);
$verifyProperty(globalThis["mapFn"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["mapFn"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["mapFn"], "name", {
  value: "mapFn",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["mapFn"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["result"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["result"]), true);
$assert.notCallable(globalThis["result"]);
$assert.notConstructable(globalThis["result"]);
$assert.compareArray($Reflect_ownKeys(globalThis["result"]), ['0', '1', '2', 'length'], globalThis["result"]);
$verifyProperty(globalThis["result"], "1", {
  value: 84.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["result"], "2", {
  value: 86.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["result"], "length", {
  value: 3.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["result"], "0", {
  value: 82.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
