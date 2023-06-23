// [EXIT] throw-error: TypeError(thisBooleanValue ((step 3, 7:12-42))<BUILTIN>:INTRINSICS.Boolean.prototype.valueOf)
"use strict";

Boolean.prototype.valueOf.call(0);