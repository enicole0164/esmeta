"use strict";

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var x = {
  0: function _(x) {
    _newArrowCheck(this, _this);
  }.bind(this)
};