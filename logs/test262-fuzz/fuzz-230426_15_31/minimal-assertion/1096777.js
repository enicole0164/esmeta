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
$assert.sameValue(globalThis["assert"], 0.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["originalSpecies"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["originalSpecies"]), true);
$assert.notCallable(globalThis["originalSpecies"]);
$assert.notConstructable(globalThis["originalSpecies"]);
$assert.compareArray($Reflect_ownKeys(globalThis["originalSpecies"]), ['value', 'writable', 'enumerable', 'configurable'], globalThis["originalSpecies"]);
$verifyProperty(globalThis["originalSpecies"], "value", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["originalSpecies"], "writable", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["originalSpecies"], "enumerable", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["originalSpecies"], "configurable", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(x, undefined);
