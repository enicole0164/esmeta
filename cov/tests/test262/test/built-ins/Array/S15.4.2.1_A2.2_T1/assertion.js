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
$assert.sameValue(globalThis["i"], 100.0);
$assert.sameValue(globalThis["result"], true);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), Array.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.notCallable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 'length'], globalThis["x"]);
$verifyProperty(globalThis["x"], "44", {
  value: 44.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "27", {
  value: 27.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "29", {
  value: 29.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "15", {
  value: 15.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "65", {
  value: 65.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "67", {
  value: 67.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "4", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "77", {
  value: 77.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "43", {
  value: 43.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "28", {
  value: 28.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "23", {
  value: 23.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "92", {
  value: 92.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "30", {
  value: 30.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "89", {
  value: 89.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "40", {
  value: 40.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "46", {
  value: 46.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "72", {
  value: 72.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "39", {
  value: 39.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "86", {
  value: 86.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "70", {
  value: 70.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "61", {
  value: 61.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "48", {
  value: 48.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "69", {
  value: 69.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "95", {
  value: 95.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "99", {
  value: 99.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "24", {
  value: 24.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "78", {
  value: 78.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "50", {
  value: 50.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "54", {
  value: 54.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "2", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "33", {
  value: 33.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "9", {
  value: 9.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "55", {
  value: 55.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "56", {
  value: 56.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "25", {
  value: 25.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "22", {
  value: 22.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "60", {
  value: 60.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "34", {
  value: 34.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "31", {
  value: 31.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "14", {
  value: 14.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "68", {
  value: 68.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "37", {
  value: 37.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "47", {
  value: 47.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "7", {
  value: 7.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "91", {
  value: 91.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "10", {
  value: 10.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "76", {
  value: 76.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "17", {
  value: 17.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "88", {
  value: 88.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "20", {
  value: 20.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "11", {
  value: 11.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 100.0,
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "26", {
  value: 26.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "87", {
  value: 87.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "49", {
  value: 49.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "98", {
  value: 98.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "21", {
  value: 21.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "38", {
  value: 38.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "16", {
  value: 16.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "81", {
  value: 81.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "84", {
  value: 84.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "41", {
  value: 41.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "13", {
  value: 13.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "6", {
  value: 6.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "1", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "12", {
  value: 12.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "85", {
  value: 85.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "66", {
  value: 66.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "64", {
  value: 64.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "57", {
  value: 57.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "32", {
  value: 32.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "79", {
  value: 79.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "18", {
  value: 18.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "42", {
  value: 42.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "36", {
  value: 36.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "51", {
  value: 51.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "96", {
  value: 96.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "8", {
  value: 8.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "45", {
  value: 45.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "94", {
  value: 94.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "19", {
  value: 19.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "93", {
  value: 93.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "63", {
  value: 63.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "90", {
  value: 90.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "3", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "62", {
  value: 62.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "53", {
  value: 53.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "5", {
  value: 5.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "74", {
  value: 74.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "97", {
  value: 97.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "75", {
  value: 75.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "71", {
  value: 71.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "59", {
  value: 59.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "82", {
  value: 82.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "80", {
  value: 80.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "73", {
  value: 73.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "52", {
  value: 52.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "35", {
  value: 35.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "83", {
  value: 83.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "0", {
  value: 0.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["x"], "58", {
  value: 58.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
