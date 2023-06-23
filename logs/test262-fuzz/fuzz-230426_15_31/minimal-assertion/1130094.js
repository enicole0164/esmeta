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
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype'], globalThis["assert"]);
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
$verifyProperty(globalThis["assert"], "name", {
  value: "assert",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["error"]), URIError.prototype);
$assert.sameValue(Object.isExtensible(globalThis["error"]), true);
$assert.notCallable(globalThis["error"]);
$assert.notConstructable(globalThis["error"]);
$assert.compareArray($Reflect_ownKeys(globalThis["error"]), ['message'], globalThis["error"]);
$verifyProperty(globalThis["error"], "message", {
  value: "0",
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["i"], 6.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["isConfigurable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isConfigurable"]), true);
$assert.callable(globalThis["isConfigurable"]);
$assert.constructable(globalThis["isConfigurable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isConfigurable"]), ['length', 'name', 'prototype'], globalThis["isConfigurable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isConfigurable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isConfigurable"]?.["prototype"]), true);
$assert.notCallable(globalThis["isConfigurable"]?.["prototype"]);
$assert.notConstructable(globalThis["isConfigurable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isConfigurable"]?.["prototype"]), ['constructor'], globalThis["isConfigurable"]?.["prototype"]);
$assert.sameValue(globalThis["isConfigurable"]?.["prototype"]?.["constructor"], globalThis["isConfigurable"]);
$verifyProperty(globalThis["isConfigurable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isConfigurable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isConfigurable"], "name", {
  value: "isConfigurable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isConfigurable"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isSameValue"]), true);
$assert.callable(globalThis["isSameValue"]);
$assert.constructable(globalThis["isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isSameValue"]), ['length', 'name', 'prototype'], globalThis["isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isSameValue"]?.["prototype"]), ['constructor'], globalThis["isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["isSameValue"]?.["prototype"]?.["constructor"], globalThis["isSameValue"]);
$verifyProperty(globalThis["isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isSameValue"], "name", {
  value: "isSameValue",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["isWritable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isWritable"]), true);
$assert.callable(globalThis["isWritable"]);
$assert.constructable(globalThis["isWritable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isWritable"]), ['length', 'name', 'prototype'], globalThis["isWritable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["isWritable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["isWritable"]?.["prototype"]), true);
$assert.notCallable(globalThis["isWritable"]?.["prototype"]);
$assert.notConstructable(globalThis["isWritable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["isWritable"]?.["prototype"]), ['constructor'], globalThis["isWritable"]?.["prototype"]);
$assert.sameValue(globalThis["isWritable"]?.["prototype"]?.["constructor"], globalThis["isWritable"]);
$verifyProperty(globalThis["isWritable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isWritable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["isWritable"], "name", {
  value: "isWritable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["isWritable"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["message"], "my-message");
$assert.sameValue(globalThis["nativeError"], URIError);
$assert.sameValue($Object_getPrototypeOf(globalThis["nativeErrors"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["nativeErrors"]), true);
$assert.notCallable(globalThis["nativeErrors"]);
$assert.notConstructable(globalThis["nativeErrors"]);
$assert.compareArray($Reflect_ownKeys(globalThis["nativeErrors"]), ['0', '1', '2', '3', '4', '5', 'length'], globalThis["nativeErrors"]);
$assert.sameValue(globalThis["nativeErrors"]?.["4"], TypeError);
$verifyProperty(globalThis["nativeErrors"], "4", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["nativeErrors"]?.["2"], ReferenceError);
$verifyProperty(globalThis["nativeErrors"], "2", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["nativeErrors"], "length", {
  value: 6.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(globalThis["nativeErrors"]?.["1"], RangeError);
$verifyProperty(globalThis["nativeErrors"], "1", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["nativeErrors"]?.["0"], EvalError);
$verifyProperty(globalThis["nativeErrors"], "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["nativeErrors"]?.["3"], SyntaxError);
$verifyProperty(globalThis["nativeErrors"], "3", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["nativeErrors"]?.["5"], URIError);
$verifyProperty(globalThis["nativeErrors"], "5", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEqualTo"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEqualTo"]), true);
$assert.callable(globalThis["verifyEqualTo"]);
$assert.constructable(globalThis["verifyEqualTo"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEqualTo"]), ['length', 'name', 'prototype'], globalThis["verifyEqualTo"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyEqualTo"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyEqualTo"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyEqualTo"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyEqualTo"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyEqualTo"]?.["prototype"]), ['constructor'], globalThis["verifyEqualTo"]?.["prototype"]);
$assert.sameValue(globalThis["verifyEqualTo"]?.["prototype"]?.["constructor"], globalThis["verifyEqualTo"]);
$verifyProperty(globalThis["verifyEqualTo"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEqualTo"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyEqualTo"], "name", {
  value: "verifyEqualTo",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyEqualTo"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotWritable"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotWritable"]), true);
$assert.callable(globalThis["verifyNotWritable"]);
$assert.constructable(globalThis["verifyNotWritable"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotWritable"]), ['length', 'name', 'prototype'], globalThis["verifyNotWritable"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyNotWritable"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyNotWritable"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyNotWritable"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyNotWritable"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyNotWritable"]?.["prototype"]), ['constructor'], globalThis["verifyNotWritable"]?.["prototype"]);
$assert.sameValue(globalThis["verifyNotWritable"]?.["prototype"]?.["constructor"], globalThis["verifyNotWritable"]);
$verifyProperty(globalThis["verifyNotWritable"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotWritable"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyNotWritable"], "name", {
  value: "verifyNotWritable",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyNotWritable"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyProperty"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyProperty"]), true);
$assert.callable(globalThis["verifyProperty"]);
$assert.constructable(globalThis["verifyProperty"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyProperty"]), ['length', 'name', 'prototype'], globalThis["verifyProperty"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["verifyProperty"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["verifyProperty"]?.["prototype"]), true);
$assert.notCallable(globalThis["verifyProperty"]?.["prototype"]);
$assert.notConstructable(globalThis["verifyProperty"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["verifyProperty"]?.["prototype"]), ['constructor'], globalThis["verifyProperty"]?.["prototype"]);
$assert.sameValue(globalThis["verifyProperty"]?.["prototype"]?.["constructor"], globalThis["verifyProperty"]);
$verifyProperty(globalThis["verifyProperty"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyProperty"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["verifyProperty"], "name", {
  value: "verifyProperty",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["verifyProperty"], "length", {
  value: 4.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(await), Function.prototype);
$assert.sameValue(Object.isExtensible(await), true);
$assert.callable(await);
$assert.constructable(await);
$assert.compareArray($Reflect_ownKeys(await), ['length', 'name', 'prototype'], await);
$assert.sameValue($Object_getPrototypeOf(await?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(await?.["prototype"]), true);
$assert.notCallable(await?.["prototype"]);
$assert.notConstructable(await?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(await?.["prototype"]), ['constructor'], await?.["prototype"]);
$assert.sameValue(await?.["prototype"]?.["constructor"], await);
$verifyProperty(await?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(await, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(await, "name", {
  value: "await",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(await, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(x, undefined);
