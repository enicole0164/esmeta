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
$assert.compareArray($Reflect_ownKeys(globalThis["a"]), ['0', '1', '2', '3', '4', '5', '6', 'length'], globalThis["a"]);
$verifyProperty(globalThis["a"], "4", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "2", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "length", {
  value: 7.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["a"], "0", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "6", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "1", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "3", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["a"], "5", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["array"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["array"]), true);
$assert.notCallable(globalThis["array"]);
$assert.notConstructable(globalThis["array"]);
$assert.compareArray($Reflect_ownKeys(globalThis["array"]), ['0', '1', '2', '3', '4', '5', '6', 'length'], globalThis["array"]);
$verifyProperty(globalThis["array"], "4", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "2", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "length", {
  value: 7.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["array"], "0", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "6", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "3", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "5", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["arrayIndex"], 6.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'sameValue', 'notSameValue'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]), true);
$assert.notCallable(globalThis["assert"]?.["notSameValue"]);
$assert.notConstructable(globalThis["assert"]?.["notSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]), [], globalThis["assert"]?.["notSameValue"]);
$verifyProperty(globalThis["assert"], "notSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]), true);
$assert.callable(globalThis["assert"]?.["sameValue"]);
$assert.constructable(globalThis["assert"]?.["sameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["sameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["sameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["sameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["sameValue"]);
$verifyProperty(globalThis["assert"]?.["sameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "sameValue", {
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
  value: 2.0,
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
