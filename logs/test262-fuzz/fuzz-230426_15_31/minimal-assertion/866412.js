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
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["executed"], false);
$assert.sameValue($Object_getPrototypeOf(A), Function.prototype);
$assert.sameValue(Object.isExtensible(A), true);
$assert.callable(A);
$assert.constructable(A);
$assert.compareArray($Reflect_ownKeys(A), ['length', 'name', 'prototype'], A);
$assert.sameValue($Object_getPrototypeOf(A?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(A?.["prototype"]), true);
$assert.notCallable(A?.["prototype"]);
$assert.notConstructable(A?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(A?.["prototype"]), ['constructor'], A?.["prototype"]);
$assert.sameValue(A?.["prototype"]?.["constructor"], A);
$verifyProperty(A?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(A, "name", {
  value: "A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(A, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(C), A);
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), A?.["prototype"]);
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
$assert.sameValue($Object_getPrototypeOf(x), Function.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.callable(x);
$assert.constructable(x);
$assert.compareArray($Reflect_ownKeys(x), ['length', 'name', 'prototype'], x);
$assert.sameValue($Object_getPrototypeOf(x?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(x?.["prototype"]), true);
$assert.notCallable(x?.["prototype"]);
$assert.notConstructable(x?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(x?.["prototype"]), ['constructor'], x?.["prototype"]);
$assert.sameValue(x?.["prototype"]?.["constructor"], x);
$verifyProperty(x?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(x, "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(x, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
