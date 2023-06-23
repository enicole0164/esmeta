"use strict";
async function x ( ) { } 

Test fail for `babel`: 216.js
TAG: KNOWN-BBL-16
[Assertion Fail]
 > Expected the async function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function.
