"use strict";
async function x ( ) { var x ; for await ( { x = 0 } of [ 0 ] ) break ; } x ( ) ; 

/* TAG: NEW-BECOME-CONSTRUCTABLE
[Assertion Fail]
 > Expected the async function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected ["length", "name"] but got ["length", "name", "prototype"] for Function. */