"use strict";
async function * await ( ) { } var asyncIterable = [ 0 ] ; async function * asyncGenerator ( ) { yield * asyncIterable ; } var asyncIterator = asyncGenerator ( ) ; asyncIterator . next ( ) . then ( function ( ) { var promise = Promise . resolve ( 2 ) . then ( ( ) => { x ; } ) ; return asyncIterator . return ( promise ) ; } ) ; 
