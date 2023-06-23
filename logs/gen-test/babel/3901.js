// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Set.prototype.forEach)
"use strict";

Set.prototype.forEach.call(0, 0);