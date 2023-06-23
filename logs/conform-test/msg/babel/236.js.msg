"use strict";
async function * x ( ) { } 

Test fail for `babel`: 236.js
TAG: KNOWN-BBL-16
[Assertion Fail]
 > Expected the async generator function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected [object Object] but got the object prototype.
Expected [] but got ["constructor"] for Object.
