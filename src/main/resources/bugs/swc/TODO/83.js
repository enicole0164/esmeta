"use strict";
for ( var x of function * x ( ) { yield * { [ Symbol . iterator ] : x => await } ; } ( ) ) ; 

/* TAG: NEW-AWAIT-FAIL
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:ExpressionBody[0,0].Evaluation) but got transpile-failure */