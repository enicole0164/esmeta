throw "TRANSPILE_FAILURE";
/* SyntaxError: unknown: Identifier 'x' has already been declared. (2:23)

  1 | "use strict";
> 2 | class x { static { var x ; } }
    |                        ^
  3 | */
