"use strict";
0 . x ??= ~ null [ { [ Symbol . toPrimitive ] : x => { throw 0 ; } } ] `` ; 

/* TAG: NEW-ALL-TO-PRIMITIVE
[Exit Tag Mismatch]
 > Expected throw-value: 0.0f but got throw-error: TypeError(unnamed:4: TypeError: Cannot read properties of null (reading '#<Object>')) */
