// [EXIT] normal
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
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype'], globalThis["assert"]);
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
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["g"]), true);
$assert.callable(globalThis["g"]);
$assert.notConstructable(globalThis["g"]);
$assert.compareArray($Reflect_ownKeys(globalThis["g"]), ['length', 'name', 'prototype'], globalThis["g"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["g"]?.["prototype"]), true);
$assert.notCallable(globalThis["g"]?.["prototype"]);
$assert.notConstructable(globalThis["g"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["g"]?.["prototype"]), [], globalThis["g"]?.["prototype"]);
$verifyProperty(globalThis["g"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["g"], "name", {
  value: "g",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["g"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]), globalThis["g"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["iter"]), true);
$assert.notCallable(globalThis["iter"]);
$assert.notConstructable(globalThis["iter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]), [], globalThis["iter"]);
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
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]), ['return'], globalThis["iterator"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["return"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["return"]), true);
$assert.notCallable(globalThis["iterator"]?.["return"]);
$assert.notConstructable(globalThis["iterator"]?.["return"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["return"]), ['x'], globalThis["iterator"]?.["return"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["return"]?.["x"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["return"]?.["x"]), true);
$assert.callable(globalThis["iterator"]?.["return"]?.["x"]);
$assert.constructable(globalThis["iterator"]?.["return"]?.["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["return"]?.["x"]), ['length', 'name', 'prototype'], globalThis["iterator"]?.["return"]?.["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]);
$assert.notConstructable(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]), ['constructor'], globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]);
$assert.sameValue(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"]?.["constructor"], globalThis["iterator"]?.["return"]?.["x"]);
$verifyProperty(globalThis["iterator"]?.["return"]?.["x"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["return"]?.["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterator"]?.["return"]?.["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["return"]?.["x"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterator"]?.["return"], "x", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["iterator"], "return", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["x"], globalThis["iterator"]?.["return"]?.["x"]);
