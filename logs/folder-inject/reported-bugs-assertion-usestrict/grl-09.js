// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(f), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(f), true);
$assert.callable(f);
$assert.notConstructable(f);
$assert.compareArray($Reflect_ownKeys(f), ['length', 'name'], f);
$verifyProperty(f, "name", {
  value: "f",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(f, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
