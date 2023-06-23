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
$assert.sameValue(globalThis["ԦԧؠࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘॳॴॵॶॷೱೲഩഺൎྌᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊᯋᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤᯥₕₖₗₘₙₚₛₜㆸㆹㆺꙠꙡꞍꞎꞐꞑꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꟺꬁꬂꬃꬄꬅꬆꬉꬊꬋꬌꬍꬎꬑꬒꬓꬔꬕꬖꬠꬡꬢꬣꬤꬥꬦꬨꬩꬪꬫꬬꬭꬮ𑀃𑀄𑀅𑀆𑀇𑀈𑀉𑀊𑀋𑀌𑀍𑀎𑀏𑀐𑀑𑀒𑀓𑀔𑀕𑀖𑀗𑀘𑀙𑀚𑀛𑀜𑀝𑀞𑀟𑀠𑀡𑀢𑀣𑀤𑀥𑀦𑀧𑀨𑀩𑀪𑀫𑀬𑀭𑀮𑀯𑀰𑀱𑀲𑀳𑀴𑀵𑀶𑀷𖠀𖠁𖠂𖠃𖠄𖠅𖠆𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣘𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤍𖤎𖤏𖤐𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸𛀀𛀁𫝀𫝁𫝂𫝃𫝄𫝅𫝆𫝇𫝈𫝉𫝊𫝋𫝌𫝍𫝎𫝏𫝐𫝑𫝒𫝓𫝔𫝕𫝖𫝗𫝘𫝙𫝚𫝛𫝜𫝝𫝞𫝟𫝠𫝡𫝢𫝣𫝤𫝥𫝦𫝧𫝨𫝩𫝪𫝫𫝬𫝭𫝮𫝯𫝰𫝱𫝲𫝳𫝴𫝵𫝶𫝷𫝸𫝹𫝺𫝻𫝼𫝽𫝾𫝿𫞀𫞁𫞂𫞃𫞄𫞅𫞆𫞇𫞈𫞉𫞊𫞋𫞌𫞍𫞎𫞏𫞐𫞑𫞒𫞓𫞔𫞕𫞖𫞗𫞘𫞙𫞚𫞛𫞜𫞝𫞞𫞟𫞠𫞡𫞢𫞣𫞤𫞥𫞦𫞧𫞨𫞩𫞪𫞫𫞬𫞭𫞮𫞯𫞰𫞱𫞲𫞳𫞴𫞵𫞶𫞷𫞸𫞹𫞺𫞻𫞼𫞽𫞾𫞿𫟀𫟁𫟂𫟃𫟄𫟅𫟆𫟇𫟈𫟉𫟊𫟋𫟌𫟍𫟎𫟏𫟐𫟑𫟒𫟓𫟔𫟕𫟖𫟗𫟘𫟙𫟚𫟛𫟜𫟝𫟞𫟟𫟠𫟡𫟢𫟣𫟤𫟥𫟦𫟧𫟨𫟩𫟪𫟫𫟬𫟭𫟮𫟯𫟰𫟱𫟲𫟳𫟴𫟵𫟶𫟷𫟸𫟹𫟺𫟻𫟼𫟽𫟾𫟿𫠀𫠁𫠂𫠃𫠄𫠅𫠆𫠇𫠈𫠉𫠊𫠋𫠌𫠍𫠎𫠏𫠐𫠑𫠒𫠓𫠔𫠕𫠖𫠗𫠘𫠙𫠚𫠛𫠜𫠝"], undefined);
