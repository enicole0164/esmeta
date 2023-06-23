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
$assert.sameValue(globalThis["exprValue"], undefined);
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["g"]), true);
$assert.callable(globalThis["g"]);
$assert.notConstructable(globalThis["g"]);
$assert.compareArray($Reflect_ownKeys(globalThis["g"]), ['length', 'name', 'prototype'], globalThis["g"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["g"]?.["prototype"]), GeneratorFunction.prototype.prototype);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["quickIter"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["quickIter"]), true);
$assert.notCallable(globalThis["quickIter"]);
$assert.notConstructable(globalThis["quickIter"]);
$assert.compareArray($Reflect_ownKeys(globalThis["quickIter"]), [Symbol.iterator], globalThis["quickIter"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["quickIter"]?.[Symbol.iterator]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["quickIter"]?.[Symbol.iterator]), true);
$assert.callable(globalThis["quickIter"]?.[Symbol.iterator]);
$assert.constructable(globalThis["quickIter"]?.[Symbol.iterator]);
$assert.compareArray($Reflect_ownKeys(globalThis["quickIter"]?.[Symbol.iterator]), ['length', 'name', 'prototype'], globalThis["quickIter"]?.[Symbol.iterator]);
$assert.sameValue($Object_getPrototypeOf(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]), true);
$assert.notCallable(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]);
$assert.notConstructable(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]), ['constructor'], globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]);
$assert.sameValue(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"]?.["constructor"], globalThis["quickIter"]?.[Symbol.iterator]);
$verifyProperty(globalThis["quickIter"]?.[Symbol.iterator]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["quickIter"]?.[Symbol.iterator], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["quickIter"]?.[Symbol.iterator], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["quickIter"]?.[Symbol.iterator], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["quickIter"], Symbol.iterator, {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["throwReceived"], 2222.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), AsyncFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name'], globalThis["x"]);
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
