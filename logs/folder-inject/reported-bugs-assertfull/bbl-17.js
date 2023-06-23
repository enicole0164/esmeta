// [EXIT] throw-error: TypeError(Call ((step 2, 3:43-73))<SYNTAX>:YieldExpression[2,0].Evaluation)
"use strict";
var [ x ] = { [ Symbol . iterator ] : function * ( ) { yield * 0 ; } } ;
