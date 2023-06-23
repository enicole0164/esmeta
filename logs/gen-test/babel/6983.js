// [EXIT] throw-error: TypeError(EvaluateNew ((step 5, 7:60-90))<SYNTAX>:NewExpression[1,0].Evaluation)
"use strict";

for (var x in {
  x: x
}) {
  throw new 0();
}