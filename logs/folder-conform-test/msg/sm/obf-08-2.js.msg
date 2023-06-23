"use strict";
let x ; new function ( ) { return x = function x ( ) { } ; } ; 

Test fail for `sm`: obf-08-2.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
