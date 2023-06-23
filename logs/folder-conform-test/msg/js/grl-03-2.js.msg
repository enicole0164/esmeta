"use strict";
const B = true; B &&= false;

Test fail for `js`: grl-03-2.js
TAG: NEW-GRL-LOGICAL-ASSIGN-CONST
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(DeclarativeEnvironmentRecord.SetMutableBinding<SYNTAX>:AssignmentExpression[6,0].Evaluation) but got normal
