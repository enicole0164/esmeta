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
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["c"])), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["c"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["c"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["c"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["c"])), ['constructor'], $Object_getPrototypeOf(globalThis["c"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["c"])?.["constructor"]), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["c"])?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["c"])?.["constructor"]);
$assert.constructable($Object_getPrototypeOf(globalThis["c"])?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["c"])?.["constructor"]), ['length', 'name', 'prototype', '$', '_', 'o', '℘', 'ZW_‌_NJ', 'ZW_‍_J'], $Object_getPrototypeOf(globalThis["c"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get, "name", {
  value: "get _",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "_", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get, "name", {
  value: "get ZW_‌_NJ",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‌_NJ", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get, "name", {
  value: "get ZW_‍_J",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "ZW_‍_J", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["c"])?.["constructor"]?.["prototype"], $Object_getPrototypeOf(globalThis["c"]));
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get, "name", {
  value: "get o",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "o", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get, "name", {
  value: "get ℘",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "℘", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get, "name", {
  value: "get $",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "$", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"])?.["constructor"], "name", {
  value: "C",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["c"]), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["c"]), true);
$assert.notCallable(globalThis["c"]);
$assert.notConstructable(globalThis["c"]);
$assert.compareArray($Reflect_ownKeys(globalThis["c"]), [], globalThis["c"]);
$assert.sameValue(C, $Object_getPrototypeOf(globalThis["c"])?.["constructor"]);
