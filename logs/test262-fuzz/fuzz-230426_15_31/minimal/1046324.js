"use strict";
function assert ( mustBeTrue ) { x : ; throw 0 ; } assert = function ( expectedErrorConstructor , func ) { x : ; try { func ( ) ; } catch ( thrown ) { x : ; } } ; { } { } class C extends class { } { constructor ( ) { x : ; for ( var x of super . x ) ; } } assert ( '' , function ( ) { new C ( ) ; } ) ; 
