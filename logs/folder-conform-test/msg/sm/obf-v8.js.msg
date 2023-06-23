"use strict";
class x { static 0 = class x { } } 

Test fail for `sm`: obf-v8.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["0", "length", "name", "prototype"] but got ["0", "prototype", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
