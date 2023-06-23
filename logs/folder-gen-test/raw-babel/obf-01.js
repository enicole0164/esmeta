throw "TRANSPILE_FAILURE";
/* SyntaxError: unknown: Identifier 'x' has already been declared. (2:28)

  1 | "use strict";
> 2 | class x { static { function x ( ) { } function x ( ) { } } }
    |                             ^
  3 | */
