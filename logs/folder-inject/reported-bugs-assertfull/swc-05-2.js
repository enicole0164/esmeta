// [EXIT] throw-error: TypeError(PrivateGet ((step 2, 3:35-65))<SYNTAX>:ComputedPropertyName[0,0].Evaluation)
"use strict";
class x { set [ 0 . #x ] ( x ) { } get #x ( ) { } } 
