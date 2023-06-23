// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype', 'toString', 'thrower'], globalThis["Test262Error"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["toString"]), true);
$assert.callable(globalThis["Test262Error"]?.["toString"]);
$assert.constructable(globalThis["Test262Error"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["Test262Error"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]?.["toString"]);
$verifyProperty(globalThis["Test262Error"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
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
$verifyProperty(globalThis["Test262Error"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "name", {
  value: "Test262Error",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["thrower"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["thrower"]), true);
$assert.callable(globalThis["Test262Error"]?.["thrower"]);
$assert.notConstructable(globalThis["Test262Error"]?.["thrower"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["thrower"]), ['length', 'name'], globalThis["Test262Error"]?.["thrower"]);
$verifyProperty(globalThis["Test262Error"]?.["thrower"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["thrower"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"], "thrower", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["a"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["a"]), true);
$assert.notCallable(globalThis["a"]);
$assert.notConstructable(globalThis["a"]);
$assert.compareArray($Reflect_ownKeys(globalThis["a"]), ['0', 'length'], globalThis["a"]);
$verifyProperty(globalThis["a"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["a"], "0", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["array"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["array"]), true);
$assert.callable(globalThis["array"]);
$assert.notConstructable(globalThis["array"]);
$assert.compareArray($Reflect_ownKeys(globalThis["array"]), ['length', 'name'], globalThis["array"]);
$verifyProperty(globalThis["array"], "name", {
  value: "array",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["array"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["arrayIndex"], -1.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.notCallable(globalThis["assert"]);
$assert.notConstructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['_toString'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["mapFn"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["mapFn"]), true);
$assert.callable(globalThis["mapFn"]);
$assert.constructable(globalThis["mapFn"]);
$assert.compareArray($Reflect_ownKeys(globalThis["mapFn"]), ['length', 'name', 'prototype'], globalThis["mapFn"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["mapFn"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["mapFn"]?.["prototype"]), true);
$assert.notCallable(globalThis["mapFn"]?.["prototype"]);
$assert.notConstructable(globalThis["mapFn"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["mapFn"]?.["prototype"]), ['constructor'], globalThis["mapFn"]?.["prototype"]);
$assert.sameValue(globalThis["mapFn"]?.["prototype"]?.["constructor"], globalThis["mapFn"]);
$verifyProperty(globalThis["mapFn"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["mapFn"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["mapFn"], "name", {
  value: "mapFn",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["mapFn"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.constructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name', 'prototype'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["prototype"]), ['constructor'], globalThis["x"]?.["prototype"]);
$assert.sameValue(globalThis["x"]?.["prototype"]?.["constructor"], globalThis["x"]);
$verifyProperty(globalThis["x"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
