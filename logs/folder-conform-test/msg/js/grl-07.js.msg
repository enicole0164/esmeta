"use strict";
Object . defineProperty ( [ ] , { [ Symbol . toPrimitive ] : x => await } ) ; 

Test fail for `js`: grl-07.js
TAG: KNOWN-GRL-07
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:ExpressionBody[0,0].Evaluation) but got throw-error: TypeError(TypeError: must be an object)
