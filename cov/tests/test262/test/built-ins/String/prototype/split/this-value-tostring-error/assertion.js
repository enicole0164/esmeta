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
$assert.sameValue($Object_getPrototypeOf(globalThis["ExpectedError"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["ExpectedError"]), true);
$assert.callable(globalThis["ExpectedError"]);
$assert.constructable(globalThis["ExpectedError"]);
$assert.compareArray($Reflect_ownKeys(globalThis["ExpectedError"]), ['length', 'name', 'prototype'], globalThis["ExpectedError"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["ExpectedError"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["ExpectedError"]?.["prototype"]), true);
$assert.notCallable(globalThis["ExpectedError"]?.["prototype"]);
$assert.notConstructable(globalThis["ExpectedError"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["ExpectedError"]?.["prototype"]), ['constructor', 'toString'], globalThis["ExpectedError"]?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["ExpectedError"]?.["prototype"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["ExpectedError"]?.["prototype"]?.["toString"]), true);
$assert.callable(globalThis["ExpectedError"]?.["prototype"]?.["toString"]);
$assert.constructable(globalThis["ExpectedError"]?.["prototype"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["ExpectedError"]?.["prototype"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["ExpectedError"]?.["prototype"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["ExpectedError"]?.["prototype"]?.["toString"]);
$verifyProperty(globalThis["ExpectedError"]?.["prototype"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["ExpectedError"]?.["prototype"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["ExpectedError"]?.["prototype"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["ExpectedError"]?.["prototype"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["ExpectedError"]?.["prototype"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["ExpectedError"]?.["prototype"]?.["constructor"], globalThis["ExpectedError"]);
$verifyProperty(globalThis["ExpectedError"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["ExpectedError"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["ExpectedError"], "name", {
  value: "ExpectedError",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["ExpectedError"], "length", {
  value: 1.0,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableReceiver"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableReceiver"]), true);
$assert.notCallable(globalThis["nonStringableReceiver"]);
$assert.notConstructable(globalThis["nonStringableReceiver"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableReceiver"]), ['toString'], globalThis["nonStringableReceiver"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableReceiver"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableReceiver"]?.["toString"]), true);
$assert.callable(globalThis["nonStringableReceiver"]?.["toString"]);
$assert.constructable(globalThis["nonStringableReceiver"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableReceiver"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["nonStringableReceiver"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["nonStringableReceiver"]?.["toString"]);
$verifyProperty(globalThis["nonStringableReceiver"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableReceiver"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["nonStringableReceiver"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableReceiver"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableReceiver"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]), true);
$assert.notCallable(globalThis["nonStringableSeparator"]);
$assert.notConstructable(globalThis["nonStringableSeparator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]), ['toString', 'valueOf', Symbol.toPrimitive], globalThis["nonStringableSeparator"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.["toString"]), true);
$assert.callable(globalThis["nonStringableSeparator"]?.["toString"]);
$assert.constructable(globalThis["nonStringableSeparator"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["nonStringableSeparator"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["nonStringableSeparator"]?.["toString"]);
$verifyProperty(globalThis["nonStringableSeparator"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]), true);
$assert.callable(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]);
$assert.constructable(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]), ['length', 'name', 'prototype'], globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]), true);
$assert.notCallable(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]);
$assert.notConstructable(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]), ['constructor'], globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]);
$assert.sameValue(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"]?.["constructor"], globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]);
$verifyProperty(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.[Symbol.toPrimitive], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"], Symbol.toPrimitive, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.["valueOf"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.["valueOf"]), true);
$assert.callable(globalThis["nonStringableSeparator"]?.["valueOf"]);
$assert.constructable(globalThis["nonStringableSeparator"]?.["valueOf"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.["valueOf"]), ['length', 'name', 'prototype'], globalThis["nonStringableSeparator"]?.["valueOf"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]), true);
$assert.notCallable(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]);
$assert.notConstructable(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]), ['constructor'], globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]);
$assert.sameValue(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"]?.["constructor"], globalThis["nonStringableSeparator"]?.["valueOf"]);
$verifyProperty(globalThis["nonStringableSeparator"]?.["valueOf"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["valueOf"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["valueOf"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"]?.["valueOf"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["nonStringableSeparator"], "valueOf", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["split"], String.prototype.split);
$assert.sameValue($Object_getPrototypeOf(globalThis["splitter"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["splitter"]), true);
$assert.notCallable(globalThis["splitter"]);
$assert.notConstructable(globalThis["splitter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["splitter"]), [Symbol.split], globalThis["splitter"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["splitter"]?.[Symbol.split]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["splitter"]?.[Symbol.split]), true);
$assert.callable(globalThis["splitter"]?.[Symbol.split]);
$assert.constructable(globalThis["splitter"]?.[Symbol.split]);
$assert.compareArray($Reflect_ownKeys(globalThis["splitter"]?.[Symbol.split]), ['length', 'name', 'prototype'], globalThis["splitter"]?.[Symbol.split]);
$assert.sameValue($Object_getPrototypeOf(globalThis["splitter"]?.[Symbol.split]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["splitter"]?.[Symbol.split]?.["prototype"]), true);
$assert.notCallable(globalThis["splitter"]?.[Symbol.split]?.["prototype"]);
$assert.notConstructable(globalThis["splitter"]?.[Symbol.split]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["splitter"]?.[Symbol.split]?.["prototype"]), ['constructor'], globalThis["splitter"]?.[Symbol.split]?.["prototype"]);
$assert.sameValue(globalThis["splitter"]?.[Symbol.split]?.["prototype"]?.["constructor"], globalThis["splitter"]?.[Symbol.split]);
$verifyProperty(globalThis["splitter"]?.[Symbol.split]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["splitter"]?.[Symbol.split], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["splitter"]?.[Symbol.split], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["splitter"]?.[Symbol.split], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["splitter"], Symbol.split, {
  writable: true,
  enumerable: true,
  configurable: true,
});
