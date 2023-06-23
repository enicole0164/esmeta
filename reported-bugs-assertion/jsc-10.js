// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(x), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length', 'name'], x);
$verifyProperty(x, "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
