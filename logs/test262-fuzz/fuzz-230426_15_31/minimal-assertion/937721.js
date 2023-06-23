// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONE"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONE"]), true);
$assert.callable(globalThis["$DONE"]);
$assert.constructable(globalThis["$DONE"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONE"]), ['length', 'name', 'prototype'], globalThis["$DONE"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONE"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONE"]?.["prototype"]), true);
$assert.notCallable(globalThis["$DONE"]?.["prototype"]);
$assert.notConstructable(globalThis["$DONE"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONE"]?.["prototype"]), ['constructor'], globalThis["$DONE"]?.["prototype"]);
$assert.sameValue(globalThis["$DONE"]?.["prototype"]?.["constructor"], globalThis["$DONE"]);
$verifyProperty(globalThis["$DONE"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONE"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["$DONE"], "name", {
  value: "$DONE",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONE"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]), true);
$assert.callable(globalThis["Test262Error"]);
$assert.constructable(globalThis["Test262Error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype', 'toString'], globalThis["Test262Error"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["__consolePrintHandle__"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["__consolePrintHandle__"]), true);
$assert.callable(globalThis["__consolePrintHandle__"]);
$assert.constructable(globalThis["__consolePrintHandle__"]);
$assert.compareArray($Reflect_ownKeys(globalThis["__consolePrintHandle__"]), ['length', 'name', 'prototype'], globalThis["__consolePrintHandle__"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["__consolePrintHandle__"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["__consolePrintHandle__"]?.["prototype"]), true);
$assert.notCallable(globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.notConstructable(globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["__consolePrintHandle__"]?.["prototype"]), ['constructor'], globalThis["__consolePrintHandle__"]?.["prototype"]);
$assert.sameValue(globalThis["__consolePrintHandle__"]?.["prototype"]?.["constructor"], globalThis["__consolePrintHandle__"]);
$verifyProperty(globalThis["__consolePrintHandle__"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "name", {
  value: "__consolePrintHandle__",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["__consolePrintHandle__"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'notSameValue'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]), true);
$assert.notCallable(globalThis["assert"]?.["_isSameValue"]);
$assert.notConstructable(globalThis["assert"]?.["_isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]), ['length'], globalThis["assert"]?.["_isSameValue"]);
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"], "_isSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]), true);
$assert.callable(globalThis["assert"]?.["notSameValue"]);
$assert.notConstructable(globalThis["assert"]?.["notSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]), ['length', 'name'], globalThis["assert"]?.["notSameValue"]);
$verifyProperty(globalThis["assert"]?.["notSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
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
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["g"]), true);
$assert.callable(globalThis["g"]);
$assert.notConstructable(globalThis["g"]);
$assert.compareArray($Reflect_ownKeys(globalThis["g"]), ['length', 'name', 'prototype'], globalThis["g"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["g"]?.["prototype"]), true);
$assert.notCallable(globalThis["g"]?.["prototype"]);
$assert.notConstructable(globalThis["g"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["g"]?.["prototype"]), [], globalThis["g"]?.["prototype"]);
$verifyProperty(globalThis["g"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["g"], "name", {
  value: "g",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["g"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["it"]), globalThis["g"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["it"]), true);
$assert.notCallable(globalThis["it"]);
$assert.notConstructable(globalThis["it"]);
$assert.compareArray($Reflect_ownKeys(globalThis["it"]), [], globalThis["it"]);
$assert.sameValue($Object_getPrototypeOf(brokenPromise), Promise.prototype);
$assert.sameValue(Object.isExtensible(brokenPromise), true);
$assert.notCallable(brokenPromise);
$assert.notConstructable(brokenPromise);
$assert.compareArray($Reflect_ownKeys(brokenPromise), ['constructor'], brokenPromise);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get);
$assert.constructable(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get), ['length', 'name', 'prototype'], Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]), true);
$assert.notCallable(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]);
$assert.notConstructable(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]), ['constructor'], Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]);
$assert.sameValue(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"]?.["constructor"], Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get, "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get, "name", {
  value: "get",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(brokenPromise, "constructor")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(brokenPromise, "constructor", {
  set: undefined,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(caughtErr, undefined);
