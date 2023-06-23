// [EXIT] throw-error: TypeError(ToObject<BUILTIN>:INTRINSICS.Object.getOwnPropertyDescriptors)
"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ = 0,
    x = _extends({}, _);

Object.getOwnPropertyDescriptors.call(0);