"use strict";
class x { static 0 = class extends x { } ; }

Test fail for `sm`: jsc-04-1.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["0", "length", "name", "prototype"] but got ["0", "prototype", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
