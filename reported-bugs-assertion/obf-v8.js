// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(x), Function.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.constructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['0', 'length', 'name', 'prototype'], x);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]), true);
$assert.notCallable(x?.["prototype"]);
$assert.notConstructable(x?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]), ['constructor'], x?.["prototype"]);
$assert.sameValue(x?.["prototype"]?.["constructor"], x);
$verifyProperty(x?.["prototype"], "constructor", {
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
$assert.sameValue($Object_getPrototypeOf(x?.["0"]), Function.prototype);
$assert.sameValue(Object.isExtensible(x?.["0"]), true);
$assert.callable(x?.["0"]);
$assert.constructable(x?.["0"]);
$assert.compareArray($Reflect_ownKeys(x?.["0"]), ['length', 'name', 'prototype'], x?.["0"]);
$assert.sameValue($Object_getPrototypeOf(x?.["0"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(x?.["0"]?.["prototype"]), true);
$assert.notCallable(x?.["0"]?.["prototype"]);
$assert.notConstructable(x?.["0"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["0"]?.["prototype"]), ['constructor'], x?.["0"]?.["prototype"]);
$assert.sameValue(x?.["0"]?.["prototype"]?.["constructor"], x?.["0"]);
$verifyProperty(x?.["0"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["0"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x?.["0"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["0"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
