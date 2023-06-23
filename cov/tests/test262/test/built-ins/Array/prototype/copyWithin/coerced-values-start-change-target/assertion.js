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
$assert.compareArray($Reflect_ownKeys(globalThis["array"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010', '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018', 'length'], globalThis["array"]);
$verifyProperty(globalThis["array"], "1018", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "2", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1003", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "15", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "4", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1012", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1005", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1017", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "9", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "7", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "14", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1015", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1004", {
  value: 5.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "10", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1008", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "17", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1001", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "11", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "length", {
  value: 1019.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["array"], "1002", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1006", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1014", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1009", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "16", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "13", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "6", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "12", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1000", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1016", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1011", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1013", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "18", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1010", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "8", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "1007", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "19", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "3", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["array"], "5", {
  value: 5.0,
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
$assert.sameValue($Object_getPrototypeOf(globalThis["currArray"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["currArray"]), true);
$assert.notCallable(globalThis["currArray"]);
$assert.notConstructable(globalThis["currArray"]);
$assert.compareArray($Reflect_ownKeys(globalThis["currArray"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010', '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018', 'length'], globalThis["currArray"]);
$verifyProperty(globalThis["currArray"], "1018", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "2", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1003", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "15", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "4", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1012", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1005", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1017", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "9", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "7", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "14", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1015", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1004", {
  value: 5.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "10", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1008", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "17", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1001", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "11", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "length", {
  value: 1019.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["currArray"], "1002", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1006", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1014", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1009", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "16", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "13", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "6", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "12", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1000", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1016", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1011", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1013", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "18", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1010", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "8", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "1007", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "19", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "3", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["currArray"], "5", {
  value: 5.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["i"], 19.0);
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
