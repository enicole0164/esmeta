// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(x), Function.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.constructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length', 'name', 'prototype'], x);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]), true);
$assert.notCallable(x?.["prototype"]);
$assert.notConstructable(x?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]), ['0', 'constructor'], x?.["prototype"]);
$assert.sameValue(x?.["prototype"]?.["constructor"], x);
$verifyProperty(x?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get, "name", {
  value: "get 0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(x?.["prototype"], "0")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["prototype"], "0", {
  set: undefined,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x, "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
