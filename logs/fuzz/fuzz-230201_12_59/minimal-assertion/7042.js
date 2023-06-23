// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["await"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["await"]), true);
$assert.callable(globalThis["await"]);
$assert.constructable(globalThis["await"]);
$assert.compareArray($Reflect_ownKeys(globalThis["await"]), ['length', 'name', 'prototype'], globalThis["await"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["await"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["await"]?.["prototype"]), true);
$assert.notCallable(globalThis["await"]?.["prototype"]);
$assert.notConstructable(globalThis["await"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["await"]?.["prototype"]), ['constructor'], globalThis["await"]?.["prototype"]);
$assert.sameValue(globalThis["await"]?.["prototype"]?.["constructor"], globalThis["await"]);
$verifyProperty(globalThis["await"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["await"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["await"], "name", {
  value: "await",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["await"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
