"use strict";
let x ; try { throw EvalError ( { [ Symbol . toPrimitive ] : ( ) => { throw 0 ; } } ) ; } catch ( e ) { ; } 
