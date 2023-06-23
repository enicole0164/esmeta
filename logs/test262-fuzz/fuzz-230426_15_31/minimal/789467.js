"use strict";
function assert ( mustBeTrue ) { ; } assert = function ( expectedErrorConstructor , func ) { ; try { func ( ) ; } catch ( thrown ) { ; } } ; assert ( x => 0 , function ( ) { try { throw null ; } catch ( { } ) { } } ) ; 
