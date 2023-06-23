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
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONOTEVALUATE"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONOTEVALUATE"]), true);
$assert.callable(globalThis["$DONOTEVALUATE"]);
$assert.constructable(globalThis["$DONOTEVALUATE"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONOTEVALUATE"]), ['length', 'name', 'prototype'], globalThis["$DONOTEVALUATE"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["$DONOTEVALUATE"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["$DONOTEVALUATE"]?.["prototype"]), true);
$assert.notCallable(globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.notConstructable(globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["$DONOTEVALUATE"]?.["prototype"]), ['constructor'], globalThis["$DONOTEVALUATE"]?.["prototype"]);
$assert.sameValue(globalThis["$DONOTEVALUATE"]?.["prototype"]?.["constructor"], globalThis["$DONOTEVALUATE"]);
$verifyProperty(globalThis["$DONOTEVALUATE"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "name", {
  value: "$DONOTEVALUATE",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["$DONOTEVALUATE"], "length", {
  value: 0.0,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]), true);
$assert.callable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.constructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), true);
$assert.notCallable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.notConstructable(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]), ['constructor'], globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]);
$assert.sameValue(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"]?.["constructor"], globalThis["Test262Error"]?.["prototype"]?.["toString"]);
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["Test262Error"]?.["prototype"]?.["toString"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
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
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'sameValue', 'notSameValue', 'throws', '_toString'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]), true);
$assert.callable(globalThis["assert"]?.["_isSameValue"]);
$assert.constructable(globalThis["assert"]?.["_isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["_isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["_isSameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["_isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["_isSameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["_isSameValue"]);
$verifyProperty(globalThis["assert"]?.["_isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["_isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "_isSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]), true);
$assert.callable(globalThis["assert"]?.["notSameValue"]);
$assert.constructable(globalThis["assert"]?.["notSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["notSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["notSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["notSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["notSameValue"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["notSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["notSameValue"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["notSameValue"]);
$verifyProperty(globalThis["assert"]?.["notSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["notSameValue"], "length", {
  value: 3.0,
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
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["sameValue"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "sameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["callCount"], 1.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["gen"]), AsyncGeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["gen"]), true);
$assert.callable(globalThis["gen"]);
$assert.notConstructable(globalThis["gen"]);
$assert.compareArray($Reflect_ownKeys(globalThis["gen"]), ['length', 'name', 'prototype'], globalThis["gen"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["gen"]?.["prototype"]), AsyncGeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["gen"]?.["prototype"]), true);
$assert.notCallable(globalThis["gen"]?.["prototype"]);
$assert.notConstructable(globalThis["gen"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["gen"]?.["prototype"]), [], globalThis["gen"]?.["prototype"]);
$verifyProperty(globalThis["gen"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["gen"], "name", {
  value: "gen",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["gen"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["iter"]), globalThis["gen"]?.["prototype"]);
$assert.sameValue(Object.isExtensible(globalThis["iter"]), true);
$assert.notCallable(globalThis["iter"]);
$assert.notConstructable(globalThis["iter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["iter"]), [], globalThis["iter"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]), true);
$assert.notCallable(globalThis["log"]);
$assert.notConstructable(globalThis["log"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'length'], globalThis["log"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["4"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["4"]), true);
$assert.notCallable(globalThis["log"]?.["4"]);
$assert.notConstructable(globalThis["log"]?.["4"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["4"]), ['name', 'thisValue'], globalThis["log"]?.["4"]);
$verifyProperty(globalThis["log"]?.["4"], "name", {
  value: "get throw done (1)",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["4"]?.["thisValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["4"]?.["thisValue"]), true);
$assert.notCallable(globalThis["log"]?.["4"]?.["thisValue"]);
$assert.notConstructable(globalThis["log"]?.["4"]?.["thisValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["4"]?.["thisValue"]), ['name', 'value', 'done'], globalThis["log"]?.["4"]?.["thisValue"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get, "name", {
  value: "get done",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "done")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["4"]?.["thisValue"], "done", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get, "name", {
  value: "get value",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["4"]?.["thisValue"], "value")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["4"]?.["thisValue"], "value", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["4"]?.["thisValue"], "name", {
  value: "throw-result-1",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["4"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "4", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["2"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["2"]), true);
$assert.notCallable(globalThis["log"]?.["2"]);
$assert.notConstructable(globalThis["log"]?.["2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["2"]), ['name', 'thisValue'], globalThis["log"]?.["2"]);
$verifyProperty(globalThis["log"]?.["2"], "name", {
  value: "get throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["2"]?.["thisValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["2"]?.["thisValue"]), true);
$assert.notCallable(globalThis["log"]?.["2"]?.["thisValue"]);
$assert.notConstructable(globalThis["log"]?.["2"]?.["thisValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["2"]?.["thisValue"]), ['name', 'next', 'throw'], globalThis["log"]?.["2"]?.["thisValue"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get, "name", {
  value: "get throw",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "throw")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["2"]?.["thisValue"], "throw", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get, "name", {
  value: "get next",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["2"]?.["thisValue"], "next")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["2"]?.["thisValue"], "next", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["2"]?.["thisValue"], "name", {
  value: "syncIterator",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["2"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "2", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["9"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["9"]), true);
$assert.notCallable(globalThis["log"]?.["9"]);
$assert.notConstructable(globalThis["log"]?.["9"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["9"]), ['name', 'thisValue'], globalThis["log"]?.["9"]);
$verifyProperty(globalThis["log"]?.["9"], "name", {
  value: "get throw value (2)",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["9"]?.["thisValue"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["9"]?.["thisValue"]), true);
$assert.notCallable(globalThis["log"]?.["9"]?.["thisValue"]);
$assert.notConstructable(globalThis["log"]?.["9"]?.["thisValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["9"]?.["thisValue"]), ['name', 'value', 'done'], globalThis["log"]?.["9"]?.["thisValue"]);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get, "name", {
  value: "get done",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "done")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["9"]?.["thisValue"], "done", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get), ['length', 'name'], Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get, "name", {
  value: "get value",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["log"]?.["9"]?.["thisValue"], "value")?.get, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["9"]?.["thisValue"], "value", {
  set: undefined,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["9"]?.["thisValue"], "name", {
  value: "throw-result-2",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["9"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "9", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["7"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["7"]), true);
$assert.notCallable(globalThis["log"]?.["7"]);
$assert.notConstructable(globalThis["log"]?.["7"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["7"]), ['name', 'thisValue', 'args'], globalThis["log"]?.["7"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["7"]?.["args"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["7"]?.["args"]), true);
$assert.notCallable(globalThis["log"]?.["7"]?.["args"]);
$assert.notConstructable(globalThis["log"]?.["7"]?.["args"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["7"]?.["args"]), ['0', 'length'], globalThis["log"]?.["7"]?.["args"]);
$verifyProperty(globalThis["log"]?.["7"]?.["args"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["log"]?.["7"]?.["args"], "0", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["7"], "args", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["7"], "name", {
  value: "call throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["log"]?.["7"]?.["thisValue"], globalThis["log"]?.["2"]?.["thisValue"]);
$verifyProperty(globalThis["log"]?.["7"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "7", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["10"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["10"]), true);
$assert.notCallable(globalThis["log"]?.["10"]);
$assert.notConstructable(globalThis["log"]?.["10"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["10"]), ['name', 'value'], globalThis["log"]?.["10"]);
$verifyProperty(globalThis["log"]?.["10"], "value", {
  value: "throw-value-2",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["10"], "name", {
  value: "after yield*",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "10", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "length", {
  value: 11.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["8"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["8"]), true);
$assert.notCallable(globalThis["log"]?.["8"]);
$assert.notConstructable(globalThis["log"]?.["8"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["8"]), ['name', 'thisValue'], globalThis["log"]?.["8"]);
$verifyProperty(globalThis["log"]?.["8"], "name", {
  value: "get throw done (2)",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["log"]?.["8"]?.["thisValue"], globalThis["log"]?.["9"]?.["thisValue"]);
$verifyProperty(globalThis["log"]?.["8"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "8", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["0"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["0"]), true);
$assert.notCallable(globalThis["log"]?.["0"]);
$assert.notConstructable(globalThis["log"]?.["0"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["0"]), ['name'], globalThis["log"]?.["0"]);
$verifyProperty(globalThis["log"]?.["0"], "name", {
  value: "before yield*",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["6"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["6"]), true);
$assert.notCallable(globalThis["log"]?.["6"]);
$assert.notConstructable(globalThis["log"]?.["6"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["6"]), ['name', 'thisValue'], globalThis["log"]?.["6"]);
$verifyProperty(globalThis["log"]?.["6"], "name", {
  value: "get throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["log"]?.["6"]?.["thisValue"], globalThis["log"]?.["2"]?.["thisValue"]);
$verifyProperty(globalThis["log"]?.["6"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "6", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["1"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["1"]), true);
$assert.notCallable(globalThis["log"]?.["1"]);
$assert.notConstructable(globalThis["log"]?.["1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["1"]), ['name'], globalThis["log"]?.["1"]);
$verifyProperty(globalThis["log"]?.["1"], "name", {
  value: "get next",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "1", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["3"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["3"]), true);
$assert.notCallable(globalThis["log"]?.["3"]);
$assert.notConstructable(globalThis["log"]?.["3"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["3"]), ['name', 'thisValue', 'args'], globalThis["log"]?.["3"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["3"]?.["args"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["3"]?.["args"]), true);
$assert.notCallable(globalThis["log"]?.["3"]?.["args"]);
$assert.notConstructable(globalThis["log"]?.["3"]?.["args"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["3"]?.["args"]), ['0', 'length'], globalThis["log"]?.["3"]?.["args"]);
$verifyProperty(globalThis["log"]?.["3"]?.["args"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["log"]?.["3"]?.["args"], "0", {
  value: "throw-arg-1",
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["3"], "args", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"]?.["3"], "name", {
  value: "call throw",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["log"]?.["3"]?.["thisValue"], globalThis["log"]?.["2"]?.["thisValue"]);
$verifyProperty(globalThis["log"]?.["3"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "3", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["log"]?.["5"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["log"]?.["5"]), true);
$assert.notCallable(globalThis["log"]?.["5"]);
$assert.notConstructable(globalThis["log"]?.["5"]);
$assert.compareArray($Reflect_ownKeys(globalThis["log"]?.["5"]), ['name', 'thisValue'], globalThis["log"]?.["5"]);
$verifyProperty(globalThis["log"]?.["5"], "name", {
  value: "get throw value (1)",
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["log"]?.["5"]?.["thisValue"], globalThis["log"]?.["4"]?.["thisValue"]);
$verifyProperty(globalThis["log"]?.["5"], "thisValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["log"], "5", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["obj"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["obj"]), true);
$assert.notCallable(globalThis["obj"]);
$assert.notConstructable(globalThis["obj"]);
$assert.compareArray($Reflect_ownKeys(globalThis["obj"]), [Symbol.iterator], globalThis["obj"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["obj"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["obj"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["obj"]?.[Symbol.iterator]);
$assert.notConstructable(globalThis["obj"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["obj"]?.[Symbol.iterator]), ['length', 'name'], globalThis["obj"]?.[Symbol.iterator]);
$verifyProperty(globalThis["obj"]?.[Symbol.iterator], "name", {
  value: "[Symbol.iterator]",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["obj"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["obj"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(C), Function.prototype);
$assert.sameValue(Object.isExtensible(C), true);
$assert.callable(C);
$assert.constructable(C);
$assert.compareArray($Reflect_ownKeys(C), ['length', 'name', 'prototype', 'gen'], C);
$assert.sameValue($Object_getPrototypeOf(C?.["prototype"]), Object.prototype);
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
$assert.sameValue(C?.["gen"], globalThis["gen"]);
$verifyProperty(C, "gen", {
  writable: true,
  enumerable: false,
  configurable: true,
});
