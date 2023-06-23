// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.notConstructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name'], globalThis["Test262Error"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.notConstructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', '_toString'], globalThis["assert"]);
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]), true);
$assert.callable(globalThis["assert"]?.["_toString"]);
$assert.constructable(globalThis["assert"]?.["_toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["_toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["_toString"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["_toString"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["_toString"]);
$verifyProperty(globalThis["assert"]?.["_toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["callCount"], 0.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["p1"]), Promise.prototype);
$assert.sameValue(Object.isExtensible(globalThis["p1"]), true);
$assert.notCallable(globalThis["p1"]);
$assert.notConstructable(globalThis["p1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["p1"]), [], globalThis["p1"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["p2"]), Promise.prototype);
$assert.sameValue(Object.isExtensible(globalThis["p2"]), true);
$assert.notCallable(globalThis["p2"]);
$assert.notConstructable(globalThis["p2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["p2"]), [], globalThis["p2"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["p3"]), Promise.prototype);
$assert.sameValue(Object.isExtensible(globalThis["p3"]), true);
$assert.notCallable(globalThis["p3"]);
$assert.notConstructable(globalThis["p3"]);
$assert.compareArray($Reflect_ownKeys(globalThis["p3"]), [], globalThis["p3"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["p4"]), Promise.prototype);
$assert.sameValue(Object.isExtensible(globalThis["p4"]), true);
$assert.notCallable(globalThis["p4"]);
$assert.notConstructable(globalThis["p4"]);
$assert.compareArray($Reflect_ownKeys(globalThis["p4"]), [], globalThis["p4"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["resolve"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["resolve"]), true);
$assert.callable(globalThis["resolve"]);
$assert.notConstructable(globalThis["resolve"]);
$assert.compareArray($Reflect_ownKeys(globalThis["resolve"]), ['length', 'name'], globalThis["resolve"]);
$verifyProperty(globalThis["resolve"], "name", {
  value: "resolve",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["resolve"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
