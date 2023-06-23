// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get, "name", {
  value: "get 0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "0", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
