"use strict";
new function x ( { 0 : x , } ) { } ( null <= { [ Symbol . toPrimitive ] : x => 0 < 0 } ) ; 

/* TAG: NEW-JSC-FUNC-PARAM-SAME-NAME
[Exit Tag Mismatch]
 > Expected normal but got throw-error: SyntaxError(Exception: SyntaxError: Duplicate parameter 'x' not allowed in function with destructuring parameters.) */
