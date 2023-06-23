// [EXIT] normal
"use strict";
async function x ( ) { for await ( x of [ , ] ) ; } x ( ) ; 

$delay(() => {
$assert.sameValue(globalThis["x"], undefined);
});