"use strict";
let x = x => function ( ) { } ?. ( ) [ 0 ] ; x ( ) ; 

/* TAG: NEW-JSC-OPTIONAL-CALL-CHAIN
[Exit Tag Mismatch]
 > Expected throw-error: TypeError(ToObject<SYNTAX>:ExpressionBody[0,0].Evaluation) but got normal */