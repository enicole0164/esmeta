// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Map.prototype.get)
"use strict";

Map.prototype.get.call(0, 0);