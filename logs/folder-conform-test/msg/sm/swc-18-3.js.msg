"use strict";
var f = function(){} ?? 42;

Test fail for `sm`: swc-18-3.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
