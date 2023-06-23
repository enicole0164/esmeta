"use strict";
var { x = class { } } = 0 ; 

Test fail for `sm`: 6804.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
