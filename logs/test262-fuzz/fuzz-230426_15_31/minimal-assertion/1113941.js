// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]), true);
$assert.notCallable(globalThis["iterable"]);
$assert.notConstructable(globalThis["iterable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]), [Symbol.asyncIterator], globalThis["iterable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.asyncIterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.asyncIterator]), true);
$assert.callable(globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.constructable(globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.asyncIterator]), ['length', 'name', 'prototype'], globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), true);
$assert.notCallable(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.notConstructable(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), ['constructor'], globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.sameValue(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]?.["constructor"], globalThis["iterable"]?.[Symbol.asyncIterator]);
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"], Symbol.asyncIterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name', 'prototype'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["prototype"]), [], globalThis["x"]?.["prototype"]);
$verifyProperty(globalThis["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
