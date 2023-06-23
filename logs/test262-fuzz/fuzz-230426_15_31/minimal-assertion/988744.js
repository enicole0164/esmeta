// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["prototype"]);
$assert.sameValue(globalThis["Test262Error"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"], "name", {
  value: "Test262Error",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Base), Function.prototype);
$assert.sameValue(Object.isExtensible(Base), true);
$assert.callable(Base);
$assert.constructable(Base);
$assert.compareArray($Reflect_ownKeys(Base), ['length', 'name', 'prototype'], Base);
$assert.sameValue($Object_getPrototypeOf(Base?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(Base?.["prototype"]), true);
$assert.notCallable(Base?.["prototype"]);
$assert.notConstructable(Base?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(Base?.["prototype"]), ['constructor'], Base?.["prototype"]);
$assert.sameValue(Base?.["prototype"]?.["constructor"], Base);
$verifyProperty(Base?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Base, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(Base, "name", {
  value: "Base",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Base, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(x, undefined);
