"use strict";
let x = async x => await x . x ; x ( ) ; 

/* TAG: NEW-BECOME-CONSTRUCTABLE
[Assertion Fail]
 > Expected the async function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function. */