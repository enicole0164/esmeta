// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Map.prototype.forEach)
"use strict";

Map.prototype.forEach.call(0, 0);