"use strict";
class x { async * 0 ( ) { } } 

Test fail for `babel`: 6755.js
TAG: KNOWN-BBL-07-1
[Assertion Fail]
 > Expected the async generator function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected [object Object] but got the object prototype.
Expected [] but got ["constructor"] for Object.
descriptor value of "name" should be "0" but "_"
