"use strict";
var x = { } ; Object . setPrototypeOf ( x , Object . prototype ) ; x . __proto__ = x => 0 ; 

Test fail for `babel`: 5229.js
TAG: NEW-NAME
[Assertion Fail]
 > Expected [object Function] does not have [[Construct]] but does.
descriptor value of "name" should be "" but "bound "
