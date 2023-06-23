throw "TRANSPILE_FAILURE";
/* TypeError: unknown file: Duplicate declaration "x"
  1 | "use strict";
> 2 | ( async () => { for await ( let x of [ ] ) { let x; } } ) ;
    |                                                  ^
  3 | */
