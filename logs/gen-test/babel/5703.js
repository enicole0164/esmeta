// [EXIT] throw-error: ReferenceError(DeclarativeEnvironmentRecord.GetBindingValue<SYNTAX>:CallExpression[0,0].Evaluation)
"use strict";

function _tdz(name) { throw new ReferenceError(name + " is not defined - temporal dead zone"); }

try {} finally {
  _tdz("x")(0);
}

var x;