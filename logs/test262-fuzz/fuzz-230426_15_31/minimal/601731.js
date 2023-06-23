"use strict";
let x ; try { throw TypeError ( { [ Symbol . toPrimitive ] : ( ) => { throw 0 ; } } , 0 ) ; } catch ( e ) { ; } 
