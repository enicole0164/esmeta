// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iter"]), true);
$assert.notCallable(globalThis["iter"]);
$assert.notConstructable(globalThis["iter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]), ['next', 'return', Symbol.iterator], globalThis["iter"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iter"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["iter"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["iter"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]?.[Symbol.iterator]), ['length', 'name'], globalThis["iter"]?.[Symbol.iterator]);
$verifyProperty(globalThis["iter"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]?.["next"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iter"]?.["next"]), true);
$assert.callable(globalThis["iter"]?.["next"]);
$assert.notConstructable(globalThis["iter"]?.["next"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]?.["next"]), ['length', 'name'], globalThis["iter"]?.["next"]);
$verifyProperty(globalThis["iter"]?.["next"], "name", {
  value: "next",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"]?.["next"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"], "next", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]?.["return"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["iter"]?.["return"]), true);
$assert.callable(globalThis["iter"]?.["return"]);
$assert.notConstructable(globalThis["iter"]?.["return"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]?.["return"]), ['length', 'name'], globalThis["iter"]?.["return"]);
$verifyProperty(globalThis["iter"]?.["return"], "name", {
  value: "return",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"]?.["return"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["iter"], "return", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(C)), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(C)), true);
$assert.callable($Object_getPrototypeOf(C));
$assert.constructable($Object_getPrototypeOf(C));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(C)), ['length', 'name', 'prototype'], $Object_getPrototypeOf(C));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(C)?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(C)?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(C)?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(C)?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(C)?.["prototype"]), ['constructor'], $Object_getPrototypeOf(C)?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(C)?.["prototype"]?.["constructor"], $Object_getPrototypeOf(C));
$verifyProperty($Object_getPrototypeOf(C)?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(C), "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(C), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(C), "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), $Object_getPrototypeOf(C)?.["prototype"]);
$assert.sameValue(Object.isExtensible(C?.["prototype"]), true);
$assert.notCallable(C?.["prototype"]);
$assert.notConstructable(C?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(C?.["prototype"]), ['constructor'], C?.["prototype"]);
$assert.sameValue(C?.["prototype"]?.["constructor"], C);
$verifyProperty(C?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(C, "name", {
  value: "C",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(C, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
