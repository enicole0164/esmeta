"use strict";
{ let x = x ; } 

/* TAG: NEW-YET-TRS-REMOVE-REF-ERR
[Exit Tag Mismatch]
 > Expected throw-error: ReferenceError(DeclarativeEnvironmentRecord.GetBindingValue<SYNTAX>:LexicalBinding[0,1].Evaluation) but got normal */