"use strict";
class x { static { var x ; } }

Test fail for `sm`: jsc-02.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
