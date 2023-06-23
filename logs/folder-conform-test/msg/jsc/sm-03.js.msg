"use strict";
null [ { [ Symbol . toPrimitive ] : () => { REF_ERR; } } ] ;

Test fail for `jsc`: sm-03.js
TAG: NEW-ALL-TO-PRIMITIVE
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:ExpressionStatement[0,0].Evaluation) but got throw-error: TypeError(Exception: TypeError: null is not an object (evaluating 'null [ { [ Symbol . toPrimitive ] : () => { REF_ERR; } } ]'))
