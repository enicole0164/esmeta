"use strict";
var x = async function * ( x , ) { } ; 

Test fail for `sm`: 5731.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for AsyncGeneratorFunction.
