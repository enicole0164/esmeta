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
$assert.sameValue(globalThis["ࢠࢢࢣࢤࢥࢦࢧࢨࢩࢪࢫࢬໞໟჇჍჽჾჿᮺᮻᮼᮽᮾᮿᳵᳶⳲⳳⴧⴭⵦⵧ鿌ꞒꞓꞪꟸꟹꫠꫡꫢꫣꫤꫥꫦꫧꫨꫩꫪꫲꫳꫴ郞隷𐦀𐦁𐦂𐦃𐦄𐦅𐦆𐦇𐦈𐦉𐦊𐦋𐦌𐦍𐦎𐦏𐦐𐦑𐦒𐦓𐦔𐦕𐦖𐦗𐦘𐦙𐦚𐦛𐦜𐦝𐦞𐦟𐦠𐦡𐦢𐦣𐦤𐦥𐦦𐦧𐦨𐦩𐦪𐦫𐦬𐦭𐦮𐦯𐦰𐦱𐦲𐦳𐦴𐦵𐦶𐦷𐦾𐦿𑃐𑃑𑃒𑃓𑃔𑃕𑃖𑃗𑃘𑃙𑃚𑃛𑃜𑃝𑃞𑃟𑃠𑃡𑃢𑃣𑃤𑃥𑃦𑃧𑃨𑄃𑄄𑄅𑄆𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑆃𑆄𑆅𑆆𑆇𑆈𑆉𑆊𑆋𑆌𑆍𑆎𑆏𑆐𑆑𑆒𑆓𑆔𑆕𑆖𑆗𑆘𑆙𑆚𑆛𑆜𑆝𑆞𑆟𑆠𑆡𑆢𑆣𑆤𑆥𑆦𑆧𑆨𑆩𑆪𑆫𑆬𑆭𑆮𑆯𑆰𑆱𑆲𑇁𑇂𑇃𑇄𑚀𑚁𑚂𑚃𑚄𑚅𑚆𑚇𑚈𑚉𑚊𑚋𑚌𑚍𑚎𑚏𑚐𑚑𑚒𑚓𑚔𑚕𑚖𑚗𑚘𑚙𑚚𑚛𑚜𑚝𑚞𑚟𑚠𑚡𑚢𑚣𑚤𑚥𑚦𑚧𑚨𑚩𑚪𖼀𖼁𖼂𖼃𖼄𖼅𖼆𖼇𖼈𖼉𖼊𖼋𖼌𖼍𖼎𖼏𖼐𖼑𖼒𖼓𖼔𖼕𖼖𖼗𖼘𖼙𖼚𖼛𖼜𖼝𖼞𖼟𖼠𖼡𖼢𖼣𖼤𖼥𖼦𖼧𖼨𖼩𖼪𖼫𖼬𖼭𖼮𖼯𖼰𖼱𖼲𖼳𖼴𖼵𖼶𖼷𖼸𖼹𖼺𖼻𖼼𖼽𖼾𖼿𖽀𖽁𖽂𖽃𖽄𖽐𖾓𖾔𖾕𖾖𖾗𖾘𖾙𖾚𖾛𖾜𖾝𖾞𖾟𞸀𞸁𞸂𞸃𞸅𞸆𞸇𞸈𞸉𞸊𞸋𞸌𞸍𞸎𞸏𞸐𞸑𞸒𞸓𞸔𞸕𞸖𞸗𞸘𞸙𞸚𞸛𞸜𞸝𞸞𞸟𞸡𞸢𞸤𞸧𞸩𞸪𞸫𞸬𞸭𞸮𞸯𞸰𞸱𞸲𞸴𞸵𞸶𞸷𞸹𞸻𞹂𞹇𞹉𞹋𞹍𞹎𞹏𞹑𞹒𞹔𞹗𞹙𞹛𞹝𞹟𞹡𞹢𞹤𞹧𞹨𞹩𞹪𞹬𞹭𞹮𞹯𞹰𞹱𞹲𞹴𞹵𞹶𞹷𞹹𞹺𞹻𞹼𞹾𞺀𞺁𞺂𞺃𞺄𞺅𞺆𞺇𞺈𞺉𞺋𞺌𞺍𞺎𞺏𞺐𞺑𞺒𞺓𞺔𞺕𞺖𞺗𞺘𞺙𞺚𞺛𞺡𞺢𞺣𞺥𞺦𞺧𞺨𞺩𞺫𞺬𞺭𞺮𞺯𞺰𞺱𞺲𞺳𞺴𞺵𞺶𞺷𞺸𞺹𞺺𞺻"], undefined);
