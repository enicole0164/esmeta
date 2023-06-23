// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONE"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONE"]), true);
$assert.callable(globalThis["$DONE"]);
$assert.constructable(globalThis["$DONE"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONE"]), ['length', 'name', 'prototype'], globalThis["$DONE"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONE"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONE"]?.["prototype"]), true);
$assert.notCallable(globalThis["$DONE"]?.["prototype"]);
$assert.notConstructable(globalThis["$DONE"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONE"]?.["prototype"]), ['constructor'], globalThis["$DONE"]?.["prototype"]);
$assert.sameValue(globalThis["$DONE"]?.["prototype"]?.["constructor"], globalThis["$DONE"]);
$verifyProperty(globalThis["$DONE"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONE"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["$DONE"], "name", {
  value: "$DONE",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONE"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["prototype"]);
$assert.sameValue(globalThis["Test262Error"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"], "name", {
  value: "Test262Error",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]), true);
$assert.notCallable(globalThis["iterable"]);
$assert.notConstructable(globalThis["iterable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]), [Symbol.asyncIterator], globalThis["iterable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.asyncIterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.asyncIterator]), true);
$assert.callable(globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.constructable(globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.asyncIterator]), ['length', 'name', 'prototype'], globalThis["iterable"]?.[Symbol.asyncIterator]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), true);
$assert.notCallable(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.notConstructable(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]), ['constructor'], globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]);
$assert.sameValue(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"]?.["constructor"], globalThis["iterable"]?.[Symbol.asyncIterator]);
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"]?.[Symbol.asyncIterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iterable"], Symbol.asyncIterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["iterationCount"], 0.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name', 'prototype'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["prototype"]), [], globalThis["x"]?.["prototype"]);
$verifyProperty(globalThis["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
