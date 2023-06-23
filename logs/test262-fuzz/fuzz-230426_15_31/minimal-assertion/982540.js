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
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]), true);
$assert.notCallable(globalThis["asyncIterable"]);
$assert.notConstructable(globalThis["asyncIterable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]), ['0', 'length'], globalThis["asyncIterable"]);
$verifyProperty(globalThis["asyncIterable"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["asyncIterable"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterator"]), globalThis["asyncGenerator"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterator"]), true);
$assert.notCallable(globalThis["asyncIterator"]);
$assert.notConstructable(globalThis["asyncIterator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterator"]), [], globalThis["asyncIterator"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["await"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["await"]), true);
$assert.callable(globalThis["await"]);
$assert.notConstructable(globalThis["await"]);
$assert.compareArray($Reflect_ownKeys(globalThis["await"]), ['length', 'name', 'prototype'], globalThis["await"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["await"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["await"]?.["prototype"]), true);
$assert.notCallable(globalThis["await"]?.["prototype"]);
$assert.notConstructable(globalThis["await"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["await"]?.["prototype"]), [], globalThis["await"]?.["prototype"]);
$verifyProperty(globalThis["await"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["await"], "name", {
  value: "await",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["await"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
