// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['length'], globalThis["arr"]);
$verifyProperty(globalThis["arr"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(x, undefined);
