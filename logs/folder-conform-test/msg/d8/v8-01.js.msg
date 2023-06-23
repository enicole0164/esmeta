"use strict";
class C { static x = delete super [ 0 ( ) ] ; }

Test fail for `d8`: v8-01.js
TAG: NEW-DELETE-SUPER
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(EvaluateCall ((step 4, 12:45-75))<SYNTAX>:CallExpression[0,0].Evaluation) but got throw-error: ReferenceError(unnamed:3: ReferenceError: Unsupported reference to 'super')
