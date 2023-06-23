// [EXIT] normal
"use strict";
let [ ... x ] = [ , ] ;

$assert.sameValue($Object_getPrototypeOf(x), Array.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.notCallable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['0', 'length'], x);
$verifyProperty(x, "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x, "0", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});