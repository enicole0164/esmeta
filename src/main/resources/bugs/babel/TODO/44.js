"use strict";
function * x ( ) { let x ; } x ( ) ; 

/* TAG: NEW-BECOME-CONSTRUCTABLE
[Assertion Fail]
 > Expected the generator function prototype but got [object Function].
Expected [object Function] does not have [[Construct]] but does.
Expected [object Object] but got [object Object]. */