"use strict";
class x { } x &&= class extends x { } ; 

Test fail for `sm`: bbl-15-2.js
TAG: KNOWN-SM-02
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
