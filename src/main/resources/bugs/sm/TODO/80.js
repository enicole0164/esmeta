"use strict";
class x { static 0 = super [ { [ Symbol . toPrimitive ] : x => new . target } ] ; } 

/* TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["0", "length", "name", "prototype"] but got ["0", "prototype", "length", "name"] for Function. */
