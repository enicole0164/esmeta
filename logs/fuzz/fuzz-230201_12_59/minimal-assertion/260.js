// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["0"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["0"]), true);
$assert.callable(globalThis["x"]?.["0"]);
$assert.notConstructable(globalThis["x"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["0"]), ['length', 'name', 'prototype'], globalThis["x"]?.["0"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["0"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["0"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["0"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["0"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["0"]?.["prototype"]), [], globalThis["x"]?.["0"]?.["prototype"]);
$verifyProperty(globalThis["x"]?.["0"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"]?.["0"], "name", {
  value: "0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"]?.["0"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
