// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['length'], globalThis["arr"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set, "name", {
  value: "set",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["arr"], "length")?.set, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "length", {
  get: undefined,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(x, undefined);
