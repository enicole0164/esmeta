// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0', 'length'], globalThis["x"]);
$verifyProperty(globalThis["x"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
