// [EXIT] normal
"use strict";
function f ( x = void 0 ) { }

$assert.sameValue($Object_getPrototypeOf(globalThis["f"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["f"]), true);
$assert.callable(globalThis["f"]);
$assert.constructable(globalThis["f"]);
$assert.compareArray($Reflect_ownKeys(globalThis["f"]), ['length', 'name', 'prototype'], globalThis["f"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["f"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["f"]?.["prototype"]), true);
$assert.notCallable(globalThis["f"]?.["prototype"]);
$assert.notConstructable(globalThis["f"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["f"]?.["prototype"]), ['constructor'], globalThis["f"]?.["prototype"]);
$assert.sameValue(globalThis["f"]?.["prototype"]?.["constructor"], globalThis["f"]);
$verifyProperty(globalThis["f"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["f"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["f"], "name", {
  value: "f",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["f"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});