"use strict";
class x { static { function x ( ) { } function x ( ) { } } }

Test fail for `jsc`: obf-01.js
TAG: KNOWN-JSC-02
[Exit Tag Mismatch]
 > Expected normal but got throw-error: SyntaxError(Exception: SyntaxError: Cannot declare a function that shadows a let/const/class/function variable 'x' in strict mode.)
