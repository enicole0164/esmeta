// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name'], globalThis["x"]);
$verifyProperty(globalThis["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
