"use strict";
class x { static { if ( 0 ?. [ 0 >= ++ super [ x ] ] ** 0 ) ; } } 

/* TAG: NEW-NATIVE-CODE
[Assertion Fail]
 > Expected ["length", "name", "prototype", "function x() { [native code] }"] but got ["length", "name", "prototype", "class x { static { if ( 0 ?. [ 0 >= ++ super [ x ] ] ** 0 ) ; } }"] for Function.
[object Function] does not have own property named "function x() { [native code] }" */
