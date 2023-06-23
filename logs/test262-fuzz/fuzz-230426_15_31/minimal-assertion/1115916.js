// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["a"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["a"]), true);
$assert.notCallable(globalThis["a"]);
$assert.notConstructable(globalThis["a"]);
$assert.compareArray($Reflect_ownKeys(globalThis["a"]), ['length'], globalThis["a"]);
$verifyProperty(globalThis["a"], "length", {
  value: 0.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue(globalThis["assert"], 0.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["callbackfn"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["callbackfn"]), true);
$assert.callable(globalThis["callbackfn"]);
$assert.constructable(globalThis["callbackfn"]);
$assert.compareArray($Reflect_ownKeys(globalThis["callbackfn"]), ['length', 'name', 'prototype'], globalThis["callbackfn"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["callbackfn"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["callbackfn"]?.["prototype"]), true);
$assert.notCallable(globalThis["callbackfn"]?.["prototype"]);
$assert.notConstructable(globalThis["callbackfn"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["callbackfn"]?.["prototype"]), ['constructor'], globalThis["callbackfn"]?.["prototype"]);
$assert.sameValue(globalThis["callbackfn"]?.["prototype"]?.["constructor"], globalThis["callbackfn"]);
$verifyProperty(globalThis["callbackfn"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["callbackfn"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["callbackfn"], "name", {
  value: "callbackfn",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["callbackfn"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(globalThis["res"], false);
$assert.sameValue($Object_getPrototypeOf(globalThis["resArr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["resArr"]), true);
$assert.notCallable(globalThis["resArr"]);
$assert.notConstructable(globalThis["resArr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["resArr"]), ['length'], globalThis["resArr"]);
$verifyProperty(globalThis["resArr"], "length", {
  value: 0.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["srcArr"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["srcArr"]), true);
$assert.notCallable(globalThis["srcArr"]);
$assert.notConstructable(globalThis["srcArr"]);
$assert.compareArray($Reflect_ownKeys(globalThis["srcArr"]), ['0', 'length'], globalThis["srcArr"]);
$verifyProperty(globalThis["srcArr"], "length", {
  value: 1.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["srcArr"], "0", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
