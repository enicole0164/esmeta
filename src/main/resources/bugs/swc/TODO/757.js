"use strict";
class x { get 0 ( ) { } * 0 ( ) { } } 

/* TAG: NEW-NAME
[Assertion Fail]
 > Expected the generator function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected [object Object] but got the object prototype.
Expected [] but got ["constructor"] for Object.
descriptor value of "name" should be "0" but "value"
descriptor should not be writable */