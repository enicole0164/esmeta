// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncGenerator"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncGenerator"]), true);
$assert.callable(globalThis["asyncGenerator"]);
$assert.notConstructable(globalThis["asyncGenerator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncGenerator"]), ['length', 'name', 'prototype'], globalThis["asyncGenerator"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncGenerator"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncGenerator"]?.["prototype"]), true);
$assert.notCallable(globalThis["asyncGenerator"]?.["prototype"]);
$assert.notConstructable(globalThis["asyncGenerator"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncGenerator"]?.["prototype"]), [], globalThis["asyncGenerator"]?.["prototype"]);
$verifyProperty(globalThis["asyncGenerator"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["asyncGenerator"], "name", {
  value: "asyncGenerator",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncGenerator"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterator"]), globalThis["asyncGenerator"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterator"]), true);
$assert.notCallable(globalThis["asyncIterator"]);
$assert.notConstructable(globalThis["asyncIterator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterator"]), [], globalThis["asyncIterator"]);
$assert.sameValue(await, undefined);
