"use strict";
x &&= 0 ; let x ; 

/* TAG: NEW-YET-TRS-REMOVE-REF-ERR
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(DeclarativeEnvironmentRecord.GetBindingValue<SYNTAX>:AssignmentExpression[6,0].Evaluation) but got normal */
