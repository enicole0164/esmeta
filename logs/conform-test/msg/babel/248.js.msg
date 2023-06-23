"use strict";
class x { static 0 ( ) { } } 

Test fail for `babel`: 248.js
TAG: KNOWN-BBL-07-1
[Assertion Fail]
 > Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function.
descriptor value of "name" should be "0" but "_"
