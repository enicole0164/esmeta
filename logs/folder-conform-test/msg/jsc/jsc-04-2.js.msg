"use strict";
class x { * [ "f" ] ( ) { } } 

Test fail for `jsc`: jsc-04-2.js
TAG: NEW-JSC-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["length", "prototype", "name"] for GeneratorFunction.
