"use strict";
class x { [ { [ Symbol . toPrimitive ] : function ( ) { } } ] ; } 

/* TAG: NEW-SM-PROP-ORDER
[Assertion Fail]
 > Expected ["length", "name", "prototype"] but got ["prototype", "length", "name"] for Function. */