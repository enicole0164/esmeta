"use strict";
class x { static 0 = [ this , ] [ 0 ] += ! 0 ; } 

/* TAG: NEW-NATIVE-CODE
[Assertion Fail]
 > descriptor value of "0" should be "function x() { [native code] }true" but "class x { static 0 = [ this , ] [ 0 ] += ! 0 ; }true" */
