// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(x), Array.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.notCallable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length'], x);
$verifyProperty(x, "length", {
  value: 0.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
