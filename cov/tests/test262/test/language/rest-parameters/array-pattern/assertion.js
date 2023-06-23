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
$assert.sameValue($Object_getPrototypeOf(globalThis["empty"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["empty"]), true);
$assert.callable(globalThis["empty"]);
$assert.constructable(globalThis["empty"]);
$assert.compareArray($Reflect_ownKeys(globalThis["empty"]), ['length', 'name', 'prototype'], globalThis["empty"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["empty"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["empty"]?.["prototype"]), true);
$assert.notCallable(globalThis["empty"]?.["prototype"]);
$assert.notConstructable(globalThis["empty"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["empty"]?.["prototype"]), ['constructor'], globalThis["empty"]?.["prototype"]);
$assert.sameValue(globalThis["empty"]?.["prototype"]?.["constructor"], globalThis["empty"]);
$verifyProperty(globalThis["empty"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["empty"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["empty"], "name", {
  value: "empty",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["empty"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithArray"]), true);
$assert.callable(globalThis["emptyWithArray"]);
$assert.constructable(globalThis["emptyWithArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithArray"]), ['length', 'name', 'prototype'], globalThis["emptyWithArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["emptyWithArray"]?.["prototype"]);
$assert.notConstructable(globalThis["emptyWithArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithArray"]?.["prototype"]), ['constructor'], globalThis["emptyWithArray"]?.["prototype"]);
$assert.sameValue(globalThis["emptyWithArray"]?.["prototype"]?.["constructor"], globalThis["emptyWithArray"]);
$verifyProperty(globalThis["emptyWithArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["emptyWithArray"], "name", {
  value: "emptyWithArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithArray"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithLeading"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithLeading"]), true);
$assert.callable(globalThis["emptyWithLeading"]);
$assert.constructable(globalThis["emptyWithLeading"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithLeading"]), ['length', 'name', 'prototype'], globalThis["emptyWithLeading"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithLeading"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithLeading"]?.["prototype"]), true);
$assert.notCallable(globalThis["emptyWithLeading"]?.["prototype"]);
$assert.notConstructable(globalThis["emptyWithLeading"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithLeading"]?.["prototype"]), ['constructor'], globalThis["emptyWithLeading"]?.["prototype"]);
$assert.sameValue(globalThis["emptyWithLeading"]?.["prototype"]?.["constructor"], globalThis["emptyWithLeading"]);
$verifyProperty(globalThis["emptyWithLeading"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithLeading"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["emptyWithLeading"], "name", {
  value: "emptyWithLeading",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithLeading"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithObject"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithObject"]), true);
$assert.callable(globalThis["emptyWithObject"]);
$assert.constructable(globalThis["emptyWithObject"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithObject"]), ['length', 'name', 'prototype'], globalThis["emptyWithObject"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithObject"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithObject"]?.["prototype"]), true);
$assert.notCallable(globalThis["emptyWithObject"]?.["prototype"]);
$assert.notConstructable(globalThis["emptyWithObject"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithObject"]?.["prototype"]), ['constructor'], globalThis["emptyWithObject"]?.["prototype"]);
$assert.sameValue(globalThis["emptyWithObject"]?.["prototype"]?.["constructor"], globalThis["emptyWithObject"]);
$verifyProperty(globalThis["emptyWithObject"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithObject"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["emptyWithObject"], "name", {
  value: "emptyWithObject",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithObject"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithRest"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithRest"]), true);
$assert.callable(globalThis["emptyWithRest"]);
$assert.constructable(globalThis["emptyWithRest"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithRest"]), ['length', 'name', 'prototype'], globalThis["emptyWithRest"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["emptyWithRest"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["emptyWithRest"]?.["prototype"]), true);
$assert.notCallable(globalThis["emptyWithRest"]?.["prototype"]);
$assert.notConstructable(globalThis["emptyWithRest"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["emptyWithRest"]?.["prototype"]), ['constructor'], globalThis["emptyWithRest"]?.["prototype"]);
$assert.sameValue(globalThis["emptyWithRest"]?.["prototype"]?.["constructor"], globalThis["emptyWithRest"]);
$verifyProperty(globalThis["emptyWithRest"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithRest"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["emptyWithRest"], "name", {
  value: "emptyWithRest",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["emptyWithRest"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElement"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElement"]), true);
$assert.callable(globalThis["multiElement"]);
$assert.constructable(globalThis["multiElement"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElement"]), ['length', 'name', 'prototype'], globalThis["multiElement"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElement"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElement"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElement"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElement"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElement"]?.["prototype"]), ['constructor'], globalThis["multiElement"]?.["prototype"]);
$assert.sameValue(globalThis["multiElement"]?.["prototype"]?.["constructor"], globalThis["multiElement"]);
$verifyProperty(globalThis["multiElement"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElement"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElement"], "name", {
  value: "multiElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElement"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithArray"]), true);
$assert.callable(globalThis["multiElementWithArray"]);
$assert.constructable(globalThis["multiElementWithArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithArray"]), ['length', 'name', 'prototype'], globalThis["multiElementWithArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElementWithArray"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElementWithArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithArray"]?.["prototype"]), ['constructor'], globalThis["multiElementWithArray"]?.["prototype"]);
$assert.sameValue(globalThis["multiElementWithArray"]?.["prototype"]?.["constructor"], globalThis["multiElementWithArray"]);
$verifyProperty(globalThis["multiElementWithArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElementWithArray"], "name", {
  value: "multiElementWithArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithArray"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithInitializer"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithInitializer"]), true);
$assert.callable(globalThis["multiElementWithInitializer"]);
$assert.constructable(globalThis["multiElementWithInitializer"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithInitializer"]), ['length', 'name', 'prototype'], globalThis["multiElementWithInitializer"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithInitializer"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithInitializer"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElementWithInitializer"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElementWithInitializer"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithInitializer"]?.["prototype"]), ['constructor'], globalThis["multiElementWithInitializer"]?.["prototype"]);
$assert.sameValue(globalThis["multiElementWithInitializer"]?.["prototype"]?.["constructor"], globalThis["multiElementWithInitializer"]);
$verifyProperty(globalThis["multiElementWithInitializer"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithInitializer"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElementWithInitializer"], "name", {
  value: "multiElementWithInitializer",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithInitializer"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithLeading"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithLeading"]), true);
$assert.callable(globalThis["multiElementWithLeading"]);
$assert.constructable(globalThis["multiElementWithLeading"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithLeading"]), ['length', 'name', 'prototype'], globalThis["multiElementWithLeading"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithLeading"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithLeading"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElementWithLeading"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElementWithLeading"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithLeading"]?.["prototype"]), ['constructor'], globalThis["multiElementWithLeading"]?.["prototype"]);
$assert.sameValue(globalThis["multiElementWithLeading"]?.["prototype"]?.["constructor"], globalThis["multiElementWithLeading"]);
$verifyProperty(globalThis["multiElementWithLeading"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithLeading"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElementWithLeading"], "name", {
  value: "multiElementWithLeading",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithLeading"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithObject"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithObject"]), true);
$assert.callable(globalThis["multiElementWithObject"]);
$assert.constructable(globalThis["multiElementWithObject"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithObject"]), ['length', 'name', 'prototype'], globalThis["multiElementWithObject"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithObject"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithObject"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElementWithObject"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElementWithObject"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithObject"]?.["prototype"]), ['constructor'], globalThis["multiElementWithObject"]?.["prototype"]);
$assert.sameValue(globalThis["multiElementWithObject"]?.["prototype"]?.["constructor"], globalThis["multiElementWithObject"]);
$verifyProperty(globalThis["multiElementWithObject"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithObject"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElementWithObject"], "name", {
  value: "multiElementWithObject",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithObject"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithRest"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithRest"]), true);
$assert.callable(globalThis["multiElementWithRest"]);
$assert.constructable(globalThis["multiElementWithRest"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithRest"]), ['length', 'name', 'prototype'], globalThis["multiElementWithRest"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["multiElementWithRest"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["multiElementWithRest"]?.["prototype"]), true);
$assert.notCallable(globalThis["multiElementWithRest"]?.["prototype"]);
$assert.notConstructable(globalThis["multiElementWithRest"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["multiElementWithRest"]?.["prototype"]), ['constructor'], globalThis["multiElementWithRest"]?.["prototype"]);
$assert.sameValue(globalThis["multiElementWithRest"]?.["prototype"]?.["constructor"], globalThis["multiElementWithRest"]);
$verifyProperty(globalThis["multiElementWithRest"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithRest"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["multiElementWithRest"], "name", {
  value: "multiElementWithRest",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["multiElementWithRest"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElement"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElement"]), true);
$assert.callable(globalThis["singleElement"]);
$assert.constructable(globalThis["singleElement"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElement"]), ['length', 'name', 'prototype'], globalThis["singleElement"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElement"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElement"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElement"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElement"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElement"]?.["prototype"]), ['constructor'], globalThis["singleElement"]?.["prototype"]);
$assert.sameValue(globalThis["singleElement"]?.["prototype"]?.["constructor"], globalThis["singleElement"]);
$verifyProperty(globalThis["singleElement"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElement"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElement"], "name", {
  value: "singleElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElement"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithArray"]), true);
$assert.callable(globalThis["singleElementWithArray"]);
$assert.constructable(globalThis["singleElementWithArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithArray"]), ['length', 'name', 'prototype'], globalThis["singleElementWithArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElementWithArray"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElementWithArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithArray"]?.["prototype"]), ['constructor'], globalThis["singleElementWithArray"]?.["prototype"]);
$assert.sameValue(globalThis["singleElementWithArray"]?.["prototype"]?.["constructor"], globalThis["singleElementWithArray"]);
$verifyProperty(globalThis["singleElementWithArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElementWithArray"], "name", {
  value: "singleElementWithArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithArray"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithInitializer"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithInitializer"]), true);
$assert.callable(globalThis["singleElementWithInitializer"]);
$assert.constructable(globalThis["singleElementWithInitializer"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithInitializer"]), ['length', 'name', 'prototype'], globalThis["singleElementWithInitializer"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithInitializer"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithInitializer"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElementWithInitializer"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElementWithInitializer"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithInitializer"]?.["prototype"]), ['constructor'], globalThis["singleElementWithInitializer"]?.["prototype"]);
$assert.sameValue(globalThis["singleElementWithInitializer"]?.["prototype"]?.["constructor"], globalThis["singleElementWithInitializer"]);
$verifyProperty(globalThis["singleElementWithInitializer"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithInitializer"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElementWithInitializer"], "name", {
  value: "singleElementWithInitializer",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithInitializer"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithLeading"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithLeading"]), true);
$assert.callable(globalThis["singleElementWithLeading"]);
$assert.constructable(globalThis["singleElementWithLeading"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithLeading"]), ['length', 'name', 'prototype'], globalThis["singleElementWithLeading"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithLeading"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithLeading"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElementWithLeading"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElementWithLeading"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithLeading"]?.["prototype"]), ['constructor'], globalThis["singleElementWithLeading"]?.["prototype"]);
$assert.sameValue(globalThis["singleElementWithLeading"]?.["prototype"]?.["constructor"], globalThis["singleElementWithLeading"]);
$verifyProperty(globalThis["singleElementWithLeading"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithLeading"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElementWithLeading"], "name", {
  value: "singleElementWithLeading",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithLeading"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithObject"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithObject"]), true);
$assert.callable(globalThis["singleElementWithObject"]);
$assert.constructable(globalThis["singleElementWithObject"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithObject"]), ['length', 'name', 'prototype'], globalThis["singleElementWithObject"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithObject"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithObject"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElementWithObject"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElementWithObject"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithObject"]?.["prototype"]), ['constructor'], globalThis["singleElementWithObject"]?.["prototype"]);
$assert.sameValue(globalThis["singleElementWithObject"]?.["prototype"]?.["constructor"], globalThis["singleElementWithObject"]);
$verifyProperty(globalThis["singleElementWithObject"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithObject"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElementWithObject"], "name", {
  value: "singleElementWithObject",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithObject"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithRest"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithRest"]), true);
$assert.callable(globalThis["singleElementWithRest"]);
$assert.constructable(globalThis["singleElementWithRest"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithRest"]), ['length', 'name', 'prototype'], globalThis["singleElementWithRest"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["singleElementWithRest"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["singleElementWithRest"]?.["prototype"]), true);
$assert.notCallable(globalThis["singleElementWithRest"]?.["prototype"]);
$assert.notConstructable(globalThis["singleElementWithRest"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["singleElementWithRest"]?.["prototype"]), ['constructor'], globalThis["singleElementWithRest"]?.["prototype"]);
$assert.sameValue(globalThis["singleElementWithRest"]?.["prototype"]?.["constructor"], globalThis["singleElementWithRest"]);
$verifyProperty(globalThis["singleElementWithRest"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithRest"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["singleElementWithRest"], "name", {
  value: "singleElementWithRest",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["singleElementWithRest"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
