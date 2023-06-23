"use strict";
function x ( ) { } function * x ( ) { } var iterable = { } ; iterable [ Symbol . asyncIterator ] = function ( ) { return { next : x , } ; } ; ( async function ( ) { for await ( var _ of iterable ) { ; break ; } } ( ) ) . then ( 0 ) ; 
