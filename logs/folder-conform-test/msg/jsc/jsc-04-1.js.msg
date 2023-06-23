"use strict";
class x { static 0 = class extends x { } ; }

Test fail for `jsc`: jsc-04-1.js
TAG: KNOWN-JSC-04-1
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["length", "prototype", "name"] for Function.
