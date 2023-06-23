// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["x"])), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["x"])), true);
$assert.callable($Object_getPrototypeOf(globalThis["x"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["x"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["x"])), ['length', 'name'], $Object_getPrototypeOf(globalThis["x"]));
$verifyProperty($Object_getPrototypeOf(globalThis["x"]), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["x"]), "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), [], globalThis["x"]);
