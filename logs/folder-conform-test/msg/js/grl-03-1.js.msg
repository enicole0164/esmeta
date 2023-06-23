"use strict";
class x { static 0 = x &&= 0 ; }

Test fail for `js`: grl-03-1.js
TAG: KNOWN-GRL-03-1
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(DeclarativeEnvironmentRecord.SetMutableBinding<SYNTAX>:AssignmentExpression[6,0].Evaluation) but got normal
