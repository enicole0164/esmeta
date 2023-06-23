"use strict";

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

new (function () {
  _newArrowCheck(this, _this);
}.bind(this))();