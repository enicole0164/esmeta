"use strict";
let f = async (x) => void await this; f();

Test fail for `js`: grl-09.js
TAG: NEW-GRL-RETURN-VOID-AWAIT-THIS
[Exit Tag Mismatch]
 > Expected normal but got throw-value: "org.graalvm.polyglot.PolyglotException: com.oracle.truffle.js.nodes.control.ReturnException
Internal GraalVM error, please report at https://github.com/oracle/graal/issues/."
