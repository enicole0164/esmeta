"use strict";
let x ; var asyncIterable = { [ Symbol . asyncIterator ] : function ( ) { return this ; } , next : x => 0 , } ; async function * asyncGenerator ( ) { yield * asyncIterable ; } var asyncIterator = asyncGenerator ( ) ; asyncIterator . next ( ) . then ; 
