// [EXIT] throw-error: TypeError(INTRINSICS.Error.prototype.toString ((step 2, 3:42-72))<BUILTIN>:INTRINSICS.Error.prototype.toString)
"use strict";

Error.prototype.toString.call(0);