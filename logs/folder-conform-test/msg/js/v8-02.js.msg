"use strict";
null [ { [ Symbol . toPrimitive ] : () => { REF_ERR; } } ] ;

Test fail for `js`: v8-02.js
TAG: NEW-ALL-TO-PRIMITIVE
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:ExpressionStatement[0,0].Evaluation) but got throw-error: TypeError(TypeError: Cannot convert undefined or null to object: null)
