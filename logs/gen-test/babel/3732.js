// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Map.prototype.clear)
"use strict";

Map.prototype.clear.call(0);