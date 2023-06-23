"use strict";
async function * x ( ) { } 

Test fail for `sm`: 236.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for AsyncGeneratorFunction.
