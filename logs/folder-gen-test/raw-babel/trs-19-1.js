"use strict";

function _tdz(name) { throw new ReferenceError(name + " is not defined - temporal dead zone"); }

var x = void _tdz("x");