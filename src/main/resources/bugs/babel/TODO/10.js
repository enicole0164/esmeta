"use strict";
class x { 0 ( ) { } } 

/* TAG: NEW-NAME
[Assertion Fail]
 > Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function.
descriptor value of "name" should be "0" but "_" */
