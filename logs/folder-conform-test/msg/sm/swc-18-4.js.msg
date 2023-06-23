"use strict";
class X extends class {} {}

Test fail for `sm`: swc-18-4.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
