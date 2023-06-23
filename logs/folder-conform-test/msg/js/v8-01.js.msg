"use strict";
class C { static x = delete super [ 0 ( ) ] ; }

Test fail for `js`: v8-01.js
TAG: NEW-DELETE-SUPER
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(EvaluateCall ((step 4, 12:45-75))<SYNTAX>:CallExpression[0,0].Evaluation) but got throw-error: ReferenceError(ReferenceError: Unsupported reference to 'super')
