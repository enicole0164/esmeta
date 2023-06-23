"use strict";

var x = _temporalUndefined;

function _temporalRef(val, name) { return val === _temporalUndefined ? _tdz(name) : val; }

function _tdz(name) { throw new ReferenceError(name + " is not defined - temporal dead zone"); }

function _temporalUndefined() {}

x = void 0;
new function () {
  return _temporalRef(x, "x"), x = function x() {};
}();