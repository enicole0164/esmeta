// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['0', 'length'], globalThis["arr"]);
$verifyProperty(globalThis["arr"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["arr"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(x, undefined);
