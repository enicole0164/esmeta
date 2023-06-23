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
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]), true);
$assert.notCallable(globalThis["myobj1"]);
$assert.notConstructable(globalThis["myobj1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]), ['ToNumber', 'toString', 'valueOf'], globalThis["myobj1"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["toString"]), true);
$assert.callable(globalThis["myobj1"]?.["toString"]);
$assert.constructable(globalThis["myobj1"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["myobj1"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj1"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj1"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["myobj1"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["myobj1"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["myobj1"]?.["toString"]);
$verifyProperty(globalThis["myobj1"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj1"]?.["toString"], "name", {
  value: "toString",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["ToNumber"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["ToNumber"]), true);
$assert.callable(globalThis["myobj1"]?.["ToNumber"]);
$assert.constructable(globalThis["myobj1"]?.["ToNumber"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["ToNumber"]), ['length', 'name', 'prototype'], globalThis["myobj1"]?.["ToNumber"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]), ['constructor'], globalThis["myobj1"]?.["ToNumber"]?.["prototype"]);
$assert.sameValue(globalThis["myobj1"]?.["ToNumber"]?.["prototype"]?.["constructor"], globalThis["myobj1"]?.["ToNumber"]);
$verifyProperty(globalThis["myobj1"]?.["ToNumber"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["ToNumber"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj1"]?.["ToNumber"], "name", {
  value: "ToNumber",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["ToNumber"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"], "ToNumber", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["valueOf"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["valueOf"]), true);
$assert.callable(globalThis["myobj1"]?.["valueOf"]);
$assert.constructable(globalThis["myobj1"]?.["valueOf"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["valueOf"]), ['length', 'name', 'prototype'], globalThis["myobj1"]?.["valueOf"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj1"]?.["valueOf"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj1"]?.["valueOf"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj1"]?.["valueOf"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj1"]?.["valueOf"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj1"]?.["valueOf"]?.["prototype"]), ['constructor'], globalThis["myobj1"]?.["valueOf"]?.["prototype"]);
$assert.sameValue(globalThis["myobj1"]?.["valueOf"]?.["prototype"]?.["constructor"], globalThis["myobj1"]?.["valueOf"]);
$verifyProperty(globalThis["myobj1"]?.["valueOf"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["valueOf"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj1"]?.["valueOf"], "name", {
  value: "valueOf",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"]?.["valueOf"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj1"], "valueOf", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]), true);
$assert.notCallable(globalThis["myobj2"]);
$assert.notConstructable(globalThis["myobj2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]), ['ToNumber', 'toString', 'valueOf'], globalThis["myobj2"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["toString"]), true);
$assert.callable(globalThis["myobj2"]?.["toString"]);
$assert.constructable(globalThis["myobj2"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["myobj2"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj2"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj2"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["myobj2"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["myobj2"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["myobj2"]?.["toString"]);
$verifyProperty(globalThis["myobj2"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj2"]?.["toString"], "name", {
  value: "toString",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["ToNumber"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["ToNumber"]), true);
$assert.callable(globalThis["myobj2"]?.["ToNumber"]);
$assert.constructable(globalThis["myobj2"]?.["ToNumber"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["ToNumber"]), ['length', 'name', 'prototype'], globalThis["myobj2"]?.["ToNumber"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]), ['constructor'], globalThis["myobj2"]?.["ToNumber"]?.["prototype"]);
$assert.sameValue(globalThis["myobj2"]?.["ToNumber"]?.["prototype"]?.["constructor"], globalThis["myobj2"]?.["ToNumber"]);
$verifyProperty(globalThis["myobj2"]?.["ToNumber"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["ToNumber"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj2"]?.["ToNumber"], "name", {
  value: "ToNumber",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["ToNumber"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"], "ToNumber", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["valueOf"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["valueOf"]), true);
$assert.callable(globalThis["myobj2"]?.["valueOf"]);
$assert.constructable(globalThis["myobj2"]?.["valueOf"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["valueOf"]), ['length', 'name', 'prototype'], globalThis["myobj2"]?.["valueOf"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj2"]?.["valueOf"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj2"]?.["valueOf"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj2"]?.["valueOf"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj2"]?.["valueOf"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj2"]?.["valueOf"]?.["prototype"]), ['constructor'], globalThis["myobj2"]?.["valueOf"]?.["prototype"]);
$assert.sameValue(globalThis["myobj2"]?.["valueOf"]?.["prototype"]?.["constructor"], globalThis["myobj2"]?.["valueOf"]);
$verifyProperty(globalThis["myobj2"]?.["valueOf"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["valueOf"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj2"]?.["valueOf"], "name", {
  value: "valueOf",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"]?.["valueOf"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj2"], "valueOf", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj3"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj3"]), true);
$assert.notCallable(globalThis["myobj3"]);
$assert.notConstructable(globalThis["myobj3"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj3"]), ['ToNumber', 'toString'], globalThis["myobj3"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj3"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj3"]?.["toString"]), true);
$assert.callable(globalThis["myobj3"]?.["toString"]);
$assert.constructable(globalThis["myobj3"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj3"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["myobj3"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj3"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj3"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj3"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj3"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj3"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["myobj3"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["myobj3"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["myobj3"]?.["toString"]);
$verifyProperty(globalThis["myobj3"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj3"]?.["toString"], "name", {
  value: "toString",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj3"]?.["ToNumber"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj3"]?.["ToNumber"]), true);
$assert.callable(globalThis["myobj3"]?.["ToNumber"]);
$assert.constructable(globalThis["myobj3"]?.["ToNumber"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj3"]?.["ToNumber"]), ['length', 'name', 'prototype'], globalThis["myobj3"]?.["ToNumber"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]), ['constructor'], globalThis["myobj3"]?.["ToNumber"]?.["prototype"]);
$assert.sameValue(globalThis["myobj3"]?.["ToNumber"]?.["prototype"]?.["constructor"], globalThis["myobj3"]?.["ToNumber"]);
$verifyProperty(globalThis["myobj3"]?.["ToNumber"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"]?.["ToNumber"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj3"]?.["ToNumber"], "name", {
  value: "ToNumber",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"]?.["ToNumber"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj3"], "ToNumber", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj4"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj4"]), true);
$assert.notCallable(globalThis["myobj4"]);
$assert.notConstructable(globalThis["myobj4"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj4"]), ['ToNumber', 'toString'], globalThis["myobj4"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj4"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj4"]?.["toString"]), true);
$assert.callable(globalThis["myobj4"]?.["toString"]);
$assert.constructable(globalThis["myobj4"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj4"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["myobj4"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj4"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj4"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj4"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj4"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj4"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["myobj4"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["myobj4"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["myobj4"]?.["toString"]);
$verifyProperty(globalThis["myobj4"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj4"]?.["toString"], "name", {
  value: "toString",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj4"]?.["ToNumber"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj4"]?.["ToNumber"]), true);
$assert.callable(globalThis["myobj4"]?.["ToNumber"]);
$assert.constructable(globalThis["myobj4"]?.["ToNumber"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj4"]?.["ToNumber"]), ['length', 'name', 'prototype'], globalThis["myobj4"]?.["ToNumber"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]), ['constructor'], globalThis["myobj4"]?.["ToNumber"]?.["prototype"]);
$assert.sameValue(globalThis["myobj4"]?.["ToNumber"]?.["prototype"]?.["constructor"], globalThis["myobj4"]?.["ToNumber"]);
$verifyProperty(globalThis["myobj4"]?.["ToNumber"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"]?.["ToNumber"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj4"]?.["ToNumber"], "name", {
  value: "ToNumber",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"]?.["ToNumber"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj4"], "ToNumber", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj5"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj5"]), true);
$assert.notCallable(globalThis["myobj5"]);
$assert.notConstructable(globalThis["myobj5"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj5"]), ['ToNumber'], globalThis["myobj5"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj5"]?.["ToNumber"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj5"]?.["ToNumber"]), true);
$assert.callable(globalThis["myobj5"]?.["ToNumber"]);
$assert.constructable(globalThis["myobj5"]?.["ToNumber"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj5"]?.["ToNumber"]), ['length', 'name', 'prototype'], globalThis["myobj5"]?.["ToNumber"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]), true);
$assert.notCallable(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]);
$assert.notConstructable(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]), ['constructor'], globalThis["myobj5"]?.["ToNumber"]?.["prototype"]);
$assert.sameValue(globalThis["myobj5"]?.["ToNumber"]?.["prototype"]?.["constructor"], globalThis["myobj5"]?.["ToNumber"]);
$verifyProperty(globalThis["myobj5"]?.["ToNumber"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj5"]?.["ToNumber"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["myobj5"]?.["ToNumber"], "name", {
  value: "ToNumber",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj5"]?.["ToNumber"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["myobj5"], "ToNumber", {
  writable: true,
  enumerable: true,
  configurable: true,
});
