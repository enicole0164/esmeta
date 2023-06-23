// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 2, 3:66-96))<BUILTIN>:INTRINSICS.get Map.prototype.size)
"use strict";
var x = { } ; Object . setPrototypeOf ( x , Map . prototype ) ; x . size ; 
