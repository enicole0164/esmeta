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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.notCallable(globalThis["assert"]);
$assert.notConstructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['isExtensible'], globalThis["assert"]);
$verifyProperty(globalThis["assert"], "isExtensible", {
  value: true,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["fn"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["fn"]), true);
$assert.callable(globalThis["fn"]);
$assert.notConstructable(globalThis["fn"]);
$assert.compareArray($Reflect_ownKeys(globalThis["fn"]), ['length', 'name'], globalThis["fn"]);
$verifyProperty(globalThis["fn"], "name", {
  value: "fn",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["fn"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(async, undefined);
