"use strict";
class x { static { var x = super [ 0 , super [ super . x ** `${ 0 }` [ 0 % 0 ] , 0 ] ] ; } } 

/* TAG: NEW-JSC-STATIC-SAME-NAME
[Exit Tag Mismatch]
 > Expected normal but got throw-error: SyntaxError(Exception: SyntaxError: Cannot declare a var variable that shadows a let/const/class variable: 'x'.) */
