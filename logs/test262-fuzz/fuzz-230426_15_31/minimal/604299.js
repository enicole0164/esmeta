"use strict";
let x ; try { throw RangeError ( { [ Symbol . toPrimitive ] : ( ) => { throw 0 ; } } ) ; } catch ( e ) { ; } 
