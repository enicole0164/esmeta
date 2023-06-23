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
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]?.["0"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]?.["0"]), true);
$assert.callable(x?.["prototype"]?.["0"]);
$assert.notConstructable(x?.["prototype"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]?.["0"]), ['length', 'name', 'prototype'], x?.["prototype"]?.["0"]);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]?.["0"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]?.["0"]?.["prototype"]), true);
$assert.notCallable(x?.["prototype"]?.["0"]?.["prototype"]);
$assert.notConstructable(x?.["prototype"]?.["0"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]?.["0"]?.["prototype"]), [], x?.["prototype"]?.["0"]?.["prototype"]);
$verifyProperty(x?.["prototype"]?.["0"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x?.["prototype"]?.["0"], "name", {
  value: "0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["prototype"]?.["0"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["prototype"], "0", {
  writable: true,
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
