"use strict";
class x { static { y => new . target } }

Test fail for `sm`: jsc-16.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
