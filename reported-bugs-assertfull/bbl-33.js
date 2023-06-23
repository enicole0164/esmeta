// [EXIT] normal
"use strict";
let x = 0 < import ( { [ Symbol . toPrimitive ] : x => { throw 0 ; } } ) ?. x ; 

$assert.sameValue(x, false);