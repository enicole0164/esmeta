// [EXIT] normal
"use strict";
class X extends class {} {}

$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(X)), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(X)), true);
$assert.callable($Object_getPrototypeOf(X));
$assert.constructable($Object_getPrototypeOf(X));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(X)), ['length', 'name', 'prototype'], $Object_getPrototypeOf(X));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(X)?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(X)?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(X)?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(X)?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(X)?.["prototype"]), ['constructor'], $Object_getPrototypeOf(X)?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(X)?.["prototype"]?.["constructor"], $Object_getPrototypeOf(X));
$verifyProperty($Object_getPrototypeOf(X)?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(X), "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(X), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(X), "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(X), true);
$assert.callable(X);
$assert.constructable(X);
$assert.compareArray($Reflect_ownKeys(X), ['length', 'name', 'prototype'], X);
$assert.sameValue($Object_getPrototypeOf(X?.["prototype"]), $Object_getPrototypeOf(X)?.["prototype"]);
$assert.sameValue(Object.isExtensible(X?.["prototype"]), true);
$assert.notCallable(X?.["prototype"]);
$assert.notConstructable(X?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(X?.["prototype"]), ['constructor'], X?.["prototype"]);
$assert.sameValue(X?.["prototype"]?.["constructor"], X);
$verifyProperty(X?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(X, "name", {
  value: "X",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});