"use strict";
for ( { x : 0 } . x in [ 0 ] ) ; 

/* TAG: NEW-TRS-LHS-TO-LITERAL
[Exit Tag Mismatch]
 > Expected normal but got throw-error: SyntaxError(unnamed:2: SyntaxError: Invalid left-hand side in for-loop) */
