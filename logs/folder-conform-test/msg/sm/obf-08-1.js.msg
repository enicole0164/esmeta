"use strict";
let [ x ] = function * ( ) { yield class x { } ; } ( ) ; 

Test fail for `sm`: obf-08-1.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
