// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["0"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["0"]), true);
$assert.callable(globalThis["x"]?.["0"]);
$assert.notConstructable(globalThis["x"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["0"]), ['length', 'name'], globalThis["x"]?.["0"]);
$verifyProperty(globalThis["x"]?.["0"], "name", {
  value: "0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"]?.["0"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
