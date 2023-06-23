"use strict";
let await ; async function * asyncGenerator ( ) { yield ; } var asyncIterator = asyncGenerator ( ) ; asyncIterator . next ( ) . then ( function ( ) { var promise = Promise . resolve ( 2 ) . then ( ( ) => { x ; } ) ; return asyncIterator . return ( promise ) ; } ) ; 
