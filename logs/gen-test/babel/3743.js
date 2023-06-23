// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Map.prototype.delete)
"use strict";

Map.prototype["delete"].call(0);