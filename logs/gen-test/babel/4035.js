// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.WeakSet.prototype.has)
"use strict";

WeakSet.prototype.has.call(0, 0);