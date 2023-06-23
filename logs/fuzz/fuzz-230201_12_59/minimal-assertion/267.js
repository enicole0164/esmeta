// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set, "name", {
  value: "set 0",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["x"], "0")?.set, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "0", {
  get: undefined,
  enumerable: true,
  configurable: true,
});
