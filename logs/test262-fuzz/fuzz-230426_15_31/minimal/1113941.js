"use strict";
function x ( ) { } function * x ( ) { } var iterable = { } ; iterable [ Symbol . asyncIterator ] = function ( ) { return { next : x , get return ( ) { await ; } , } ; } ; ( async function ( ) { for await ( var _ of iterable ) return ; } ( ) ) . then ( 0 ) ; 
