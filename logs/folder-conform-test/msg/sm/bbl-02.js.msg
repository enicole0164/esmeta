"use strict";
class x { static { var x = 42; } }

Test fail for `sm`: bbl-02.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
