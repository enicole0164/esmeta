// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.constructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name', 'prototype'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["prototype"]), ['constructor'], globalThis["x"]?.["prototype"]);
$assert.sameValue(globalThis["x"]?.["prototype"]?.["constructor"], globalThis["x"]);
$verifyProperty(globalThis["x"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
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
$assert.sameValue($Object_getPrototypeOf(await), Function.prototype);
$assert.sameValue(Object.isExtensible(await), true);
$assert.callable(await);
$assert.constructable(await);
$assert.compareArray($Reflect_ownKeys(await), ['length', 'name', 'prototype'], await);
$assert.sameValue($Object_getPrototypeOf(await?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(await?.["prototype"]), true);
$assert.notCallable(await?.["prototype"]);
$assert.notConstructable(await?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(await?.["prototype"]), ['constructor'], await?.["prototype"]);
$assert.sameValue(await?.["prototype"]?.["constructor"], await);
$verifyProperty(await?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(await, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(await, "name", {
  value: "await",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(await, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
