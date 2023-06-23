"use strict";
function x ( ) { } var iterable = { } ; iterable [ Symbol . asyncIterator ] = function ( ) { return { next : x , } ; } ; ( async function ( ) { for await ( var _ of iterable ) { ; } } ( ) ) . then ( 0 ) ; 
