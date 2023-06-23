"use strict";
class X { static x = function(){} }

Test fail for `jsc`: swc-18-1.js
TAG: NEW-JSC-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["length", "prototype", "name"] for Function.
