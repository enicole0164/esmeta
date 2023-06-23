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
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["prototype"]);
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
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'throws'], globalThis["assert"]);
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
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]), true);
$assert.notCallable(globalThis["iterable"]);
$assert.notConstructable(globalThis["iterable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]), [Symbol.iterator], globalThis["iterable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["iterable"]?.[Symbol.iterator]);
$assert.constructable(globalThis["iterable"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.iterator]), ['length', 'name', 'prototype'], globalThis["iterable"]?.[Symbol.iterator]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]), true);
$assert.notCallable(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]);
$assert.notConstructable(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]), ['constructor'], globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]);
$assert.sameValue(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"]?.["constructor"], globalThis["iterable"]?.[Symbol.iterator]);
$verifyProperty(globalThis["iterable"]?.[Symbol.iterator]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.iterator], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.iterator], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]), true);
$assert.notCallable(globalThis["iterator"]);
$assert.notConstructable(globalThis["iterator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]), ['next', 'return'], globalThis["iterator"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["next"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["next"]), true);
$assert.callable(globalThis["iterator"]?.["next"]);
$assert.constructable(globalThis["iterator"]?.["next"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["next"]), ['length', 'name', 'prototype'], globalThis["iterator"]?.["next"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["next"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["next"]?.["prototype"]), true);
$assert.notCallable(globalThis["iterator"]?.["next"]?.["prototype"]);
$assert.notConstructable(globalThis["iterator"]?.["next"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["next"]?.["prototype"]), ['constructor'], globalThis["iterator"]?.["next"]?.["prototype"]);
$assert.sameValue(globalThis["iterator"]?.["next"]?.["prototype"]?.["constructor"], globalThis["iterator"]?.["next"]);
$verifyProperty(globalThis["iterator"]?.["next"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["next"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterator"]?.["next"], "name", {
  value: "next",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["next"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"], "next", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["return"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["return"]), true);
$assert.callable(globalThis["iterator"]?.["return"]);
$assert.constructable(globalThis["iterator"]?.["return"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["return"]), ['length', 'name', 'prototype'], globalThis["iterator"]?.["return"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["return"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["return"]?.["prototype"]), true);
$assert.notCallable(globalThis["iterator"]?.["return"]?.["prototype"]);
$assert.notConstructable(globalThis["iterator"]?.["return"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["return"]?.["prototype"]), ['constructor'], globalThis["iterator"]?.["return"]?.["prototype"]);
$assert.sameValue(globalThis["iterator"]?.["return"]?.["prototype"]?.["constructor"], globalThis["iterator"]?.["return"]);
$verifyProperty(globalThis["iterator"]?.["return"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["return"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterator"]?.["return"], "name", {
  value: "return",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["return"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"], "return", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["nextCount"], 0.0);
$assert.sameValue(globalThis["x"], undefined);
