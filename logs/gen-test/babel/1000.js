// [EXIT] throw-error: TypeError(ToObject<BUILTIN>:INTRINSICS.Object.getOwnPropertyNames)
"use strict";

Object.getOwnPropertyNames.call(0);