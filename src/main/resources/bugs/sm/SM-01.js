 //  async function ID? ( DESTRUCTURING_PATTERN ) { BODY } ( ARG ) ;
 //  async function ID1 ( DESTRUCTURING_PATTERN ) { BODY } ID1( ARG ) ;
 ///
! async function ( [ ] ) { } ( ) ; 
! async function ( [ ] , ... x ) { } ( ) ; 
! async function ( [ x ] ) { } ( ) ; 
! async function ( x , [ ] ) { } ( ) ; 
+ async function ( [ ] ) { } ( ) ; 
+ async function ( [ ] , ... x ) { } ( ) ; 
+ async function ( [ ] , x ) { } ( ) ; 
+ async function ( [ x ] ) { } ( ) ; 
+ async function ( x , [ ] ) { } ( ) ; 
+ async function ( { 0 : x } , ) { } ( ) ; 
+ async function ( { } ) { } ( ) ; 
+ async function x ( [ , ... x ] ) { } ( ) ; 
- async function ( [ ] ) { } ( ) ; 
- async function ( [ ] ) { } ( 0 ) ; 
- async function ( [ ] , ... x ) { } ( ) ; 
- async function ( [ x , ] ) { } ( 0 ) ; 
- async function ( x , [ ] ) { } ( ) ; 
0 < async function x ( [ ] ) { } ( 0 ) ; 
0 <= async function ( { } ) { } ( ) [ 0 ?. x ?. x ] ; 
0 ^ async function ( ... [ [ ] ] ) { } ?. ( 0 , ) ; 
0 ^ async function ( ... [ x , , [ ] ] ) { } ?. ( 0 , ) ; 
0 ^ async function ( [ , ] ) { } ?. ( 0 , ) ; 
0 ^ async function ( [ , x ] ) { } ?. ( 0 , ) ; 
0 ^ async function ( [ ... x ] ) { } ?. ( 0 , ) ; 
0 ^ async function ( [ x , , ] ) { } ?. ( 0 , ) ; 
0 || 0 | async function ( [ ] ) { } ( ) [ await ] ; 
0 || 0 | async function ( [ ] ) { } ( ) [ class { } . x ??= 1n ] ; 
0 || 0 | async function ( [ ] ) { } ( ) [ null ] ; 
async function x ( ... [ [ ] ] ) { } x ( 0 ) ; 
async function x ( [ , ... x ] ) { } x ( ) ; 
async function x ( [ , ] ) { } x ( ) ; 
async function x ( [ , x ] ) { } x ( ) ; 
async function x ( [ ... x ] ) { } x ( ) ; 
async function x ( [ ] ) { } x ( 0 ) ; 
async function x ( [ ] , x ) { } x ( ) ; 
async function x ( [ x , , ] ) { } x ( ) ; 
async function x ( [ x , ... [ ] ] ) { } x ( ) ; 
async function x ( [ x , ... [ ] ] , ... [ ] ) { } x ( x ) ; 
async function x ( [ x , [ ] ] ) { } x ( ) ; 
async function x ( [ x , ] ) { } x ( ) ; 
async function x ( [ x ] ) { } x ( ) ; 
async function x ( x , ... [ [ ] ] ) { } x ( ) ; 
async function x ( { ... x } ) { } x ( ) ; 
async function x ( { 0 : x } ) { } x ( ) ; 
async function x ( { } ) { } x ( ) ; 
let x = x => async function ( [ x , , ... [ ] ] ) { } ( ) ?. x ; x ( ) ; 
var x = 0 & async function ( [ ... x ] ) { } ( ) . x -- ;
while ( async function ( ... [ [ x ] , ] ) { } ?. ( 0 ) ?. x ) ;
x : if ( async function ( { } ) { } ( ) [ this ] ) ; else ;
~ async function ( [ ] ) { } ( ) ;
~ async function ( [ ] , ... x ) { } ( ) ; 
~ async function ( x , [ ] ) { } ( ) ; 