"use strict";
class X { static x = function(){} }

Test fail for `sm`: swc-18-1.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype", "x"] but got ["prototype", "x", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
