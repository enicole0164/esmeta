"use strict";
class x { static #x = 0 ?. [ super . x ] ; } 

/* TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function. */
