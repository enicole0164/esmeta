// [EXIT] normal
"use strict";
for ( var x in function * ( ) { } ) y ;

$assert.sameValue(globalThis["x"], undefined);