"use strict";
class x { set 0 ( x ) { } ; } 

Test fail for `babel`: 5398.js
TAG: NEW-NAME
[Assertion Fail]
 > Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function.
descriptor value of "name" should be "set 0" but "set"
