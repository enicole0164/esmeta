// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(C)), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(C)), true);
$assert.callable($Object_getPrototypeOf(C));
$assert.constructable($Object_getPrototypeOf(C));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(C)), ['length', 'name', 'prototype'], $Object_getPrototypeOf(C));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(C)?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(C)?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(C)?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(C)?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(C)?.["prototype"]), ['constructor'], $Object_getPrototypeOf(C)?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(C)?.["prototype"]?.["constructor"], $Object_getPrototypeOf(C));
$verifyProperty($Object_getPrototypeOf(C)?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(C), "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(C), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(C), "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), $Object_getPrototypeOf(C)?.["prototype"]);
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
