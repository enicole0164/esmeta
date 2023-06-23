// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(x)), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(x)), true);
$assert.callable($Object_getPrototypeOf(x));
$assert.constructable($Object_getPrototypeOf(x));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(x)), ['length', 'name', 'prototype'], $Object_getPrototypeOf(x));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(x)?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(x)?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(x)?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(x)?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(x)?.["prototype"]), ['constructor'], $Object_getPrototypeOf(x)?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(x)?.["prototype"]?.["constructor"], $Object_getPrototypeOf(x));
$verifyProperty($Object_getPrototypeOf(x)?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(x), "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(x), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(x), "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.constructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length', 'name', 'prototype'], x);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]), $Object_getPrototypeOf(x)?.["prototype"]);
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
