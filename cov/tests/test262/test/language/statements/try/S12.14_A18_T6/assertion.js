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
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]), true);
$assert.notCallable(globalThis["myObj"]);
$assert.notConstructable(globalThis["myObj"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]), ['p1', 'p2', 'p3', 'value', 'valueOf', 'parseInt', 'NaN', 'Infinity', 'eval', 'parseFloat', 'isNaN', 'isFinite', 'i'], globalThis["myObj"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["parseInt"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["parseInt"]), true);
$assert.callable(globalThis["myObj"]?.["parseInt"]);
$assert.constructable(globalThis["myObj"]?.["parseInt"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["parseInt"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["parseInt"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["parseInt"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["parseInt"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["parseInt"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["parseInt"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["parseInt"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["parseInt"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["parseInt"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["parseInt"]);
$verifyProperty(globalThis["myObj"]?.["parseInt"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["parseInt"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["parseInt"], "name", {
  value: "parseInt",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["parseInt"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "parseInt", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "p3", {
  value: "c",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["isFinite"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["isFinite"]), true);
$assert.callable(globalThis["myObj"]?.["isFinite"]);
$assert.constructable(globalThis["myObj"]?.["isFinite"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["isFinite"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["isFinite"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["isFinite"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["isFinite"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["isFinite"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["isFinite"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["isFinite"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["isFinite"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["isFinite"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["isFinite"]);
$verifyProperty(globalThis["myObj"]?.["isFinite"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["isFinite"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["isFinite"], "name", {
  value: "isFinite",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["isFinite"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "isFinite", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "i", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["eval"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["eval"]), true);
$assert.callable(globalThis["myObj"]?.["eval"]);
$assert.constructable(globalThis["myObj"]?.["eval"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["eval"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["eval"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["eval"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["eval"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["eval"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["eval"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["eval"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["eval"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["eval"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["eval"]);
$verifyProperty(globalThis["myObj"]?.["eval"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["eval"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["eval"], "name", {
  value: "eval",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["eval"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "eval", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["valueOf"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["valueOf"]), true);
$assert.callable(globalThis["myObj"]?.["valueOf"]);
$assert.constructable(globalThis["myObj"]?.["valueOf"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["valueOf"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["valueOf"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["valueOf"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["valueOf"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["valueOf"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["valueOf"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["valueOf"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["valueOf"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["valueOf"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["valueOf"]);
$verifyProperty(globalThis["myObj"]?.["valueOf"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["valueOf"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["valueOf"], "name", {
  value: "valueOf",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["valueOf"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "valueOf", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "NaN", {
  value: "obj_NaN",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["isNaN"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["isNaN"]), true);
$assert.callable(globalThis["myObj"]?.["isNaN"]);
$assert.constructable(globalThis["myObj"]?.["isNaN"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["isNaN"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["isNaN"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["isNaN"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["isNaN"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["isNaN"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["isNaN"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["isNaN"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["isNaN"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["isNaN"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["isNaN"]);
$verifyProperty(globalThis["myObj"]?.["isNaN"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["isNaN"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["isNaN"], "name", {
  value: "isNaN",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["isNaN"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "isNaN", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "Infinity", {
  value: "obj_Infinity",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "p2", {
  value: "b",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "p1", {
  value: "a",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["parseFloat"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["parseFloat"]), true);
$assert.callable(globalThis["myObj"]?.["parseFloat"]);
$assert.constructable(globalThis["myObj"]?.["parseFloat"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["parseFloat"]), ['length', 'name', 'prototype'], globalThis["myObj"]?.["parseFloat"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myObj"]?.["parseFloat"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myObj"]?.["parseFloat"]?.["prototype"]), true);
$assert.notCallable(globalThis["myObj"]?.["parseFloat"]?.["prototype"]);
$assert.notConstructable(globalThis["myObj"]?.["parseFloat"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myObj"]?.["parseFloat"]?.["prototype"]), ['constructor'], globalThis["myObj"]?.["parseFloat"]?.["prototype"]);
$assert.sameValue(globalThis["myObj"]?.["parseFloat"]?.["prototype"]?.["constructor"], globalThis["myObj"]?.["parseFloat"]);
$verifyProperty(globalThis["myObj"]?.["parseFloat"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["parseFloat"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myObj"]?.["parseFloat"], "name", {
  value: "parseFloat",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"]?.["parseFloat"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "parseFloat", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["myObj"], "value", {
  value: "myObj_value",
  writable: true,
  enumerable: true,
  configurable: true,
});
