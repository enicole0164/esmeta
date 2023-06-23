// [EXIT] normal
"use strict";
let x = function * x ( ) { } ( ) ;

$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(x)), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(x)), true);
$assert.notCallable($Object_getPrototypeOf(x));
$assert.notConstructable($Object_getPrototypeOf(x));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(x)), [], $Object_getPrototypeOf(x));
$assert.sameValue(Object.isExtensible(x), true);
$assert.notCallable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), [], x);