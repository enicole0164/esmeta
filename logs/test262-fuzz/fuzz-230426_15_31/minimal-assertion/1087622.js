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
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'sameValue', '_toString'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]), true);
$assert.notCallable(globalThis["assert"]?.["_isSameValue"]);
$assert.notConstructable(globalThis["assert"]?.["_isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]), ['index'], globalThis["assert"]?.["_isSameValue"]);
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "index", {
  value: "",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_isSameValue", {
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]), true);
$assert.notCallable(globalThis["assert"]?.["_toString"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]), ['construct'], globalThis["assert"]?.["_toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]?.["construct"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]?.["construct"]), true);
$assert.callable(globalThis["assert"]?.["_toString"]?.["construct"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]?.["construct"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]?.["construct"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["_toString"]?.["construct"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]), [], globalThis["assert"]?.["_toString"]?.["construct"]?.["prototype"]);
$verifyProperty(globalThis["assert"]?.["_toString"]?.["construct"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["_toString"]?.["construct"], "name", {
  value: "construct",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"]?.["construct"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_toString"], "construct", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_toString", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["sameValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["sameValue"]), true);
$assert.notCallable(globalThis["assert"]?.["sameValue"]);
$assert.notConstructable(globalThis["assert"]?.["sameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["sameValue"]), ['lastIndex'], globalThis["assert"]?.["sameValue"]);
$verifyProperty(globalThis["assert"]?.["sameValue"], "lastIndex", {
  value: true,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "sameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["executionorder"], 1n);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]), globalThis["g"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["iter"]), true);
$assert.notCallable(globalThis["iter"]);
$assert.notConstructable(globalThis["iter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]), [], globalThis["iter"]);
$assert.sameValue(globalThis["valueisset"], false);
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
