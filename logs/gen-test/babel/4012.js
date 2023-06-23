// [EXIT] throw-error: TypeError(RequireInternalSlot ((step 1, 2:40-70))<BUILTIN>:INTRINSICS.WeakSet.prototype.add)
"use strict";

WeakSet.prototype.add.call(0);