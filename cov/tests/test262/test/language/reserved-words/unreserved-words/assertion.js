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
$assert.sameValue(globalThis["and"], 1.0);
$assert.sameValue(globalThis["and_eq"], 1.0);
$assert.sameValue(globalThis["as"], 1.0);
$assert.sameValue(globalThis["asm"], 1.0);
$assert.sameValue(globalThis["assert"], 1.0);
$assert.sameValue(globalThis["auto"], 1.0);
$assert.sameValue(globalThis["base"], 1.0);
$assert.sameValue(globalThis["bitand"], 1.0);
$assert.sameValue(globalThis["bitor"], 1.0);
$assert.sameValue(globalThis["bool"], 1.0);
$assert.sameValue(globalThis["byvalue"], 1.0);
$assert.sameValue(globalThis["checked"], 1.0);
$assert.sameValue(globalThis["clone"], 1.0);
$assert.sameValue(globalThis["comment"], 1.0);
$assert.sameValue(globalThis["compl"], 1.0);
$assert.sameValue(globalThis["const_cast"], 1.0);
$assert.sameValue(globalThis["decimal"], 1.0);
$assert.sameValue(globalThis["delegate"], 1.0);
$assert.sameValue(globalThis["dynamic_cast"], 1.0);
$assert.sameValue(globalThis["equals"], 1.0);
$assert.sameValue(globalThis["event"], 1.0);
$assert.sameValue(globalThis["explicit"], 1.0);
$assert.sameValue(globalThis["extern"], 1.0);
$assert.sameValue(globalThis["finalize"], 1.0);
$assert.sameValue(globalThis["fixed"], 1.0);
$assert.sameValue(globalThis["foreach"], 1.0);
$assert.sameValue(globalThis["friend"], 1.0);
$assert.sameValue(globalThis["future"], 1.0);
$assert.sameValue(globalThis["generic"], 1.0);
$assert.sameValue(globalThis["getClass"], 1.0);
$assert.sameValue(globalThis["hashCode"], 1.0);
$assert.sameValue(globalThis["implicit"], 1.0);
$assert.sameValue(globalThis["infinity"], 1.0);
$assert.sameValue(globalThis["inline"], 1.0);
$assert.sameValue(globalThis["inner"], 1.0);
$assert.sameValue(globalThis["internal"], 1.0);
$assert.sameValue(globalThis["is"], 1.0);
$assert.sameValue(globalThis["lock"], 1.0);
$assert.sameValue(globalThis["mutable"], 1.0);
$assert.sameValue(globalThis["namespace"], 1.0);
$assert.sameValue(globalThis["not"], 1.0);
$assert.sameValue(globalThis["not_eq"], 1.0);
$assert.sameValue(globalThis["notify"], 1.0);
$assert.sameValue(globalThis["notifyAll"], 1.0);
$assert.sameValue(globalThis["object"], 1.0);
$assert.sameValue(globalThis["operator"], 1.0);
$assert.sameValue(globalThis["or"], 1.0);
$assert.sameValue(globalThis["or_eq"], 1.0);
$assert.sameValue(globalThis["out"], 1.0);
$assert.sameValue(globalThis["outer"], 1.0);
$assert.sameValue(globalThis["override"], 1.0);
$assert.sameValue(globalThis["params"], 1.0);
$assert.sameValue(globalThis["readonly"], 1.0);
$assert.sameValue(globalThis["ref"], 1.0);
$assert.sameValue(globalThis["register"], 1.0);
$assert.sameValue(globalThis["reinterpret_cast"], 1.0);
$assert.sameValue(globalThis["sbyte"], 1.0);
$assert.sameValue(globalThis["signed"], 1.0);
$assert.sameValue(globalThis["sizeof"], 1.0);
$assert.sameValue(globalThis["stackalloc"], 1.0);
$assert.sameValue(globalThis["static_cast"], 1.0);
$assert.sameValue(globalThis["strictfp"], 1.0);
$assert.sameValue(globalThis["string"], 1.0);
$assert.sameValue(globalThis["struct"], 1.0);
$assert.sameValue(globalThis["template"], 1.0);
$assert.sameValue(globalThis["toString"], 1.0);
$assert.sameValue(globalThis["typedef"], 1.0);
$assert.sameValue(globalThis["typeid"], 1.0);
$assert.sameValue(globalThis["uint"], 1.0);
$assert.sameValue(globalThis["unchecked"], 1.0);
$assert.sameValue(globalThis["undefiend"], 1.0);
$assert.sameValue(globalThis["union"], 1.0);
$assert.sameValue(globalThis["unsafe"], 1.0);
$assert.sameValue(globalThis["unsigned"], 1.0);
$assert.sameValue(globalThis["use"], 1.0);
$assert.sameValue(globalThis["ushort"], 1.0);
$assert.sameValue(globalThis["using"], 1.0);
$assert.sameValue(globalThis["valueOf"], 1.0);
$assert.sameValue(globalThis["virtual"], 1.0);
$assert.sameValue(globalThis["wait"], 1.0);
$assert.sameValue(globalThis["wchar_t"], 1.0);
$assert.sameValue(globalThis["xor"], 1.0);
$assert.sameValue(globalThis["xor_eq"], 1.0);
