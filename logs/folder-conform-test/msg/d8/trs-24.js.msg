"use strict";
switch ( -1 ) {   case -1n: console.log("BigInt"); break;   case -1: console.log("Number"); break; }

Test fail for `d8`: trs-24.js
TAG: NEW-YET-REMOVED-REF-ERR
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:MemberExpression[2,0].Evaluation) but got normal
