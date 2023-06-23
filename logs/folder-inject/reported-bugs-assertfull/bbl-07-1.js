// [EXIT] normal
"use strict";
class X { 0(){} }

$assert.sameValue($Object_getPrototypeOf(X), Function.prototype);
$assert.sameValue(Object.isExtensible(X), true);
$assert.callable(X);
$assert.constructable(X);
$assert.compareArray($Reflect_ownKeys(X), ['length', 'name', 'prototype'], X);
$assert.sameValue($Object_getPrototypeOf(X?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(X?.["prototype"]), true);
$assert.notCallable(X?.["prototype"]);
$assert.notConstructable(X?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(X?.["prototype"]), ['0', 'constructor'], X?.["prototype"]);
$assert.sameValue(X?.["prototype"]?.["constructor"], X);
$verifyProperty(X?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(X?.["prototype"]?.["0"]), Function.prototype);
$assert.sameValue(Object.isExtensible(X?.["prototype"]?.["0"]), true);
$assert.callable(X?.["prototype"]?.["0"]);
$assert.notConstructable(X?.["prototype"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(X?.["prototype"]?.["0"]), ['length', 'name'], X?.["prototype"]?.["0"]);
$verifyProperty(X?.["prototype"]?.["0"], "name", {
  value: "0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X?.["prototype"]?.["0"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(X?.["prototype"], "0", {
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