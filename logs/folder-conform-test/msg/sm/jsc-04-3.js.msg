"use strict";
class x { }; - { ... x } ; 

Test fail for `sm`: jsc-04-3.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
