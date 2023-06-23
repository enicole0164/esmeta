// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["A"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["A"]), true);
$assert.callable(globalThis["A"]);
$assert.constructable(globalThis["A"]);
$assert.compareArray($Reflect_ownKeys(globalThis["A"]), ['length', 'name', 'prototype'], globalThis["A"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["A"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["A"]?.["prototype"]), true);
$assert.notCallable(globalThis["A"]?.["prototype"]);
$assert.notConstructable(globalThis["A"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["A"]?.["prototype"]), ['constructor'], globalThis["A"]?.["prototype"]);
$assert.sameValue(globalThis["A"]?.["prototype"]?.["constructor"], globalThis["A"]);
$verifyProperty(globalThis["A"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["A"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["A"], "name", {
  value: "A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["A"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["B"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["B"]), true);
$assert.callable(globalThis["B"]);
$assert.constructable(globalThis["B"]);
$assert.compareArray($Reflect_ownKeys(globalThis["B"]), ['length', 'name'], globalThis["B"]);
$verifyProperty(globalThis["B"], "name", {
  value: "bound A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["B"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["C"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["C"]), true);
$assert.callable(globalThis["C"]);
$assert.constructable(globalThis["C"]);
$assert.compareArray($Reflect_ownKeys(globalThis["C"]), ['length', 'name'], globalThis["C"]);
$verifyProperty(globalThis["C"], "name", {
  value: "bound bound A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["C"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["c"]), globalThis["A"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["c"]), true);
$assert.notCallable(globalThis["c"]);
$assert.notConstructable(globalThis["c"]);
$assert.compareArray($Reflect_ownKeys(globalThis["c"]), [], globalThis["c"]);
$assert.sameValue(x, undefined);
