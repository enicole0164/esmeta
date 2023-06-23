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
$assert.sameValue($Object_getPrototypeOf(globalThis["array"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["array"]), true);
$assert.notCallable(globalThis["array"]);
$assert.notConstructable(globalThis["array"]);
$assert.compareArray($Reflect_ownKeys(globalThis["array"]), ['length'], globalThis["array"]);
$verifyProperty(globalThis["array"], "length", {
  value: 20.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["array2"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["array2"]), true);
$assert.notCallable(globalThis["array2"]);
$assert.notConstructable(globalThis["array2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["array2"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', 'length'], globalThis["array2"]);
$verifyProperty(globalThis["array2"], "23", {
  value: 1023.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "2", {
  value: 1002.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "10", {
  value: 1010.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "17", {
  value: 1017.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "18", {
  value: 1018.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "0", {
  value: 1000.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "15", {
  value: 1015.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "4", {
  value: 1004.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "9", {
  value: 1009.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "22", {
  value: 1022.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "7", {
  value: 1007.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "14", {
  value: 1014.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "20", {
  value: 1020.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "11", {
  value: 1011.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "length", {
  value: 24.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["array2"], "21", {
  value: 1021.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "16", {
  value: 1016.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "13", {
  value: 1013.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "6", {
  value: 1006.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "1", {
  value: 1001.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "12", {
  value: 1012.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "8", {
  value: 1008.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "19", {
  value: 1019.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "3", {
  value: 1003.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array2"], "5", {
  value: 1005.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]), true);
$assert.callable(globalThis["assert"]);
$assert.constructable(globalThis["assert"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]), ['length', 'name', 'prototype', '_isSameValue', 'sameValue', 'notSameValue', 'throws', '_toString', 'compareArray'], globalThis["assert"]);
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
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["compareArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["compareArray"]), true);
$assert.callable(globalThis["assert"]?.["compareArray"]);
$assert.constructable(globalThis["assert"]?.["compareArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["compareArray"]), ['length', 'name', 'prototype'], globalThis["assert"]?.["compareArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["assert"]?.["compareArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["assert"]?.["compareArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.notConstructable(globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["assert"]?.["compareArray"]?.["prototype"]), ['constructor'], globalThis["assert"]?.["compareArray"]?.["prototype"]);
$assert.sameValue(globalThis["assert"]?.["compareArray"]?.["prototype"]?.["constructor"], globalThis["assert"]?.["compareArray"]);
$verifyProperty(globalThis["assert"]?.["compareArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"]?.["compareArray"], "length", {
  value: 3.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["assert"], "compareArray", {
  writable: true,
  enumerable: true,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]), true);
$assert.callable(globalThis["compareArray"]);
$assert.constructable(globalThis["compareArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]), ['length', 'name', 'prototype', 'isSameValue', 'format'], globalThis["compareArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["isSameValue"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["isSameValue"]), true);
$assert.callable(globalThis["compareArray"]?.["isSameValue"]);
$assert.constructable(globalThis["compareArray"]?.["isSameValue"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["isSameValue"]), ['length', 'name', 'prototype'], globalThis["compareArray"]?.["isSameValue"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["isSameValue"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["isSameValue"]?.["prototype"]?.["constructor"], globalThis["compareArray"]?.["isSameValue"]);
$verifyProperty(globalThis["compareArray"]?.["isSameValue"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["isSameValue"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "isSameValue", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["prototype"]?.["constructor"], globalThis["compareArray"]);
$verifyProperty(globalThis["compareArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"], "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["format"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["format"]), true);
$assert.callable(globalThis["compareArray"]?.["format"]);
$assert.constructable(globalThis["compareArray"]?.["format"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["format"]), ['length', 'name', 'prototype'], globalThis["compareArray"]?.["format"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["compareArray"]?.["format"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["compareArray"]?.["format"]?.["prototype"]), true);
$assert.notCallable(globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.notConstructable(globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["compareArray"]?.["format"]?.["prototype"]), ['constructor'], globalThis["compareArray"]?.["format"]?.["prototype"]);
$assert.sameValue(globalThis["compareArray"]?.["format"]?.["prototype"]?.["constructor"], globalThis["compareArray"]?.["format"]);
$verifyProperty(globalThis["compareArray"]?.["format"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"]?.["format"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "format", {
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["compareArray"], "name", {
  value: "compareArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["currArray"])), Array.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["currArray"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["currArray"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["currArray"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["currArray"])), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285', '286', '287', '288', '289', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '300', '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '324', '325', '326', '327', '328', '329', '330', '331', '332', '333', '334', '335', '336', '337', '338', '339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '349', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369', '370', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '383', '384', '385', '386', '387', '388', '389', '390', '391', '392', '393', '394', '395', '396', '397', '398', '399', '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '419', '420', '421', '422', '423', '424', '425', '426', '427', '428', '429', '430', '431', '432', '433', '434', '435', '436', '437', '438', '439', '440', '441', '442', '443', '444', '445', '446', '447', '448', '449', '450', '451', '452', '453', '454', '455', '456', '457', '458', '459', '460', '461', '462', '463', '464', '465', '466', '467', '468', '469', '470', '471', '472', '473', '474', '475', '476', '477', '478', '479', '480', '481', '482', '483', '484', '485', '486', '487', '488', '489', '490', '491', '492', '493', '494', '495', '496', '497', '498', '499', '500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534', '535', '536', '537', '538', '539', '540', '541', '542', '543', '544', '545', '546', '547', '548', '549', '550', '551', '552', '553', '554', '555', '556', '557', '558', '559', '560', '561', '562', '563', '564', '565', '566', '567', '568', '569', '570', '571', '572', '573', '574', '575', '576', '577', '578', '579', '580', '581', '582', '583', '584', '585', '586', '587', '588', '589', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599', '600', '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618', '619', '620', '621', '622', '623', '624', '625', '626', '627', '628', '629', '630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '640', '641', '642', '643', '644', '645', '646', '647', '648', '649', '650', '651', '652', '653', '654', '655', '656', '657', '658', '659', '660', '661', '662', '663', '664', '665', '666', '667', '668', '669', '670', '671', '672', '673', '674', '675', '676', '677', '678', '679', '680', '681', '682', '683', '684', '685', '686', '687', '688', '689', '690', '691', '692', '693', '694', '695', '696', '697', '698', '699', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732', '733', '734', '735', '736', '737', '738', '739', '740', '741', '742', '743', '744', '745', '746', '747', '748', '749', '750', '751', '752', '753', '754', '755', '756', '757', '758', '759', '760', '761', '762', '763', '764', '765', '766', '767', '768', '769', '770', '771', '772', '773', '774', '775', '776', '777', '778', '779', '780', '781', '782', '783', '784', '785', '786', '787', '788', '789', '790', '791', '792', '793', '794', '795', '796', '797', '798', '799', '800', '801', '802', '803', '804', '805', '806', '807', '808', '809', '810', '811', '812', '813', '814', '815', '816', '817', '818', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '834', '835', '836', '837', '838', '839', '840', '841', '842', '843', '844', '845', '846', '847', '848', '849', '850', '851', '852', '853', '854', '855', '856', '857', '858', '859', '860', '861', '862', '863', '864', '865', '866', '867', '868', '869', '870', '871', '872', '873', '874', '875', '876', '877', '878', '879', '880', '881', '882', '883', '884', '885', '886', '887', '888', '889', '890', '891', '892', '893', '894', '895', '896', '897', '898', '899', '900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '935', '936', '937', '938', '939', '940', '941', '942', '943', '944', '945', '946', '947', '948', '949', '950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '960', '961', '962', '963', '964', '965', '966', '967', '968', '969', '970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '990', '991', '992', '993', '994', '995', '996', '997', '998', '999', '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010', '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018', '1019', '1020', '1021', '1022', '1023', 'length'], $Object_getPrototypeOf(globalThis["currArray"]));
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "250", {
  value: 250.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "732", {
  value: 732.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "980", {
  value: 980.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "936", {
  value: 936.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "150", {
  value: 150.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "904", {
  value: 904.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "188", {
  value: 188.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "601", {
  value: 601.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "876", {
  value: 876.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "137", {
  value: 137.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "633", {
  value: 633.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "821", {
  value: 821.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "733", {
  value: 733.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "580", {
  value: 580.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "445", {
  value: 445.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "692", {
  value: 692.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "718", {
  value: 718.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "976", {
  value: 976.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "664", {
  value: 664.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "746", {
  value: 746.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "192", {
  value: 192.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "130", {
  value: 130.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "867", {
  value: 867.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "158", {
  value: 158.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "970", {
  value: 970.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "706", {
  value: 706.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "526", {
  value: 526.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "274", {
  value: 274.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "800", {
  value: 800.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "806", {
  value: 806.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "552", {
  value: 552.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "450", {
  value: 450.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "740", {
  value: 740.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "735", {
  value: 735.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "667", {
  value: 667.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "855", {
  value: 855.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "628", {
  value: 628.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "446", {
  value: 446.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "725", {
  value: 725.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "915", {
  value: 915.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "828", {
  value: 828.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "249", {
  value: 249.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "273", {
  value: 273.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "889", {
  value: 889.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "688", {
  value: 688.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "369", {
  value: 369.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "44", {
  value: 44.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "315", {
  value: 315.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "152", {
  value: 152.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "283", {
  value: 283.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "585", {
  value: 585.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "637", {
  value: 637.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "145", {
  value: 145.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "613", {
  value: 613.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "561", {
  value: 561.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "384", {
  value: 384.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "771", {
  value: 771.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "529", {
  value: 529.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "589", {
  value: 589.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "563", {
  value: 563.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "814", {
  value: 814.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "767", {
  value: 767.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "116", {
  value: 116.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "302", {
  value: 302.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "390", {
  value: 390.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "372", {
  value: 372.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "977", {
  value: 977.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "836", {
  value: 836.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "520", {
  value: 520.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "15", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "662", {
  value: 662.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "903", {
  value: 903.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "312", {
  value: 312.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "452", {
  value: 452.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "716", {
  value: 716.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "593", {
  value: 593.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "466", {
  value: 466.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "309", {
  value: 309.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "607", {
  value: 607.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "176", {
  value: 176.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "704", {
  value: 704.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "932", {
  value: 932.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "65", {
  value: 65.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "902", {
  value: 902.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "67", {
  value: 67.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "4", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "887", {
  value: 887.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "934", {
  value: 934.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "123", {
  value: 123.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "297", {
  value: 297.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "214", {
  value: 214.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "313", {
  value: 313.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "435", {
  value: 435.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "77", {
  value: 77.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "927", {
  value: 927.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "940", {
  value: 940.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "458", {
  value: 458.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "213", {
  value: 213.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "358", {
  value: 358.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "380", {
  value: 380.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "491", {
  value: 491.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "987", {
  value: 987.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "318", {
  value: 318.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "311", {
  value: 311.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "638", {
  value: 638.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "205", {
  value: 205.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "794", {
  value: 794.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "874", {
  value: 874.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "895", {
  value: 895.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "560", {
  value: 560.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "522", {
  value: 522.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "726", {
  value: 726.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "793", {
  value: 793.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "409", {
  value: 409.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "257", {
  value: 257.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1018", {
  value: 1018.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "43", {
  value: 43.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "228", {
  value: 228.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "222", {
  value: 222.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "202", {
  value: 202.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "422", {
  value: 422.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "893", {
  value: 893.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "997", {
  value: 997.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "469", {
  value: 469.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "811", {
  value: 811.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1023", {
  value: 1023.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "986", {
  value: 986.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "841", {
  value: 841.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "447", {
  value: 447.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "23", {
  value: 23.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "92", {
  value: 92.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "233", {
  value: 233.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "958", {
  value: 958.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "719", {
  value: 719.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "693", {
  value: 693.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "415", {
  value: 415.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "140", {
  value: 140.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "338", {
  value: 338.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "186", {
  value: 186.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "785", {
  value: 785.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "853", {
  value: 853.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "945", {
  value: 945.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "788", {
  value: 788.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "28", {
  value: 28.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "596", {
  value: 596.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "933", {
  value: 933.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "827", {
  value: 827.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "837", {
  value: 837.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "264", {
  value: 264.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "588", {
  value: 588.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "404", {
  value: 404.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "845", {
  value: 845.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "797", {
  value: 797.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "482", {
  value: 482.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "271", {
  value: 271.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "544", {
  value: 544.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "148", {
  value: 148.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "221", {
  value: 221.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "175", {
  value: 175.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "805", {
  value: 805.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "89", {
  value: 89.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "468", {
  value: 468.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "289", {
  value: 289.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "856", {
  value: 856.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1005", {
  value: 1005.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "399", {
  value: 399.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "443", {
  value: 443.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "30", {
  value: 30.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "614", {
  value: 614.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "348", {
  value: 348.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1012", {
  value: 1012.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "453", {
  value: 453.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "750", {
  value: 750.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "715", {
  value: 715.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "838", {
  value: 838.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "754", {
  value: 754.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "815", {
  value: 815.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "868", {
  value: 868.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "103", {
  value: 103.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "448", {
  value: 448.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "701", {
  value: 701.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "40", {
  value: 40.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "912", {
  value: 912.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "885", {
  value: 885.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "354", {
  value: 354.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "72", {
  value: 72.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "247", {
  value: 247.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "739", {
  value: 739.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "39", {
  value: 39.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "230", {
  value: 230.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "641", {
  value: 641.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "547", {
  value: 547.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "485", {
  value: 485.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "737", {
  value: 737.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "622", {
  value: 622.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "46", {
  value: 46.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "394", {
  value: 394.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "294", {
  value: 294.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "921", {
  value: 921.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "575", {
  value: 575.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "153", {
  value: 153.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "378", {
  value: 378.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "803", {
  value: 803.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "629", {
  value: 629.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "441", {
  value: 441.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "826", {
  value: 826.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "959", {
  value: 959.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "86", {
  value: 86.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "457", {
  value: 457.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "488", {
  value: 488.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "387", {
  value: 387.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "661", {
  value: 661.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "559", {
  value: 559.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "682", {
  value: 682.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "174", {
  value: 174.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "749", {
  value: 749.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "255", {
  value: 255.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "490", {
  value: 490.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "503", {
  value: 503.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "442", {
  value: 442.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "506", {
  value: 506.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "536", {
  value: 536.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "989", {
  value: 989.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "504", {
  value: 504.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "70", {
  value: 70.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "253", {
  value: 253.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "524", {
  value: 524.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "659", {
  value: 659.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "356", {
  value: 356.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "340", {
  value: 340.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "61", {
  value: 61.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "267", {
  value: 267.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "996", {
  value: 996.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "831", {
  value: 831.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "492", {
  value: 492.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "822", {
  value: 822.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "321", {
  value: 321.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "840", {
  value: 840.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "349", {
  value: 349.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "609", {
  value: 609.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "308", {
  value: 308.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "801", {
  value: 801.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "938", {
  value: 938.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "280", {
  value: 280.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "508", {
  value: 508.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "69", {
  value: 69.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "818", {
  value: 818.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "125", {
  value: 125.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "501", {
  value: 501.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "881", {
  value: 881.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "860", {
  value: 860.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "752", {
  value: 752.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "861", {
  value: 861.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "48", {
  value: 48.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "772", {
  value: 772.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "266", {
  value: 266.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "242", {
  value: 242.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "993", {
  value: 993.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "991", {
  value: 991.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "600", {
  value: 600.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "582", {
  value: 582.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "581", {
  value: 581.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "972", {
  value: 972.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "873", {
  value: 873.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "646", {
  value: 646.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "244", {
  value: 244.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "834", {
  value: 834.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "653", {
  value: 653.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "835", {
  value: 835.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "943", {
  value: 943.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "554", {
  value: 554.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "870", {
  value: 870.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "100", {
  value: 100.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "78", {
  value: 78.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "392", {
  value: 392.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "660", {
  value: 660.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "454", {
  value: 454.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "368", {
  value: 368.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "50", {
  value: 50.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "95", {
  value: 95.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "621", {
  value: 621.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "961", {
  value: 961.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "577", {
  value: 577.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "133", {
  value: 133.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "694", {
  value: 694.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "334", {
  value: 334.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "550", {
  value: 550.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "217", {
  value: 217.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "847", {
  value: 847.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "121", {
  value: 121.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "944", {
  value: 944.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "729", {
  value: 729.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "99", {
  value: 99.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "421", {
  value: 421.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "181", {
  value: 181.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "931", {
  value: 931.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "444", {
  value: 444.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "331", {
  value: 331.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "381", {
  value: 381.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "432", {
  value: 432.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "564", {
  value: 564.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "519", {
  value: 519.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "555", {
  value: 555.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "24", {
  value: 24.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "438", {
  value: 438.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "852", {
  value: 852.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "518", {
  value: 518.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "371", {
  value: 371.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "436", {
  value: 436.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "753", {
  value: 753.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "430", {
  value: 430.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "879", {
  value: 879.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "990", {
  value: 990.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "303", {
  value: 303.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "156", {
  value: 156.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "470", {
  value: 470.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "54", {
  value: 54.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "2", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "33", {
  value: 33.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "324", {
  value: 324.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "624", {
  value: 624.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "545", {
  value: 545.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "530", {
  value: 530.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "941", {
  value: 941.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "816", {
  value: 816.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "899", {
  value: 899.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "747", {
  value: 747.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "299", {
  value: 299.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "275", {
  value: 275.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "678", {
  value: 678.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "375", {
  value: 375.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "711", {
  value: 711.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "107", {
  value: 107.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "102", {
  value: 102.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "948", {
  value: 948.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "586", {
  value: 586.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "388", {
  value: 388.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "9", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "489", {
  value: 489.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "55", {
  value: 55.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "211", {
  value: 211.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "269", {
  value: 269.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "56", {
  value: 56.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "642", {
  value: 642.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "548", {
  value: 548.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "60", {
  value: 60.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "786", {
  value: 786.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1017", {
  value: 1017.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "410", {
  value: 410.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "535", {
  value: 535.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "282", {
  value: 282.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1021", {
  value: 1021.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "25", {
  value: 25.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "824", {
  value: 824.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "534", {
  value: 534.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "648", {
  value: 648.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "988", {
  value: 988.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "22", {
  value: 22.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "656", {
  value: 656.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "34", {
  value: 34.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "477", {
  value: 477.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "350", {
  value: 350.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "798", {
  value: 798.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "219", {
  value: 219.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "537", {
  value: 537.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "742", {
  value: 742.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1019", {
  value: 1019.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "191", {
  value: 191.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "226", {
  value: 226.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "949", {
  value: 949.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "14", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "574", {
  value: 574.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "846", {
  value: 846.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "532", {
  value: 532.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "953", {
  value: 953.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "669", {
  value: 669.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "640", {
  value: 640.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "908", {
  value: 908.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "182", {
  value: 182.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "105", {
  value: 105.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "203", {
  value: 203.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "31", {
  value: 31.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "122", {
  value: 122.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "440", {
  value: 440.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "47", {
  value: 47.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "7", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "300", {
  value: 300.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "946", {
  value: 946.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "570", {
  value: 570.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "184", {
  value: 184.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1015", {
  value: 1015.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "68", {
  value: 68.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "475", {
  value: 475.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "37", {
  value: 37.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "293", {
  value: 293.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "966", {
  value: 966.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "385", {
  value: 385.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "238", {
  value: 238.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "833", {
  value: 833.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "124", {
  value: 124.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "224", {
  value: 224.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "699", {
  value: 699.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "971", {
  value: 971.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "713", {
  value: 713.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "562", {
  value: 562.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "892", {
  value: 892.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "583", {
  value: 583.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "344", {
  value: 344.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "278", {
  value: 278.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "906", {
  value: 906.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "517", {
  value: 517.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "644", {
  value: 644.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "880", {
  value: 880.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "890", {
  value: 890.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "159", {
  value: 159.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "167", {
  value: 167.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "200", {
  value: 200.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "911", {
  value: 911.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "947", {
  value: 947.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1004", {
  value: 1004.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "177", {
  value: 177.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "190", {
  value: 190.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "91", {
  value: 91.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "291", {
  value: 291.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "676", {
  value: 676.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "199", {
  value: 199.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "10", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "484", {
  value: 484.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "509", {
  value: 509.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "576", {
  value: 576.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "357", {
  value: 357.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "408", {
  value: 408.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "112", {
  value: 112.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "471", {
  value: 471.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "917", {
  value: 917.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1008", {
  value: 1008.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "367", {
  value: 367.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "671", {
  value: 671.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "17", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "179", {
  value: 179.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "220", {
  value: 220.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "472", {
  value: 472.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "626", {
  value: 626.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "758", {
  value: 758.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "807", {
  value: 807.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "135", {
  value: 135.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "778", {
  value: 778.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "842", {
  value: 842.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "128", {
  value: 128.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "734", {
  value: 734.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "198", {
  value: 198.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "317", {
  value: 317.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "76", {
  value: 76.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "981", {
  value: 981.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "635", {
  value: 635.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "407", {
  value: 407.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "877", {
  value: 877.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "528", {
  value: 528.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "568", {
  value: 568.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "113", {
  value: 113.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "259", {
  value: 259.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "215", {
  value: 215.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "360", {
  value: 360.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "223", {
  value: 223.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "417", {
  value: 417.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "763", {
  value: 763.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "length", {
  value: 1024.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "26", {
  value: 26.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "160", {
  value: 160.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "423", {
  value: 423.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "87", {
  value: 87.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "424", {
  value: 424.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "428", {
  value: 428.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "541", {
  value: 541.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "434", {
  value: 434.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "216", {
  value: 216.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "301", {
  value: 301.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "119", {
  value: 119.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "272", {
  value: 272.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "784", {
  value: 784.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1022", {
  value: 1022.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "975", {
  value: 975.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "171", {
  value: 171.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "823", {
  value: 823.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "481", {
  value: 481.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "88", {
  value: 88.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "20", {
  value: 20.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "598", {
  value: 598.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1001", {
  value: 1001.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "402", {
  value: 402.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "268", {
  value: 268.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "258", {
  value: 258.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "736", {
  value: 736.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "636", {
  value: 636.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "11", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "670", {
  value: 670.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "994", {
  value: 994.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "854", {
  value: 854.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "377", {
  value: 377.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "731", {
  value: 731.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "743", {
  value: 743.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "146", {
  value: 146.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "163", {
  value: 163.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "395", {
  value: 395.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "789", {
  value: 789.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "611", {
  value: 611.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "142", {
  value: 142.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "542", {
  value: 542.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "804", {
  value: 804.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "209", {
  value: 209.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "416", {
  value: 416.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1006", {
  value: 1006.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "995", {
  value: 995.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "165", {
  value: 165.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "829", {
  value: 829.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "891", {
  value: 891.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "126", {
  value: 126.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "639", {
  value: 639.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "982", {
  value: 982.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1002", {
  value: 1002.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "707", {
  value: 707.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "918", {
  value: 918.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "127", {
  value: 127.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "382", {
  value: 382.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "690", {
  value: 690.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "336", {
  value: 336.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "597", {
  value: 597.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "741", {
  value: 741.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "590", {
  value: 590.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "510", {
  value: 510.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "49", {
  value: 49.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "495", {
  value: 495.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1014", {
  value: 1014.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "21", {
  value: 21.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "557", {
  value: 557.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "304", {
  value: 304.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "141", {
  value: 141.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "954", {
  value: 954.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "751", {
  value: 751.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "281", {
  value: 281.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "839", {
  value: 839.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "109", {
  value: 109.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "605", {
  value: 605.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "525", {
  value: 525.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "658", {
  value: 658.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "928", {
  value: 928.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "523", {
  value: 523.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "558", {
  value: 558.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "848", {
  value: 848.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "897", {
  value: 897.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "98", {
  value: 98.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "38", {
  value: 38.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "935", {
  value: 935.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "366", {
  value: 366.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "462", {
  value: 462.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "916", {
  value: 916.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1009", {
  value: 1009.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "578", {
  value: 578.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "521", {
  value: 521.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "617", {
  value: 617.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "745", {
  value: 745.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "456", {
  value: 456.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "261", {
  value: 261.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "587", {
  value: 587.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "218", {
  value: 218.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "787", {
  value: 787.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "603", {
  value: 603.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "549", {
  value: 549.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "630", {
  value: 630.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "386", {
  value: 386.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "602", {
  value: 602.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "144", {
  value: 144.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "16", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "81", {
  value: 81.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "556", {
  value: 556.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "460", {
  value: 460.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "649", {
  value: 649.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "923", {
  value: 923.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "13", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "245", {
  value: 245.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "370", {
  value: 370.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "884", {
  value: 884.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "779", {
  value: 779.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "277", {
  value: 277.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "539", {
  value: 539.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "830", {
  value: 830.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "234", {
  value: 234.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "476", {
  value: 476.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "691", {
  value: 691.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "850", {
  value: 850.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "608", {
  value: 608.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "328", {
  value: 328.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "505", {
  value: 505.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "612", {
  value: 612.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "84", {
  value: 84.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "322", {
  value: 322.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "206", {
  value: 206.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "41", {
  value: 41.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "832", {
  value: 832.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "978", {
  value: 978.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "6", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "712", {
  value: 712.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "507", {
  value: 507.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "680", {
  value: 680.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "926", {
  value: 926.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "132", {
  value: 132.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "12", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "499", {
  value: 499.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "968", {
  value: 968.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "769", {
  value: 769.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "654", {
  value: 654.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "310", {
  value: 310.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "412", {
  value: 412.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "85", {
  value: 85.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "168", {
  value: 168.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "672", {
  value: 672.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "461", {
  value: 461.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "710", {
  value: 710.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "414", {
  value: 414.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "110", {
  value: 110.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "755", {
  value: 755.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "863", {
  value: 863.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "429", {
  value: 429.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "727", {
  value: 727.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "697", {
  value: 697.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "101", {
  value: 101.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "696", {
  value: 696.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "139", {
  value: 139.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "714", {
  value: 714.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "675", {
  value: 675.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "155", {
  value: 155.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "425", {
  value: 425.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "405", {
  value: 405.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "64", {
  value: 64.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "391", {
  value: 391.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "306", {
  value: 306.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "323", {
  value: 323.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "343", {
  value: 343.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "57", {
  value: 57.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "32", {
  value: 32.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "262", {
  value: 262.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "979", {
  value: 979.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "869", {
  value: 869.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "479", {
  value: 479.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "700", {
  value: 700.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "66", {
  value: 66.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "240", {
  value: 240.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "265", {
  value: 265.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "770", {
  value: 770.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "965", {
  value: 965.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "426", {
  value: 426.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "930", {
  value: 930.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "237", {
  value: 237.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "592", {
  value: 592.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "464", {
  value: 464.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "665", {
  value: 665.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "792", {
  value: 792.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "878", {
  value: 878.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "131", {
  value: 131.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "459", {
  value: 459.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "134", {
  value: 134.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "151", {
  value: 151.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "256", {
  value: 256.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "851", {
  value: 851.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "27", {
  value: 27.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "295", {
  value: 295.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "634", {
  value: 634.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1016", {
  value: 1016.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "449", {
  value: 449.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "756", {
  value: 756.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "365", {
  value: 365.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "862", {
  value: 862.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1000", {
  value: 1000.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "286", {
  value: 286.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "129", {
  value: 129.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "498", {
  value: 498.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "166", {
  value: 166.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "296", {
  value: 296.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "776", {
  value: 776.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "685", {
  value: 685.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "473", {
  value: 473.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "681", {
  value: 681.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "212", {
  value: 212.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "565", {
  value: 565.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "623", {
  value: 623.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "546", {
  value: 546.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "820", {
  value: 820.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "723", {
  value: 723.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "913", {
  value: 913.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1020", {
  value: 1020.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "865", {
  value: 865.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "361", {
  value: 361.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "533", {
  value: 533.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "514", {
  value: 514.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "284", {
  value: 284.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "774", {
  value: 774.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "738", {
  value: 738.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "728", {
  value: 728.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "569", {
  value: 569.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "799", {
  value: 799.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "143", {
  value: 143.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "433", {
  value: 433.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "686", {
  value: 686.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "305", {
  value: 305.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "439", {
  value: 439.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "493", {
  value: 493.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "683", {
  value: 683.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "154", {
  value: 154.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "625", {
  value: 625.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "147", {
  value: 147.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "29", {
  value: 29.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "195", {
  value: 195.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "478", {
  value: 478.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "225", {
  value: 225.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "487", {
  value: 487.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "599", {
  value: 599.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "189", {
  value: 189.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "527", {
  value: 527.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "18", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "254", {
  value: 254.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "193", {
  value: 193.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "929", {
  value: 929.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "999", {
  value: 999.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "920", {
  value: 920.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "260", {
  value: 260.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "757", {
  value: 757.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "474", {
  value: 474.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "341", {
  value: 341.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "79", {
  value: 79.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "894", {
  value: 894.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1011", {
  value: 1011.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "782", {
  value: 782.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "314", {
  value: 314.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "497", {
  value: 497.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1013", {
  value: 1013.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "383", {
  value: 383.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "389", {
  value: 389.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "674", {
  value: 674.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1010", {
  value: 1010.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "337", {
  value: 337.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "888", {
  value: 888.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "379", {
  value: 379.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "724", {
  value: 724.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "172", {
  value: 172.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "817", {
  value: 817.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "227", {
  value: 227.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "451", {
  value: 451.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "270", {
  value: 270.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "316", {
  value: 316.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "759", {
  value: 759.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "766", {
  value: 766.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "898", {
  value: 898.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "651", {
  value: 651.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "871", {
  value: 871.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "431", {
  value: 431.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "480", {
  value: 480.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "346", {
  value: 346.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "149", {
  value: 149.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "937", {
  value: 937.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "515", {
  value: 515.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "164", {
  value: 164.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "604", {
  value: 604.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "844", {
  value: 844.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "857", {
  value: 857.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "345", {
  value: 345.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "169", {
  value: 169.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "615", {
  value: 615.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "465", {
  value: 465.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "42", {
  value: 42.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "616", {
  value: 616.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "180", {
  value: 180.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "36", {
  value: 36.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "721", {
  value: 721.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "775", {
  value: 775.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "859", {
  value: 859.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "248", {
  value: 248.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "502", {
  value: 502.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "960", {
  value: 960.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "955", {
  value: 955.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "730", {
  value: 730.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "246", {
  value: 246.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "606", {
  value: 606.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "51", {
  value: 51.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "843", {
  value: 843.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "96", {
  value: 96.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "8", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "325", {
  value: 325.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "566", {
  value: 566.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "780", {
  value: 780.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "538", {
  value: 538.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "355", {
  value: 355.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "796", {
  value: 796.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "483", {
  value: 483.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "411", {
  value: 411.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1007", {
  value: 1007.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "207", {
  value: 207.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "922", {
  value: 922.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "307", {
  value: 307.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "591", {
  value: 591.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "819", {
  value: 819.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "584", {
  value: 584.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "45", {
  value: 45.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "689", {
  value: 689.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "319", {
  value: 319.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "437", {
  value: 437.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "94", {
  value: 94.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "19", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "288", {
  value: 288.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "543", {
  value: 543.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "825", {
  value: 825.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "173", {
  value: 173.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "717", {
  value: 717.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "531", {
  value: 531.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "950", {
  value: 950.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "329", {
  value: 329.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "909", {
  value: 909.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "619", {
  value: 619.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "494", {
  value: 494.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "290", {
  value: 290.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "1003", {
  value: 1003.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "808", {
  value: 808.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "93", {
  value: 93.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "187", {
  value: 187.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "117", {
  value: 117.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "695", {
  value: 695.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "353", {
  value: 353.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "362", {
  value: 362.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "210", {
  value: 210.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "650", {
  value: 650.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "901", {
  value: 901.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "162", {
  value: 162.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "762", {
  value: 762.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "197", {
  value: 197.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "347", {
  value: 347.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "781", {
  value: 781.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "748", {
  value: 748.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "196", {
  value: 196.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "398", {
  value: 398.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "427", {
  value: 427.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "486", {
  value: 486.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "108", {
  value: 108.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "63", {
  value: 63.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "579", {
  value: 579.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "551", {
  value: 551.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "111", {
  value: 111.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "332", {
  value: 332.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "791", {
  value: 791.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "810", {
  value: 810.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "62", {
  value: 62.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "397", {
  value: 397.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "194", {
  value: 194.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "351", {
  value: 351.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "924", {
  value: 924.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "858", {
  value: 858.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "90", {
  value: 90.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "420", {
  value: 420.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "463", {
  value: 463.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "744", {
  value: 744.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "3", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "984", {
  value: 984.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "53", {
  value: 53.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "5", {
  value: 5.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "298", {
  value: 298.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "760", {
  value: 760.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "363", {
  value: 363.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "864", {
  value: 864.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "403", {
  value: 403.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "204", {
  value: 204.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "287", {
  value: 287.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "201", {
  value: 201.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "364", {
  value: 364.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "567", {
  value: 567.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "620", {
  value: 620.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "74", {
  value: 74.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "677", {
  value: 677.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "962", {
  value: 962.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "684", {
  value: 684.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "75", {
  value: 75.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "967", {
  value: 967.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "320", {
  value: 320.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "496", {
  value: 496.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "136", {
  value: 136.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "229", {
  value: 229.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "705", {
  value: 705.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "896", {
  value: 896.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "413", {
  value: 413.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "761", {
  value: 761.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "809", {
  value: 809.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "883", {
  value: 883.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "400", {
  value: 400.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "157", {
  value: 157.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "795", {
  value: 795.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "500", {
  value: 500.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "208", {
  value: 208.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "376", {
  value: 376.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "97", {
  value: 97.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "708", {
  value: 708.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "963", {
  value: 963.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "910", {
  value: 910.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "956", {
  value: 956.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "925", {
  value: 925.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "330", {
  value: 330.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "231", {
  value: 231.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "702", {
  value: 702.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "396", {
  value: 396.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "374", {
  value: 374.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "352", {
  value: 352.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "645", {
  value: 645.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "279", {
  value: 279.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "339", {
  value: 339.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "333", {
  value: 333.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "643", {
  value: 643.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "882", {
  value: 882.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "118", {
  value: 118.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "71", {
  value: 71.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "652", {
  value: 652.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "467", {
  value: 467.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "618", {
  value: 618.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "59", {
  value: 59.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "511", {
  value: 511.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "82", {
  value: 82.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "80", {
  value: 80.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "886", {
  value: 886.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "663", {
  value: 663.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "939", {
  value: 939.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "952", {
  value: 952.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "573", {
  value: 573.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "698", {
  value: 698.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "703", {
  value: 703.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "872", {
  value: 872.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "764", {
  value: 764.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "327", {
  value: 327.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "335", {
  value: 335.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "777", {
  value: 777.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "73", {
  value: 73.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "974", {
  value: 974.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "178", {
  value: 178.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "687", {
  value: 687.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "185", {
  value: 185.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "326", {
  value: 326.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "285", {
  value: 285.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "52", {
  value: 52.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "866", {
  value: 866.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "610", {
  value: 610.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "919", {
  value: 919.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "666", {
  value: 666.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "957", {
  value: 957.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "631", {
  value: 631.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "812", {
  value: 812.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "657", {
  value: 657.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "263", {
  value: 263.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "813", {
  value: 813.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "572", {
  value: 572.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "138", {
  value: 138.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "183", {
  value: 183.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "455", {
  value: 455.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "647", {
  value: 647.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "768", {
  value: 768.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "720", {
  value: 720.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "232", {
  value: 232.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "513", {
  value: 513.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "773", {
  value: 773.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "83", {
  value: 83.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "722", {
  value: 722.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "243", {
  value: 243.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "673", {
  value: 673.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "553", {
  value: 553.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "236", {
  value: 236.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "942", {
  value: 942.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "292", {
  value: 292.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "668", {
  value: 668.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "373", {
  value: 373.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "571", {
  value: 571.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "790", {
  value: 790.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "964", {
  value: 964.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "875", {
  value: 875.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "241", {
  value: 241.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "115", {
  value: 115.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "998", {
  value: 998.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "406", {
  value: 406.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "114", {
  value: 114.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "35", {
  value: 35.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "401", {
  value: 401.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "393", {
  value: 393.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "969", {
  value: 969.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "516", {
  value: 516.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "985", {
  value: 985.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "632", {
  value: 632.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "783", {
  value: 783.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "104", {
  value: 104.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "120", {
  value: 120.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "512", {
  value: 512.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "359", {
  value: 359.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "235", {
  value: 235.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "251", {
  value: 251.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "595", {
  value: 595.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "627", {
  value: 627.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "992", {
  value: 992.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "594", {
  value: 594.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "58", {
  value: 58.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "655", {
  value: 655.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "106", {
  value: 106.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "905", {
  value: 905.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "276", {
  value: 276.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "679", {
  value: 679.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "900", {
  value: 900.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "973", {
  value: 973.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "252", {
  value: 252.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "239", {
  value: 239.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "951", {
  value: 951.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "161", {
  value: 161.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "849", {
  value: 849.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "419", {
  value: 419.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "802", {
  value: 802.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "342", {
  value: 342.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "983", {
  value: 983.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "540", {
  value: 540.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "418", {
  value: 418.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "170", {
  value: 170.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "914", {
  value: 914.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "765", {
  value: 765.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "709", {
  value: 709.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["currArray"]), "907", {
  value: 907.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["currArray"]), true);
$assert.notCallable(globalThis["currArray"]);
$assert.notConstructable(globalThis["currArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["currArray"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', 'length'], globalThis["currArray"]);
$verifyProperty(globalThis["currArray"], "23", {
  value: 1023.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "2", {
  value: 1002.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "10", {
  value: 1010.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "17", {
  value: 1017.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "18", {
  value: 1018.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "0", {
  value: 1000.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "15", {
  value: 1015.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "4", {
  value: 1004.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "9", {
  value: 1009.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "22", {
  value: 1022.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "7", {
  value: 1007.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "14", {
  value: 1014.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "20", {
  value: 1020.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "11", {
  value: 1011.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "length", {
  value: 24.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["currArray"], "21", {
  value: 1021.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "16", {
  value: 1016.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "13", {
  value: 1013.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "6", {
  value: 1006.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1", {
  value: 1001.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "12", {
  value: 1012.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "8", {
  value: 1008.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "19", {
  value: 1019.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "3", {
  value: 1003.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "5", {
  value: 1005.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["i"], 24.0);
$assert.sameValue($Object_getPrototypeOf(globalThis["longDenseArray"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["longDenseArray"]), true);
$assert.callable(globalThis["longDenseArray"]);
$assert.constructable(globalThis["longDenseArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["longDenseArray"]), ['length', 'name', 'prototype'], globalThis["longDenseArray"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["longDenseArray"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["longDenseArray"]?.["prototype"]), true);
$assert.notCallable(globalThis["longDenseArray"]?.["prototype"]);
$assert.notConstructable(globalThis["longDenseArray"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["longDenseArray"]?.["prototype"]), ['constructor'], globalThis["longDenseArray"]?.["prototype"]);
$assert.sameValue(globalThis["longDenseArray"]?.["prototype"]?.["constructor"], globalThis["longDenseArray"]);
$verifyProperty(globalThis["longDenseArray"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["longDenseArray"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["longDenseArray"], "name", {
  value: "longDenseArray",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["longDenseArray"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["shorten"]), Function.prototype);
$assert.sameValue(Object.isExtensible(globalThis["shorten"]), true);
$assert.callable(globalThis["shorten"]);
$assert.constructable(globalThis["shorten"]);
$assert.compareArray($Reflect_ownKeys(globalThis["shorten"]), ['length', 'name', 'prototype'], globalThis["shorten"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["shorten"]?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["shorten"]?.["prototype"]), true);
$assert.notCallable(globalThis["shorten"]?.["prototype"]);
$assert.notConstructable(globalThis["shorten"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["shorten"]?.["prototype"]), ['constructor'], globalThis["shorten"]?.["prototype"]);
$assert.sameValue(globalThis["shorten"]?.["prototype"]?.["constructor"], globalThis["shorten"]);
$verifyProperty(globalThis["shorten"]?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["shorten"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["shorten"], "name", {
  value: "shorten",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["shorten"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
