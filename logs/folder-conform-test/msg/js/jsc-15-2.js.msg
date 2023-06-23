"use strict";
class x { [ x = new 0 ] ; } 

Test fail for `js`: jsc-15-2.js
TAG: NEW-BECOME-CONSTRUCTABLE
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(EvaluateNew ((step 5, 7:60-90))<SYNTAX>:NewExpression[1,0].Evaluation) but got throw-error: ReferenceError(ReferenceError: x is not defined)
