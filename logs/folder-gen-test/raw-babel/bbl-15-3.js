"use strict";

var _this = this;

var _x = _temporalUndefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _temporalRef(val, name) { return val === _temporalUndefined ? _tdz(name) : val; }

function _tdz(name) { throw new ReferenceError(name + " is not defined - temporal dead zone"); }

function _temporalUndefined() {}

_x = function x() {
  _newArrowCheck(this, _this);

  return _temporalRef(_x, "x");
}.bind(this);

_x();