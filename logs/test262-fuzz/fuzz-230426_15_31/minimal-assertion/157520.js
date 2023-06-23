// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['x'], globalThis["x"]);
$verifyProperty(globalThis["x"], "x", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
