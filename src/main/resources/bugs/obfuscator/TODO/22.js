"use strict";
class x { static { const x = { x } = 0 ; } } 

/* TAG: NEW-YET-REMOVED-REF-ERR
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(DeclarativeEnvironmentRecord.SetMutableBinding<SYNTAX>:AssignmentProperty[0,0].PropertyDestructuringAssignmentEvaluation) but got throw-error: TypeError(unnamed:3: TypeError: Assignment to constant variable.) */
