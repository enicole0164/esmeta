// [EXIT] throw-error: TypeError(Call ((step 2, 3:43-73))<BUILTIN>:INTRINSICS.Promise.prototype.catch)
"use strict";

Promise.prototype["catch"].call(0, 0);