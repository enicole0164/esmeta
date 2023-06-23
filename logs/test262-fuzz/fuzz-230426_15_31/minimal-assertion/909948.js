// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["B"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["B"]), true);
$assert.callable(globalThis["B"]);
$assert.notConstructable(globalThis["B"]);
$assert.compareArray($Reflect_ownKeys(globalThis["B"]), ['length', 'name'], globalThis["B"]);
$verifyProperty(globalThis["B"], "name", {
  value: "bound ",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["B"], "length", {
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
$assert.sameValue(x, undefined);
