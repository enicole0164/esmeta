"use strict";
class x { static { super . x = 0 ; } }

Test fail for `sm`: swc-22.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype", "x"] but got ["prototype", "x", "length", "name"] for Function.
