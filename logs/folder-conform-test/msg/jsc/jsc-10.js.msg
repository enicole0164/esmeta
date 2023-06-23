"use strict";
let x = async x => { for await ( { x } of [ 0 ] ) ; } ; x ( ) ;

Test fail for `jsc`: jsc-10.js
TAG: KNOWN-JSC-10
[Assertion Fail]
 > Expected the async function prototype but got undefined.
Expected true but got false.
Expected undefined has [[Call]] but does not.
$assert.compareArray requires an array as the first argument but undefined given.
$verifyProperty requires an object but undefined given.
$verifyProperty requires an object but undefined given.
