"use strict";

function _tdz(name) { throw new ReferenceError(name + " is not defined - temporal dead zone"); }

{
  _tdz("x");

  x = new 0();
  var x;
}
;