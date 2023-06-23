// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'sameValue'], globalThis["assert"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]), true);
$assert.callable(globalThis["assert"]?.["sameValue"]);
$assert.notConstructable(globalThis["assert"]?.["sameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]), ['length', 'name'], globalThis["assert"]?.["sameValue"]);
$verifyProperty(globalThis["assert"]?.["sameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "sameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["prototype"]?.["constructor"], globalThis["assert"]);
$verifyProperty(globalThis["assert"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["map"])), WeakMap.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["map"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["map"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["map"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["map"])), ['constructor'], $Object_getPrototypeOf(globalThis["map"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["map"])?.["constructor"]), WeakMap);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["map"])?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["map"])?.["constructor"]);
$assert.constructable($Object_getPrototypeOf(globalThis["map"])?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["map"])?.["constructor"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["map"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["map"])?.["constructor"]?.["prototype"], $Object_getPrototypeOf(globalThis["map"]));
$verifyProperty($Object_getPrototypeOf(globalThis["map"])?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["map"])?.["constructor"], "name", {
  value: "WM",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["map"])?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["map"]), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["map"]), true);
$assert.notCallable(globalThis["map"]);
$assert.notConstructable(globalThis["map"]);
$assert.compareArray($Reflect_ownKeys(globalThis["map"]), [], globalThis["map"]);
$assert.sameValue(globalThis["obj"], true);
$assert.sameValue(WM, $Object_getPrototypeOf(globalThis["map"])?.["constructor"]);
$assert.sameValue(x, undefined);
