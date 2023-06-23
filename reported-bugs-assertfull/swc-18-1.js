// [EXIT] normal
"use strict";
class X { static x = function(){} ;}
$assert.sameValue($Object_getPrototypeOf(X), Function.prototype);
$assert.sameValue(Object.isExtensible(X), true);
$assert.callable(X);
$assert.constructable(X);
$assert.compareArray($Reflect_ownKeys(X), ['length', 'name', 'prototype', 'x'], X);
$assert.sameValue($Object_getPrototypeOf(X?.["prototype"]), Object.prototype);
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
$assert.sameValue($Object_getPrototypeOf(X?.["x"]), Function.prototype);
$assert.sameValue(Object.isExtensible(X?.["x"]), true);
$assert.callable(X?.["x"]);
$assert.constructable(X?.["x"]);
$assert.compareArray($Reflect_ownKeys(X?.["x"]), ['length', 'name', 'prototype'], X?.["x"]);
$assert.sameValue($Object_getPrototypeOf(X?.["x"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(X?.["x"]?.["prototype"]), true);
$assert.notCallable(X?.["x"]?.["prototype"]);
$assert.notConstructable(X?.["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(X?.["x"]?.["prototype"]), ['constructor'], X?.["x"]?.["prototype"]);
$assert.sameValue(X?.["x"]?.["prototype"]?.["constructor"], X?.["x"]);
$verifyProperty(X?.["x"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X?.["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(X?.["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X?.["x"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X, "x", {
  writable: true,
  enumerable: true,
  configurable: true,
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