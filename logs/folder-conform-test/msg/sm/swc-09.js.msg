"use strict";
class x { static #y = #y in x ; }

Test fail for `sm`: swc-09.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
