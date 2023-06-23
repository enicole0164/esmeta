"use strict";

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var x = function x(_x) {
  _newArrowCheck(this, _this);

  return 0;
}.bind(this);