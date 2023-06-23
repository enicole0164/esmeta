// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(x), Object.prototype);
$assert.sameValue(Object.isExtensible(x), true);
$assert.notCallable(x);
$assert.notConstructable(x);
$assert.compareArray($Reflect_ownKeys(x), [], x);
