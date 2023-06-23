// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["A"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["A"]), true);
$assert.callable(globalThis["A"]);
$assert.constructable(globalThis["A"]);
$assert.compareArray($Reflect_ownKeys(globalThis["A"]), ['length', 'name', 'prototype'], globalThis["A"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["A"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["A"]?.["prototype"]), true);
$assert.notCallable(globalThis["A"]?.["prototype"]);
$assert.notConstructable(globalThis["A"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["A"]?.["prototype"]), ['constructor'], globalThis["A"]?.["prototype"]);
$assert.sameValue(globalThis["A"]?.["prototype"]?.["constructor"], globalThis["A"]);
$verifyProperty(globalThis["A"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["A"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["A"], "name", {
  value: "A",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["A"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype', 'thrower'], globalThis["Test262Error"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]), ['constructor', 'toString'], globalThis["Test262Error"]?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]), ['exec'], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]), true);
$assert.callable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]), ['length', 'name'], globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"], "name", {
  value: "exec",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["exec"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "exec", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"], "toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
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
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]), true);
$assert.notCallable(globalThis["arr"]);
$assert.notConstructable(globalThis["arr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]), ['0', 'length', 'constructor'], globalThis["arr"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]?.["constructor"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]?.["constructor"]), true);
$assert.notCallable(globalThis["arr"]?.["constructor"]);
$assert.notConstructable(globalThis["arr"]?.["constructor"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]?.["constructor"]), [Symbol.species], globalThis["arr"]?.["constructor"]);
$assert.sameValue(globalThis["arr"]?.["constructor"]?.[Symbol.species], globalThis["A"]);
$verifyProperty(globalThis["arr"]?.["constructor"], Symbol.species, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "constructor", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["arr"]?.["0"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["arr"]?.["0"]), true);
$assert.notCallable(globalThis["arr"]?.["0"]);
$assert.notConstructable(globalThis["arr"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(globalThis["arr"]?.["0"]), ['0', 'length'], globalThis["arr"]?.["0"]);
$verifyProperty(globalThis["arr"]?.["0"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["arr"]?.["0"], "0", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["arr"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'sameValue', 'throws'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["throws"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["throws"]), true);
$assert.callable(globalThis["assert"]?.["throws"]);
$assert.constructable(globalThis["assert"]?.["throws"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["throws"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["throws"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["throws"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["throws"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["throws"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["throws"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["throws"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["throws"]);
$verifyProperty(globalThis["assert"]?.["throws"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["throws"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["throws"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["throws"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "throws", {
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]), AsyncFunction.prototype);
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
$assert.sameValue(x, undefined);
