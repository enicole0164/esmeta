"use strict";
class x extends class { } { ; } 

/* TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function.
Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function. */
