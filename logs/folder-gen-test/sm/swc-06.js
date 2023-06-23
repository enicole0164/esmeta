// [EXIT] throw-error: TypeError(ToObject<SYNTAX>:BindingPattern[1,0].BindingInitialization)
"use strict";
function * f([]){}; f();
