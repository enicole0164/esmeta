"use strict";
let x ; var asyncIterable = { [ Symbol . asyncIterator ] : async x => 0 , } ; async function * asyncGenerator ( ) { yield * asyncIterable ; } var asyncIterator = asyncGenerator ( ) ; asyncIterator . next ( ) ; 
