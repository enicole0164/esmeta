+ { [ Symbol . toPrimitive ] : ( ) => x } ;
+ { [ Symbol . toPrimitive ] : 0 } ; 
+ { [ Symbol . toPrimitive ] : [ ] } ; 
+ { [ Symbol . toPrimitive ] : class { } } ; 
+ { [ Symbol . toPrimitive ] : x => 0n } ;
+ { [ Symbol . toPrimitive ] : x => 1n } ; 
+ { [ Symbol . toPrimitive ] : x => [ ] } ;
+ { [ Symbol . toPrimitive ] : x => await } ; 
+ { [ Symbol . toPrimitive ] : x => function ( ) { } ( ) . x ?. x ** 0 } ;
+ { [ { [ Symbol . toPrimitive ] : 0 } ] : 0 } ;
- [ { [ Symbol . toPrimitive ] : 0 } ] ; 
- [ { [ Symbol . toPrimitive ] : class { } } ] ;
- [ { [ Symbol . toPrimitive ] : x => [ ] } ] ;
- [ { [ Symbol . toPrimitive ] : x => await } ] ;
- [ { [ Symbol . toPrimitive ] : { } } ] ;
- { 0 : 0 , 0 : 0 || 0 ^ { [ Symbol . toPrimitive ] : 0 } != 0 , } ; 
- { [ Symbol . toPrimitive ] : 0 } ; 
- { [ Symbol . toPrimitive ] : class { } } ; 
- { [ Symbol . toPrimitive ] : x => [ ] } ; 
- { [ Symbol . toPrimitive ] : x => new 0 } ; 
- { [ Symbol . toPrimitive ] : { } } ; 
0 != { [ Symbol . toPrimitive ] : 0 } ; 
0 != { [ Symbol . toPrimitive ] : class { } } ; 
0 != { [ Symbol . toPrimitive ] : { } } ; 
0 % { [ Symbol . toPrimitive ] : 0 } ;
0 % { [ Symbol . toPrimitive ] : class { } } ; 
0 % { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 % { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 % { [ Symbol . toPrimitive ] : { } } ; 
0 & { [ Symbol . toPrimitive ] : 0 } ; 
0 & { [ Symbol . toPrimitive ] : class { } } ; 
0 & { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 & { [ Symbol . toPrimitive ] : x => await } ; 
0 & { [ Symbol . toPrimitive ] : { } } ; 
0 * { [ Symbol . toPrimitive ] : 0 } ; 
0 ** { [ Symbol . toPrimitive ] : 0 } ; 
0 ** { [ Symbol . toPrimitive ] : class { } } ; 
0 ** { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 ** { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 ** { [ Symbol . toPrimitive ] : { } } ; 
0 + { [ Symbol . toPrimitive ] : 0 } ; 
0 + { [ Symbol . toPrimitive ] : class { } } ; 
0 + { [ Symbol . toPrimitive ] : x => 0 ( ) . x -- } ; 
0 + { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 + { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 + { [ Symbol . toPrimitive ] : { } } ; 
0 - { [ Symbol . toPrimitive ] : 0 } ; 
0 - { [ Symbol . toPrimitive ] : [ ] } ; 
0 - { [ Symbol . toPrimitive ] : class { } } ; 
0 - { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 - { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 < { [ Symbol . toPrimitive ] : 0 } ; 
0 < { [ Symbol . toPrimitive ] : class { } } ; 
0 < { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 < { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 < { [ Symbol . toPrimitive ] : { } } ; 
0 << { [ Symbol . toPrimitive ] : 0 } ; 
0 << { [ Symbol . toPrimitive ] : [ ] } ; 
0 << { [ Symbol . toPrimitive ] : class { } } ; 
0 << { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 << { [ Symbol . toPrimitive ] : x => await } ; 
0 <= { [ Symbol . toPrimitive ] : 0 } ; 
0 <= { [ Symbol . toPrimitive ] : [ ] } ; 
0 <= { [ Symbol . toPrimitive ] : class { } } ; 
0 <= { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 <= { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 == { [ Symbol . toPrimitive ] : 0 } ; 
0 == { [ Symbol . toPrimitive ] : 0 } in [ ] ;
0 == { [ Symbol . toPrimitive ] : [ ] } ; 
0 == { [ Symbol . toPrimitive ] : class { } } ; 
0 == { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 == { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 > { [ Symbol . toPrimitive ] : 0 } ; 
0 > { [ Symbol . toPrimitive ] : class { } } ; 
0 > { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 > { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 > { [ Symbol . toPrimitive ] : { } } ; 
0 >= [ { [ Symbol . toPrimitive ] : 0 } ] ; 
0 >= { [ Symbol . toPrimitive ] : 0 } ; 
0 >= { [ Symbol . toPrimitive ] : async x => 0 ?. ( ) } ;
0 >= { [ Symbol . toPrimitive ] : async x => await 0 ?. x ( ) } ; 
0 >= { [ Symbol . toPrimitive ] : async x => x %= 0 ?. ( ) } ; 
0 >= { [ Symbol . toPrimitive ] : class { } } ; 
0 >= { [ Symbol . toPrimitive ] : x => ( x => null ) ( ) . x ?. x } ;
0 >= { [ Symbol . toPrimitive ] : x => ( x => x ) ( ) . x ?. x } ;
0 >= { [ Symbol . toPrimitive ] : x => 0 [ 0 ( ) ] } ; 
0 >= { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 >= { [ Symbol . toPrimitive ] : x => delete 0 ( ) } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return ! 0 ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return 0 ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return 1n ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return [ 0 ] ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return `` ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return null ; } ( ) . x ?. x } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return null ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return x ; } ( ) [ 0 % 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return x ; } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { return x ; } ( ) [ x ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { } ( ) . x ?. x } ; 
0 >= { [ Symbol . toPrimitive ] : x => function ( ) { } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function * ( ) { } ( ) [ 0 ] . x ++ } ; 
0 >= { [ Symbol . toPrimitive ] : x => function * ( ... [ [ ] = 0 , ... x ] ) { } ( ) ?. x } ; 
0 >= { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 >> { [ Symbol . toPrimitive ] : ( ) => x } ; 
0 >> { [ Symbol . toPrimitive ] : 0 } ; 
0 >> { [ Symbol . toPrimitive ] : class { } } ; 
0 >> { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 >> { [ Symbol . toPrimitive ] : { } } ; 
0 >>> { [ Symbol . toPrimitive ] : 0 } ; 
0 >>> { [ Symbol . toPrimitive ] : class { } } ; 
0 >>> { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 >>> { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 >>> { [ Symbol . toPrimitive ] : { } } ; 
0 ?. [ { [ Symbol . toPrimitive ] : 0 } ] ; 
0 ?. [ { [ Symbol . toPrimitive ] : [ ] } ] ; 
0 ?. [ { [ Symbol . toPrimitive ] : class { } } ] ; 
0 ?. [ { [ Symbol . toPrimitive ] : x => [ ] } ] ; 
0 ?. [ { [ Symbol . toPrimitive ] : x => await } ] ; 
0 [ { [ Symbol . toPrimitive ] : 0 } % 0 ] ;
0 [ { [ Symbol . toPrimitive ] : 0 } ] ;
0 [ { [ Symbol . toPrimitive ] : class { } } ] ; 
0 [ { [ Symbol . toPrimitive ] : x => [ ] } ] ; 
0 [ { [ Symbol . toPrimitive ] : x => new 0 } ] ; 
0 [ { [ Symbol . toPrimitive ] : { } } ] ; 
0 ^ [ { [ Symbol . toPrimitive ] : 0 } ] ; 
0 ^ [ { [ Symbol . toPrimitive ] : class { } } ] ; 
0 ^ [ { [ Symbol . toPrimitive ] : x => [ ] } ] ; 
0 ^ [ { [ Symbol . toPrimitive ] : x => await } ] ; 
0 ^ [ { [ Symbol . toPrimitive ] : { } } ] ; 
0 ^ { [ Symbol . toPrimitive ] : 0 } ; 
0 ^ { [ Symbol . toPrimitive ] : [ ] } ; 
0 ^ { [ Symbol . toPrimitive ] : class { } } ; 
0 ^ { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 ^ { [ Symbol . toPrimitive ] : x => new 0 } ; 
0 instanceof { [ Symbol . hasInstance ] : x => await } ; 
0 | { [ Symbol . toPrimitive ] : 0 } ; 
0 | { [ Symbol . toPrimitive ] : [ ] } ; 
0 | { [ Symbol . toPrimitive ] : class { } } ; 
0 | { [ Symbol . toPrimitive ] : x => [ ] } ; 
0 | { [ Symbol . toPrimitive ] : x => new 0 } ; 
1 != { [ Symbol . toPrimitive ] : x => [ ] } ; 
1 ** { [ Symbol . toPrimitive ] : 0 } ** 0 ; 
1 < { [ Symbol . toPrimitive ] : 0 } ;
1 == { [ Symbol . toPrimitive ] : 0 } ; 
1 >= { [ Symbol . toPrimitive ] : { } } ; 
[ { [ Symbol . toPrimitive ] : 0 } ] < 0 ; 
[ { [ Symbol . toPrimitive ] : 0 } ] <= 0 ; 
[ { [ Symbol . toPrimitive ] : 0 } ] > 0 ;
[ { [ Symbol . toPrimitive ] : 0 } ] > `` ; 
`${ 0 }${ 0 }${ { [ Symbol . toPrimitive ] : 0 } }` ; 
`${ 0 }${ 0 }${ { [ Symbol . toPrimitive ] : class { } } }` ; 
`${ 0 }${ 0 }${ { [ Symbol . toPrimitive ] : x => [ ] } }` ; 
`${ 0 }${ 0 }${ { [ Symbol . toPrimitive ] : x => new 0 } }` ; 
`${ 0 }${ 0 }${ { [ Symbol . toPrimitive ] : { } } }` ; 
`${ 0 }${ { [ Symbol . toPrimitive ] : 0 } }` ; 
`${ 0 }${ { [ Symbol . toPrimitive ] : [ ] } }` ; 
`${ 0 }${ { [ Symbol . toPrimitive ] : class { } } }` ; 
`${ 0 }${ { [ Symbol . toPrimitive ] : x => [ ] } }` ; 
`${ 0 }${ { [ Symbol . toPrimitive ] : x => await } }` ; 
`${ { [ Symbol . toPrimitive ] : 0 } }` ; 
`${ { [ Symbol . toPrimitive ] : async function ( [ ] = 0 ) { var x , x ; } } }` ; 
`${ { [ Symbol . toPrimitive ] : async function ( [ ] = 0 ) { var x ; } } }` ; 
`${ { [ Symbol . toPrimitive ] : class { } } }` ; 
`${ { [ Symbol . toPrimitive ] : false } }` ;
`${ { [ Symbol . toPrimitive ] : x => [ ] } }` ; 
`${ { [ Symbol . toPrimitive ] : x => await } }` ; 
`${ { [ Symbol . toPrimitive ] : { } } }` ; 
`` [ { [ Symbol . toPrimitive ] : 0 } % 0 ] ; 
~ [ { [ Symbol . toPrimitive ] : 0 } ] ;
~ { [ Symbol . toPrimitive ] : 0 } ; 
~ { [ Symbol . toPrimitive ] : [ ] } ; 
~ { [ Symbol . toPrimitive ] : class { } } ; 
~ { [ Symbol . toPrimitive ] : x => 0 ( ) ?. [ 0 ] } ; 
~ { [ Symbol . toPrimitive ] : x => [ ] } ; 
~ { [ Symbol . toPrimitive ] : x => new 0 } ; 
~ { [ { [ Symbol . toPrimitive ] : 0 } ] : 0 } ; 
~ { [ { [ Symbol . toPrimitive ] : [ ] } ] : 0 } ; 
~ { [ { [ Symbol . toPrimitive ] : class { } } ] : 0 } ; 
~ { [ { [ Symbol . toPrimitive ] : x => [ ] } ] : 0 } ;
~ { [ { [ Symbol . toPrimitive ] : x => new 0 } ] : 0 } ; 
