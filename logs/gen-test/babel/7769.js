// [EXIT] throw-error: TypeError(EvaluateCall ((step 4, 12:45-75))<SYNTAX>:CallExpression[0,0].Evaluation)
"use strict";

var _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

0 % _defineProperty({}, Symbol.toPrimitive, function (x) {
  _newArrowCheck(this, _this);

  return 0()();
}.bind(this));