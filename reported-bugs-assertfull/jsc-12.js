// [EXIT] normal
"use strict";
async function f (...[ [] ]) { } 

$delay(() => {
$assert.sameValue($Object_getPrototypeOf(globalThis["f"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["f"]), true);
$assert.callable(globalThis["f"]);
$assert.notConstructable(globalThis["f"]);
$assert.compareArray($Reflect_ownKeys(globalThis["f"]), ['length', 'name'], globalThis["f"]);
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
});