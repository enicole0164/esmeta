// [EXIT] throw-error: TypeError(thisBigIntValue ((step 3, 6:12-42))<BUILTIN>:INTRINSICS.BigInt.prototype.toString)
"use strict";

BigInt.prototype.toString.call(0, 0);