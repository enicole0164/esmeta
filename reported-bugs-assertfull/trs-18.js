// [EXIT] normal
"use strict";
let [ x ] = function * ( ) { yield `${ yield }` ; } ( ) ; 

$assert.sameValue(x, undefined);