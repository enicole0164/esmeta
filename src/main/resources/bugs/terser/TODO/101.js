"use strict";
{ let x = { x } ; } 

/* TAG: NEW-YET-TRS-REMOVE-REF-ERR
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(DeclarativeEnvironmentRecord.GetBindingValue<SYNTAX>:PropertyDefinition[0,0].PropertyDefinitionEvaluation) but got normal */