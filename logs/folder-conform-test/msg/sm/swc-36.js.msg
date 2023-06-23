"use strict";
class x { static 0 = delete this ; }

Test fail for `sm`: swc-36.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["0", "length", "name", "prototype"] but got ["0", "prototype", "length", "name"] for Function.
