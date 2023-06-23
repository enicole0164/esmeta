// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["vals"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["vals"]), true);
$assert.notCallable(globalThis["vals"]);
$assert.notConstructable(globalThis["vals"]);
$assert.compareArray($Reflect_ownKeys(globalThis["vals"]), ['length'], globalThis["vals"]);
$verifyProperty(globalThis["vals"], "length", {
  value: 0.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(globalThis["x"], undefined);
