// [EXIT] normal
"use strict";
let x = { 0 : x => { } , } ;

$assert.sameValue($Object_getPrototypeOf(x), Object.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.notCallable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['0'], x);
$assert.sameValue($Object_getPrototypeOf(x?.["0"]), Function.prototype);
$assert.sameValue(Object.isExtensible(x?.["0"]), true);
$assert.callable(x?.["0"]);
$assert.notConstructable(x?.["0"]);
$assert.compareArray($Reflect_ownKeys(x?.["0"]), ['length', 'name'], x?.["0"]);
$verifyProperty(x?.["0"], "name", {
  value: "0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x?.["0"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});