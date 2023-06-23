"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var x = 0;

for (var _x in [0]) {
  _readOnlyError("x");

  ;
}