"use strict";
class x { static y = x ; } 

Test fail for `sm`: bbl-18.js
TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype", "y"] but got ["prototype", "y", "length", "name"] for Function.
