"use strict";
function assert ( mustBeTrue ) { ; } assert . throws = function ( expectedErrorConstructor , func ) { ; try { func ( ) ; } catch ( thrown ) { ; } } ; let x ; var iter ; ; function * g ( ) { ; var vals = [ 0 , ] ; [ x , ... '' [ yield ] ] = vals ; { } } iter = g ( ) ; iter . next ( ) ; assert . throws ( x => 0 , function ( ) { iter . return ( ) ; } ) ; 
