"use strict";
class x { } this ?. x [ { [ Symbol . toPrimitive ] : ( ) => { throw 0 ; } } ] ; 

/* TAG: NEW-ALL-TO-PRIMITIVE
[Exit Tag Mismatch]
 > Expected throw-value: 0.0f but got throw-error: TypeError(unnamed:4: TypeError: Cannot read properties of undefined (reading '#<Object>')) */
