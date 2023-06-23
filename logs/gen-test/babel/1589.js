// [EXIT] throw-error: TypeError(ToBigInt<BUILTIN>:INTRINSICS.BigInt.asIntN)
"use strict";

BigInt.asIntN.call(0, 0);