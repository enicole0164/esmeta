"use strict";
function f ( x = void 0 ) { }

Test fail for `sm`: trs-21.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
