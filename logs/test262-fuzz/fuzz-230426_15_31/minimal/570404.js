"use strict";
let x ; var asyncIterable = { [ Symbol . asyncIterator ] : function ( ) { return this ; } , next : function * ( ) { } , } ; async function * asyncGenerator ( ) { yield * asyncIterable ; } var asyncIterator = asyncGenerator ( ) ; asyncIterator . next ( ) . then ( function ( ) { ; return asyncIterator . return ( x ) ; } ) ; 
