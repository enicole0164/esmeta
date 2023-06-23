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
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]), ['constructor', 'f'], x?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]?.["f"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]?.["f"]), true);
$assert.callable(x?.["prototype"]?.["f"]);
$assert.notConstructable(x?.["prototype"]?.["f"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]?.["f"]), ['length', 'name', 'prototype'], x?.["prototype"]?.["f"]);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]?.["f"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]?.["f"]?.["prototype"]), true);
$assert.notCallable(x?.["prototype"]?.["f"]?.["prototype"]);
$assert.notConstructable(x?.["prototype"]?.["f"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]?.["f"]?.["prototype"]), [], x?.["prototype"]?.["f"]?.["prototype"]);
$verifyProperty(x?.["prototype"]?.["f"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x?.["prototype"]?.["f"], "name", {
  value: "f",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["prototype"]?.["f"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["prototype"], "f", {
  writable: true,
  enumerable: false,
  configurable: true,
});
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
