// [EXIT] normal
"use strict";
let x = 0; this . x =1;

$assert.sameValue(globalThis["x"], 1.0);
$assert.sameValue(x, 0.0);