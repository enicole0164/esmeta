// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(C), Function.prototype);
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(C?.["prototype"]), true);
$assert.notCallable(C?.["prototype"]);
$assert.notConstructable(C?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(C?.["prototype"]), ['constructor'], C?.["prototype"]);
$assert.sameValue(C?.["prototype"]?.["constructor"], C);
$verifyProperty(C?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(C, "name", {
  value: "C",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(x, undefined);
