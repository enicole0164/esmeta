"use strict";
function assert ( mustBeTrue ) { { } } assert = function ( expectedErrorConstructor , func ) { ; try { func ( ) ; } catch ( thrown ) { 0 ; } } ; var iter = { [ Symbol . iterator ] ( ) { return this ; } , } ; class C extends class { } { constructor ( ) { 0 ; for ( var x of iter ) break ; } } assert ( [ ] , function ( ) { new C ( ) ; } ) ; 
