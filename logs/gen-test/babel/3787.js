// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.Map.prototype.has)
"use strict";

Map.prototype.has.call(0);