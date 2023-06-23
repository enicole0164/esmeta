// [EXIT] normal
"use strict";
class x { static { var x = 42; } }

$assert.sameValue($Object_getPrototypeOf(x), Function.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.constructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length', 'name', 'prototype'], x);
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