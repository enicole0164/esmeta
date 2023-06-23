"use strict";
null [ { [ Symbol . toPrimitive ] : () => { REF_ERR; } } ] ;

Test fail for `d8`: jsc-08.js
TAG: NEW-ALL-TO-PRIMITIVE
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:ExpressionStatement[0,0].Evaluation) but got throw-error: TypeError(unnamed:3: TypeError: Cannot read properties of null (reading '#<Object>'))
