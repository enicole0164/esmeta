"use strict";
{ x = new 0 ; let x ; } ; 

Test fail for `js`: jsc-14.js
TAG: NEW-BECOME-CONSTRUCTABLE
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(EvaluateNew ((step 5, 7:60-90))<SYNTAX>:NewExpression[1,0].Evaluation) but got throw-error: ReferenceError(ReferenceError: x is not defined)
