// [EXIT] normal
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
$assert.compareArray($Reflect_ownKeys(globalThis["Test262Error"]), ['length', 'name', 'prototype'], globalThis["Test262Error"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', 'notSameValue', 'throws', '_toString'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["items"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["items"]), true);
$assert.notCallable(globalThis["items"]);
$assert.notConstructable(globalThis["items"]);
$assert.compareArray($Reflect_ownKeys(globalThis["items"]), ['undefined'], globalThis["items"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["items"]?.["undefined"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["items"]?.["undefined"]), true);
$assert.callable(globalThis["items"]?.["undefined"]);
$assert.constructable(globalThis["items"]?.["undefined"]);
$assert.compareArray($Reflect_ownKeys(globalThis["items"]?.["undefined"]), ['length', 'name', 'prototype'], globalThis["items"]?.["undefined"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["items"]?.["undefined"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["items"]?.["undefined"]?.["prototype"]), true);
$assert.notCallable(globalThis["items"]?.["undefined"]?.["prototype"]);
$assert.notConstructable(globalThis["items"]?.["undefined"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["items"]?.["undefined"]?.["prototype"]), ['constructor'], globalThis["items"]?.["undefined"]?.["prototype"]);
$assert.sameValue(globalThis["items"]?.["undefined"]?.["prototype"]?.["constructor"], globalThis["items"]?.["undefined"]);
$verifyProperty(globalThis["items"]?.["undefined"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["items"]?.["undefined"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["items"]?.["undefined"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["items"]?.["undefined"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["items"], "undefined", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["poisonedPrototypeLength"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["poisonedPrototypeLength"]), true);
$assert.callable(globalThis["poisonedPrototypeLength"]);
$assert.constructable(globalThis["poisonedPrototypeLength"]);
$assert.compareArray($Reflect_ownKeys(globalThis["poisonedPrototypeLength"]), ['length', 'name', 'prototype'], globalThis["poisonedPrototypeLength"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["poisonedPrototypeLength"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["poisonedPrototypeLength"]?.["prototype"]), true);
$assert.notCallable(globalThis["poisonedPrototypeLength"]?.["prototype"]);
$assert.notConstructable(globalThis["poisonedPrototypeLength"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["poisonedPrototypeLength"]?.["prototype"]), ['constructor', 'length'], globalThis["poisonedPrototypeLength"]?.["prototype"]);
$assert.sameValue(globalThis["poisonedPrototypeLength"]?.["prototype"]?.["constructor"], globalThis["poisonedPrototypeLength"]);
$verifyProperty(globalThis["poisonedPrototypeLength"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set), Function.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set), true);
$assert.callable(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set);
$assert.constructable(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set), ['length', 'name', 'prototype'], Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set);
$assert.sameValue($Object_getPrototypeOf(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]), true);
$assert.notCallable(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]);
$assert.notConstructable(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]), ['constructor'], Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]);
$assert.sameValue(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"]?.["constructor"], Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set);
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set, "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set, "name", {
  value: "set",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Object.getOwnPropertyDescriptor(globalThis["poisonedPrototypeLength"]?.["prototype"], "length")?.set, "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["poisonedPrototypeLength"]?.["prototype"], "length", {
  get: undefined,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["poisonedPrototypeLength"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["poisonedPrototypeLength"], "name", {
  value: "poisonedPrototypeLength",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["poisonedPrototypeLength"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
