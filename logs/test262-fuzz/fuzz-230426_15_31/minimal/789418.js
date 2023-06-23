"use strict";
let x ; async function fn ( ) { for await ( x of { [ Symbol . iterator ] : 0 } ) ; } fn ( ) ; 
