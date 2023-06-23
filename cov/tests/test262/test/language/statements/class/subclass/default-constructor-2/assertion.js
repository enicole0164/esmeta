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
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["f"])), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["f"])), true);
$assert.callable($Object_getPrototypeOf(globalThis["f"]));
$assert.constructable($Object_getPrototypeOf(globalThis["f"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["f"])), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["f"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["f"])?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["f"])?.["prototype"]), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["f"])?.["prototype"]);
$assert.notConstructable($Object_getPrototypeOf(globalThis["f"])?.["prototype"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["f"])?.["prototype"]), ['constructor'], $Object_getPrototypeOf(globalThis["f"])?.["prototype"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["f"])?.["prototype"]?.["constructor"], $Object_getPrototypeOf(globalThis["f"]));
$verifyProperty($Object_getPrototypeOf(globalThis["f"])?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["f"]), "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["f"]), "name", {
  value: "Base2",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["f"]), "length", {
  value: 2.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["f"]), true);
$assert.callable(globalThis["f"]);
$assert.constructable(globalThis["f"]);
$assert.compareArray($Reflect_ownKeys(globalThis["f"]), ['length', 'name'], globalThis["f"]);
$verifyProperty(globalThis["f"], "name", {
  value: "bound Subclass2",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["f"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["obj"]), Object.prototype);
$assert.sameValue(Object.isExtensible(globalThis["obj"]), true);
$assert.notCallable(globalThis["obj"]);
$assert.notConstructable(globalThis["obj"]);
$assert.compareArray($Reflect_ownKeys(globalThis["obj"]), [], globalThis["obj"]);
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))), Object.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))), true);
$assert.notCallable($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])));
$assert.notConstructable($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))), ['constructor'], $Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]), Function.prototype);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]);
$assert.constructable($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]?.["prototype"], $Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])));
$verifyProperty($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"], "name", {
  value: "Base1",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["s1"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["s1"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["s1"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["s1"])), ['constructor'], $Object_getPrototypeOf(globalThis["s1"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]), $Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]);
$assert.constructable($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["s1"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["s1"])?.["constructor"]?.["prototype"], $Object_getPrototypeOf(globalThis["s1"]));
$verifyProperty($Object_getPrototypeOf(globalThis["s1"])?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s1"])?.["constructor"], "name", {
  value: "Subclass1",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s1"])?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s1"]), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["s1"]), true);
$assert.notCallable(globalThis["s1"]);
$assert.notConstructable(globalThis["s1"]);
$assert.compareArray($Reflect_ownKeys(globalThis["s1"]), [], globalThis["s1"]);
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s2"])), $Object_getPrototypeOf(globalThis["f"])?.["prototype"]);
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["s2"])), true);
$assert.notCallable($Object_getPrototypeOf(globalThis["s2"]));
$assert.notConstructable($Object_getPrototypeOf(globalThis["s2"]));
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["s2"])), ['constructor'], $Object_getPrototypeOf(globalThis["s2"]));
$assert.sameValue($Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]), $Object_getPrototypeOf(globalThis["f"]));
$assert.sameValue(Object.isExtensible($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]), true);
$assert.callable($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]);
$assert.constructable($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]);
$assert.compareArray($Reflect_ownKeys($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]), ['length', 'name', 'prototype'], $Object_getPrototypeOf(globalThis["s2"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["s2"])?.["constructor"]?.["prototype"], $Object_getPrototypeOf(globalThis["s2"]));
$verifyProperty($Object_getPrototypeOf(globalThis["s2"])?.["constructor"], "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s2"])?.["constructor"], "name", {
  value: "Subclass2",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s2"])?.["constructor"], "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty($Object_getPrototypeOf(globalThis["s2"]), "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Object.isExtensible(globalThis["s2"]), true);
$assert.notCallable(globalThis["s2"]);
$assert.notConstructable(globalThis["s2"]);
$assert.compareArray($Reflect_ownKeys(globalThis["s2"]), ['x', 'y'], globalThis["s2"]);
$verifyProperty(globalThis["s2"], "x", {
  value: 1.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["s2"], "y", {
  value: 2.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue($Object_getPrototypeOf(globalThis["s2prime"]), $Object_getPrototypeOf(globalThis["s2"]));
$assert.sameValue(Object.isExtensible(globalThis["s2prime"]), true);
$assert.notCallable(globalThis["s2prime"]);
$assert.notConstructable(globalThis["s2prime"]);
$assert.compareArray($Reflect_ownKeys(globalThis["s2prime"]), ['x', 'y'], globalThis["s2prime"]);
$verifyProperty(globalThis["s2prime"], "x", {
  value: 3.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$verifyProperty(globalThis["s2prime"], "y", {
  value: 4.0,
  writable: true,
  enumerable: true,
  configurable: true,
});
$assert.sameValue(globalThis["s3"], globalThis["obj"]);
$assert.sameValue(Base1, $Object_getPrototypeOf($Object_getPrototypeOf(globalThis["s1"]))?.["constructor"]);
$assert.sameValue(Base2, $Object_getPrototypeOf(globalThis["f"]));
$assert.sameValue($Object_getPrototypeOf(Base3), Function.prototype);
$assert.sameValue(Object.isExtensible(Base3), true);
$assert.callable(Base3);
$assert.constructable(Base3);
$assert.compareArray($Reflect_ownKeys(Base3), ['length', 'name', 'prototype'], Base3);
$assert.sameValue($Object_getPrototypeOf(Base3?.["prototype"]), Object.prototype);
$assert.sameValue(Object.isExtensible(Base3?.["prototype"]), true);
$assert.notCallable(Base3?.["prototype"]);
$assert.notConstructable(Base3?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(Base3?.["prototype"]), ['constructor'], Base3?.["prototype"]);
$assert.sameValue(Base3?.["prototype"]?.["constructor"], Base3);
$verifyProperty(Base3?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Base3, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(Base3, "name", {
  value: "Base3",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Base3, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
$assert.sameValue(Subclass1, $Object_getPrototypeOf(globalThis["s1"])?.["constructor"]);
$assert.sameValue(Subclass2, $Object_getPrototypeOf(globalThis["s2"])?.["constructor"]);
$assert.sameValue($Object_getPrototypeOf(Subclass3), Base3);
$assert.sameValue(Object.isExtensible(Subclass3), true);
$assert.callable(Subclass3);
$assert.constructable(Subclass3);
$assert.compareArray($Reflect_ownKeys(Subclass3), ['length', 'name', 'prototype'], Subclass3);
$assert.sameValue($Object_getPrototypeOf(Subclass3?.["prototype"]), Base3?.["prototype"]);
$assert.sameValue(Object.isExtensible(Subclass3?.["prototype"]), true);
$assert.notCallable(Subclass3?.["prototype"]);
$assert.notConstructable(Subclass3?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(Subclass3?.["prototype"]), ['constructor'], Subclass3?.["prototype"]);
$assert.sameValue(Subclass3?.["prototype"]?.["constructor"], Subclass3);
$verifyProperty(Subclass3?.["prototype"], "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Subclass3, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
$verifyProperty(Subclass3, "name", {
  value: "Subclass3",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(Subclass3, "length", {
  value: 0.0,
  writable: false,
  enumerable: false,
  configurable: true,
});
