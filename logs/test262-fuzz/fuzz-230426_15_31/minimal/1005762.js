"use strict";
let x ; async function fn ( ) { for await ( x of { [ Symbol . iterator ] : async x => 0 } ) ; } fn ( ) ; 
