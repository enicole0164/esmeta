"use strict";
function assert ( mustBeTrue ) { ; } assert = function ( expectedErrorConstructor , func ) { ; try { func ( ) ; } catch ( thrown ) { ; } } ; assert ( 0 , function ( ) { for ( const x of [ 1 ] ) ; } ) ; 
