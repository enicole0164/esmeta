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
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]), true);
$assert.notCallable(globalThis["asyncIterable"]);
$assert.notConstructable(globalThis["asyncIterable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]), ['next', Symbol.asyncIterator], globalThis["asyncIterable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]?.[Symbol.asyncIterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]?.[Symbol.asyncIterator]), true);
$assert.callable(globalThis["asyncIterable"]?.[Symbol.asyncIterator]);
$assert.constructable(globalThis["asyncIterable"]?.[Symbol.asyncIterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]?.[Symbol.asyncIterator]), ['length', 'name', 'prototype'], globalThis["asyncIterable"]?.[Symbol.asyncIterator]);
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]), true);
$assert.notCallable(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.notConstructable(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]), ['constructor'], globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.sameValue(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"]?.["constructor"], globalThis["asyncIterable"]?.[Symbol.asyncIterator]);
$verifyProperty(globalThis["asyncIterable"]?.[Symbol.asyncIterator]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncIterable"]?.[Symbol.asyncIterator], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["asyncIterable"]?.[Symbol.asyncIterator], "name", {
  value: "[Symbol.asyncIterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncIterable"]?.[Symbol.asyncIterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncIterable"], Symbol.asyncIterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]?.["next"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]?.["next"]), true);
$assert.callable(globalThis["asyncIterable"]?.["next"]);
$assert.notConstructable(globalThis["asyncIterable"]?.["next"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]?.["next"]), ['length', 'name', 'prototype'], globalThis["asyncIterable"]?.["next"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterable"]?.["next"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterable"]?.["next"]?.["prototype"]), true);
$assert.notCallable(globalThis["asyncIterable"]?.["next"]?.["prototype"]);
$assert.notConstructable(globalThis["asyncIterable"]?.["next"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterable"]?.["next"]?.["prototype"]), [], globalThis["asyncIterable"]?.["next"]?.["prototype"]);
$verifyProperty(globalThis["asyncIterable"]?.["next"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["asyncIterable"]?.["next"], "name", {
  value: "next",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncIterable"]?.["next"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["asyncIterable"], "next", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["asyncIterator"]), globalThis["asyncGenerator"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["asyncIterator"]), true);
$assert.notCallable(globalThis["asyncIterator"]);
$assert.notConstructable(globalThis["asyncIterator"]);
$assert.compareArray($Reflect_ownKeys(globalThis["asyncIterator"]), [], globalThis["asyncIterator"]);
$assert.sameValue(x, undefined);
