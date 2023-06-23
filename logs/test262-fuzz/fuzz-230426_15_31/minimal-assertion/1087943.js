// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["fn"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["fn"]), true);
$assert.callable(globalThis["fn"]);
$assert.notConstructable(globalThis["fn"]);
$assert.compareArray($Reflect_ownKeys(globalThis["fn"]), ['length', 'name'], globalThis["fn"]);
$verifyProperty(globalThis["fn"], "name", {
  value: "fn",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["fn"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(x, undefined);
