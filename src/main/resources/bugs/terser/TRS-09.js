! ! 0 in 0 ; 
! 0 / 0 in 0 ; 
! 0 < 0 in 0 ; 
! 0 <= 0 in 0 ; 
! 0 > 0 in 0 ; 
! 0 >= 0 in 0 ; 
! 0 in 0 ; 
! 0 in [ ] in 0 ; 
! typeof ! 0 in 0 ; 
! { ... 0 != 0 in 0 } ; 
! { ... 0 !== 0 in 0 } ; 
! { ... 0 & 0 in 0 } ; 
! { ... 0 === 0 in 0 } ; 
! { ... 0 in 0 !== 0 , } ; 
! { ... 0 in 0 & 0 } ; 
! { ... 0 in 0 === 0 } ; 
! { ... 0 in 0 } ; 
! { 1 : 0 !== 0 in 0 } ; 
! { 1 : 0 in 0 == 0 } ; 
! { 1 : 0 in 0 instanceof 0 === 0 } ; 
! { 1 : 0 in 0 } ; 
! { [ 0 in 0 ] : 0 } ; 
! { x : 0 in 0 !== 0 < 0 , } ; 
'' + 0n in 0 ?? 0 ; 
'' . x ?. x ?. x in 0 ; 
'' < 0 in 0 ; 
'' < { } in 0 ; 
'' << 0 in 0 ; 
'' <= '' in 0 ; 
'' > '' in 0 ; 
'' >= 0 in 0 ; 
'' >= 0n in 0 ; 
'' >> 0 in 0 ; 
'' ?. x ?. x in 0 ; 
'' [ [ ] ] > 0n in 0 ; 
'' in ! ~ 0 ; 
'' in 0 - 1n . x ; 
'' in 0 - `` . x ; 
'' in 0 - this . x ; 
'' in 0 . x ?. x ; 
'' in [ ] in 0 ; 
'' in function ( ) { } ( ) ?. x ; 
'' in { done : '' } . x ?. x ; 
( x => 0 in 0 ) ( ) ;
( x => 0 in x ) ( ) ;
( x => x in 0 ) ( ) ;
+ ! 0 in 0 ; 
+ 0 in 0 ; 
+ void 0 in 0 ; 
- ! 0 in 0 ; 
- 0 < 0 in 0 ; 
- 0 <= 0 in 0 ; 
- 0 > '' in 0 ; 
- 0 >= 0 in 0 ; 
- 0 [ 0 ] in 0 ; 
- 0 in 0 ; 
- 0 in function ( ) { } ( ) ?. x ; 
- 0n in 0 ; 
- 1n in 0 ; 
- `${ 0 }` [ 0 ] in `` ; 
- `` [ '' ] in 0 ; 
- `` [ 0 ] in 0 ; 
- `` in 0 ; 
- null in 0 ; 
- { ... 0 in 0 . x } ; 
- { ... 0 in 0 == 0 , } ; 
- { ... 0 in 0 } ; 
- { ... 0 in 0n . x } ; 
- { ... 0 in `` . x } ; 
- { 1 : 0 !== 0 in 0 } ; 
- { 1 : 0 === 0 in 0 } ; 
- { 1 : 0 in 0 } ; 
- { [ 0 in 0 ] : 0 } ; 
- { [ 0 in 0 in 0 ] : 0 } ; 
- { [ Symbol . toPrimitive ] : '' } in 0 ; 
- { [ Symbol . toPrimitive ] : [ 0 , ] } in 0 ; 
- { } in 0 ; 
0 != 0 in 0 . x ; 
0 != 0 in 0 ; 
0 != 0 in 0 < 0 !== 0 ?? 0 ; 
0 != 0 in 0 ? 0 : 0 ; 
0 != 0 in 0 [ 0 ] < 0 !== 0 ?? 0 ; 
0 != 0 in 1n . x ; 
0 != 0 in `` . x ; 
0 != 0 in true . x ; 
0 !== 0 in 0 != 0 ; 
0 !== 0 in 0 !== 0 && 0 ; 
0 !== 0 in 0 !== 0 ; 
0 !== 0 in 0 ; 
0 !== 0 in 0 << 0 && 0 ; 
0 !== 0 in 0 == 0 != 0 ; 
0 !== 0 in 0 ?? 0 ; 
0 !== 0 in 0 | 1 ?? 0 ; 
0 !== 0 in 0 || 0 ? 0 : 0 ; 
0 % 0 > 0n in 0 ; 
0 % 0 in 0 ; 
0 % 1 in 0 ; 
0 % { } in 0 ; 
0 & 0 === 0 in 0 ; 
0 & `${ 0 > 0 in 0 % ! ~ 0 }` ; 
0 & `${ 0 > 0 in 0n . x }` ; 
0 & `${ 0 > 0 in `` . x }` ; 
0 & { 0 : 0 . x in 0 } ; 
0 & { 0 : 0n . x in 0 } ; 
0 & { 0 : [ ] . x in 0 } ; 
0 & { 0 : `` . x in 0 } ; 
0 & { 0 : true . x in 0 } ; 
0 & { [ Symbol . toPrimitive ] : x => 0 in 0 } ; 
0 * 0 in 0 ; 
0 ** '' in 0 ; 
0 ** 0 . x in 0 ; 
0 ** 0 in 0 ; 
0 ** 1 in 0 ; 
0 ** [ ] in 0 ; 
0 ** null in 0 ; 
0 ** { } in 0 ; 
0 ** ~ 0 + { [ Symbol . toPrimitive ] : x => 0 } in `` ; 
0 ** ~ 0 <= '' in 0 ; 
0 ** ~ 0 in 0 ; 
0 + ! 0 . x in `` ; 
0 + { [ Symbol . toPrimitive ] : x => 0 } in `` ; 
0 + { [ Symbol . toPrimitive ] : x => { } } in `` ; 
0 - null in 0 ; 
0 . x & 0 != 0 in 0 ; 
0 . x + 0 in 0 ; 
0 . x < 0 in 0 ; 
0 . x << 0 in 0 ; 
0 . x <= 0 in 0 ; 
0 . x >= 0 in 0 ; 
0 . x in 0 ; 
0 . x in 0 <= 0 > 0 ?? 0 ; 
0 . x in [ ] in 0 ; 
0 / 0 . x in 0 ; 
0 / 0 >= 0n in 0 ; 
0 / 0 >= x in 0 ; var x ; 
0 / 0 in 0 ; 
0 / 0n . x in 0 ; 
0 / 1 in 0 ; 
0 / `` . x in 0 ; 
0 / `` in 0 ; 
0 / null in 0 ; 
0 / { ... 0 in 0 . x , } ; 
0 / { ... false in 0 , } ; 
0 / { } in 0 ; 
0 / ~ 0 >= 0 in 0 ; 
0 / ~ 0 in 0 ; 
0 < ! 0 in 0 ; 
0 < '' in 0 ; 
0 < - 0 in 0 ; 
0 < 0 . x in 0 ; 
0 < 0 in 0 ; 
0 < 0 in [ ] in 0 ; 
0 < 1 in 0 ; 
0 < 1n in '' ; 
0 < 1n in 0 ; 
0 < this in 0 ; 
0 < { } in 0 ; 
0 << - delete 0 in 0 ; 
0 << 0 in 0 ; 
0 << 0n in 0 ; 
0 << 1 in 0 ; 
0 << true in 0 ; 
0 <= ! 1 in 0 ; 
0 <= '' in 0 ; 
0 <= 0 in 0 ; 
0 <= 1 in 0 ; 
0 <= [ ... 0 === 0 in '' . x ] ; 
0 <= [ ... 0 in 0 . x ] ; 
0 <= [ ... 0 in 1n . x ] ; 
0 <= [ ... `` ?. x in 0 ] ; 
0 <= [ ... true ?. x in 0 ] ; 
0 <= { } in 0 ; 
0 == ! delete 0 << 1 in 0 >> '' >> 0 & 0 ; 
0 == 0 in 0 - 1 >> 1 ; 
0 == 0 in 0 ; 
0 == 0 in 0 == 0 ; 
0 == 0 in 0 === '' != 0 ; 
0 == 0 in 0 >> { [ Symbol . toPrimitive ] : async x => 0 } ; 
0 == 0 in 1n >> 0n ; 
0 == ~ 0 << 1 in 0 >> '' >> 0 & 0 ; 
0 === 0 << 0 in 0 || 0 ; 
0 === 0 in 0 !== 0 ^ 0 , 0 ; 
0 > '' in 0 ; 
0 > 0 < 0 in 0 ; 
0 > 0 > 0 in 0 ; 
0 > 0 >= 0 in 0 ; 
0 > 0 in 0 ; 
0 > 0n in 0 ; 
0 > 1 in 0 ; 
0 > null in 0 ; 
0 > { } in 0 ; 
0 >= ! 0 in 0 ; 
0 >= ! 1 in 0 ; 
0 >= '' in 0 ; 
0 >= - 0 in 0 ; 
0 >= 0 . x in 0 ; 
0 >= 0 in 0 ; 
0 >= 0n . x in 0 ; 
0 >= 0n in 0 ; 
0 >= 1 in 0 ; 
0 >= 1n in 0 ; 
0 >= [ ] in 0 ; 
0 >= `` [ 0 ?? 0 ] in 0 ; 
0 >= `` [ [ ] ] in 0 ; 
0 >= null in 0 ; 
0 >= this in 0 ; 
0 >= true . x in 0 ; 
0 >= { } . x ++ in 0 ; 
0 >= { } in 0 ; 
0 >> ! 0 in 0 ; 
0 >> 0 in 0 ; 
0 >> this in 0 ; 
0 >> ~ 0 in 0 ; 
0 >>> `` . x in 0 ?? 0 ; 
0 >>> true . x in 0 ?? 0 ; 
0 ? 0 : 0 . x in 0 ; 
0 ? 0 : 0 in 0 ; 
0 ? 0 : new class { } in 0 ; 
0 ? 0 : new function ( ) { } in 0 ; 
0 ?. [ ( 0 in 0 ) ] ; 
0 ?. [ 0 != 0 in 0 ] ; 
0 ?. [ 0 == '' in 0 . x ] ; 
0 ?. [ 0 == '' in this . x ] ; 
0 ?. [ 0 in 0 ] ; 
0 ?. [ 0 in 0 instanceof 0 ] ; 
0 ?. [ 1n in 0 . x ] ; 
0 ?. [ [ ] in 0 . x ] ; 
0 ?. x < 0 in 0 ; 
0 ?. x ?. x in 0 ; 
0 ?. x in 0 ; 
0 [ 0 === 0 in 0 == '' ] ; 
0 [ 0 ] in 0 ; 
0 [ 0 in 0 ?? 0 ] ; 
0 [ 0 in 0 ] ; 
0 [ 0 in 0 in 0 ] ; 
0 [ 1n ] > 0n in 0 ; 
0 [ [ ] ] > 0n in 0 ; 
0 ^ 0 != 0 in 0 ; 
0 ^ 0 & 0 === 0 in 0 ; 
0 ^ 0 === 0 in 0 ; 
0 ^ 0 in 0 * - 0 ; 
0 ^ 0 in 0 . x ; 
0 ^ 0 in 0 . x instanceof 0 ; 
0 ^ 0 in 0 ; 
0 ^ 0 in 0 instanceof 0 ; 
0 ^ 0 in 1n [ 0 ] instanceof 0 ; 
0 ^ 0 in `${ 0 }` [ 0 ] ; 
0 ^ 0 in `${ 0 }` [ 0 ] instanceof 0 ; 
0 ^ 0 in `` [ ! 0 ] ; 
0 ^ 0 in `` [ '' ] ; 
0 ^ 0 in `` [ 0 / 0 ] ; 
0 ^ 0 in `` [ 0 < 0 ] ; 
0 ^ 0 in `` [ 0 ] ; 
0 ^ 0 in `` [ 0 ] instanceof 0 ; 
0 ^ 0 in `` [ null ] ; 
0 ^ 0 in `` [ void 0 ] ; 
0 ^ 0 in `` [ { } ] instanceof 0 ; 
0 ^ 0 in this * - 0 ; 
0 ^ 0 in true [ 0 ] instanceof 0 ; 
0 ^ 0 || 0 in 0 === 0 ; 
0 in ! 0 + 0 ; 
0 in ! 0 - 0 ; 
0 in ! 0 / 0 ; 
0 in ! 0 ; 
0 in ! 0 >> 0 ; 
0 in ! 1 + '' ; 
0 in ! 1 + 0 ; 
0 in ! 1 - 0 ; 
0 in ! 1 / 0 ; ; 
0 in ! typeof 0 + [ ] ; 
0 in ! typeof 0 ; 
0 in ! x ; var x ; 
0 in ! ~ 0 ; 
0 in '' + 0 ; 
0 in '' - 0 ; 
0 in '' / 0 ; 
0 in '' ; 
0 in '' [ 0 % 0 ] ; 
0 in '' [ 0 ] ; 
0 in ( 0 ) ; 
0 in + ! 0 ; ; 
0 in + '' . x ?? 0 ; 
0 in + '' ?? 0 ; 
0 in + 0 . x ?? 0 ; 
0 in + 0 ; 
0 in + [ ] ?? 0 ; 
0 in + null ?? 0 ; 
0 in + true . x ?? 0 ; 
0 in + void 0 ; ; 
0 in - ! 0 ; ; 
0 in - ! 1 ; ; 
0 in - ! x ; var x ; 
0 in - '' . x ; ; 
0 in - '' ; ; 
0 in - 0 - 0 ; 
0 in - 0 . x ; 
0 in - 0 ; 
0 in - 0n ; ; 
0 in - 1n . x ; ; 
0 in - 1n ; ; 
0 in - null ; ; 
0 in - true . x ; ; 
0 in - x ; var x ; 
0 in - { } . x ; ; 
0 in - { } ; ; 
0 in 0 !== 0 ;
0 in 0 !== 0 ^ 0 ; 
0 in 0 !== 0 | 0 ; 
0 in 0 % ! 0 ; 
0 in 0 % 0 + 0 ; 
0 in 0 % 0 ; 
0 in 0 % { } ; ; 
0 in 0 & 0 ; 
0 in 0 && 0 ; 
0 in 0 ** ! 0 ; 
0 in 0 ** 0 . x ; 
0 in 0 ** 0 ; 
0 in 0 ** 0n . x ; ; 
0 in 0 ** 1 ; 
0 in 0 ** [ ] . x ; ; 
0 in 0 ** null ; 
0 in 0 ** { [ Symbol . toPrimitive ] : x => 0 } ; ; 
0 in 0 ** { } ; 
0 in 0 ** ~ 0 * 0 ** 0 ** 1 / ~ 0 ; ; 
0 in 0 ** ~ 0 * 0 ** 0 / 0 ; ; 
0 in 0 ** ~ 0 * 0 ** 1 / 0 ; ; 
0 in 0 ** ~ 0 ; ; 
0 in 0 + ! 0 ; 
0 in 0 + '' ; 
0 in 0 + 0 ** ~ 0 ; 
0 in 0 + 0 . x ; 
0 in 0 + 0 ; 
0 in 0 + 1n . x ; ; 
0 in 0 + [ 0 , , ] . x ; ; 
0 in 0 + [ ] ; 
0 in 0 + null ; 
0 in 0 + true . x ; ; 
0 in 0 + { [ Symbol . toPrimitive ] : null } ; 
0 in 0 + ~ 0 . x ; 
0 in 0 , 0 ; 
0 in 0 - ! 0 ; 
0 in 0 - ! delete 0 ; 
0 in 0 - '' ; 
0 in 0 - 0 . x ; 
0 in 0 - 0 ; 
0 in 0 - 1n . x ; 
0 in 0 - [ ] ; 
0 in 0 - `` . x ; 
0 in 0 - null ; 
0 in 0 - { } ; 
0 in 0 . x ** 0 ; 
0 in 0 . x + 0 ; 
0 in 0 . x - 0 ; 
0 in 0 . x / 0 ; 
0 in 0 . x ; 
0 in 0 . x < 0 ; 
0 in 0 . x >> 0 ; 
0 in 0 . x >>> 0 ; 
0 in 0 . x >>> 0 ; ; 
0 in 0 . x >>> x ; var x ; 
0 in 0 . x ?? 0 ; 
0 in 0 . x in 0 ; 
0 in 0 / 0 ; 
0 in 0 / 0n . x ; ; 
0 in 0 / 1 ; ; 
0 in 0 / `${ 0 }` . x ; ; 
0 in 0 / this . x ; 
0 in 0 / this . x ; for ( var x ; ; ) ; 
0 in 0 / true . x ; ; 
0 in 0 / ~ 0 ; ; 
0 in 0 ; 
0 in 0 < 0 ; 
0 in 0 < 0 >= 0 ; 
0 in 0 < 0 ?? 0 ? 0 : 0 ; 
0 in 0 <= 0 && 0 ; 
0 in 0 <= 0 ; 
0 in 0 <= 0 >= 0 ; 
0 in 0 <= 0 instanceof 0 ; 
0 in 0 == 0 ? 0 : 0 ; 
0 in 0 === 0 , 0 ; 
0 in 0 === 0 ; 
0 in 0 > 0 ; 
0 in 0 > 0 in 0 ; 
0 in 0 >= 0 ; 
0 in 0 >= x ; 
0 in 0 >> ! 0 ; 
0 in 0 >> 0 . x ; 
0 in 0 >> 0 ; 
0 in 0 >> 1 ; 
0 in 0 >> `` ; 
0 in 0 >> null ; 
0 in 0 >> { } ; 
0 in 0 >> ~ 0 ; 
0 in 0 >>> '' ; 
0 in 0 >>> 0 ; 
0 in 0 >>> 0 ?. x ; ; 
0 in 0 >>> 1 ; 
0 in 0 >>> `` ; 
0 in 0 >>> null ; 
0 in 0 >>> true ; 
0 in 0 >>> { } ; ; 
0 in 0 >>> ~ 0 ; ; 
0 in 0 ? 0 : 0 ; 
0 in 0 ?? 0 ; 
0 in 0 [ ! 0 ] ; 
0 in 0 [ '' ] ; 
0 in 0 [ 0 . x ] ; 
0 in 0 [ 0 > 0 ] ; 
0 in 0 [ 0 ] + [ ] ; 
0 in 0 [ 0 ] ; 
0 in 0 [ 0 ] >= '' ; 
0 in 0 [ null ] ; 
0 in 0 [ this ] ; 
0 in 0 in 0 != 0 ; 
0 in 0 in 0 & 0 ; 
0 in 0 in 0 ; 
0 in 0 in 0 << 0 && 0 ; 
0 in 0 in 0 <= 0 & 0 ; 
0 in 0 in 0 == 1n | 0 ?? 0 ; 
0 in 0 in 0 || 0 ; 
0 in 0 in [ ] ; 
0 in 0 instanceof 0 != 1 ; 
0 in 0 instanceof 0 && 0 ; 
0 in 0 instanceof 0 ; 
0 in 0 instanceof 0 > 0 ; 
0 in 0 | 0 ; 
0 in 0 || 0 ; 
0 in 0n % 1n ; ; 
0 in 0n * 0n ; 
0 in 0n . x ; 
0 in 0n . x >>> 0 ; ; 
0 in 0n / 1n ; ; 
0 in 0n >>> 0 ; 
0 in 0n [ 0 ] >> 0 ; 
0 in 1 * - 0 ; 
0 in 1 * 0 ; 
0 in 1 * [ ] ; 
0 in 1 ** ! typeof 0 ; 
0 in 1 ** '' ; 
0 in 1 ** 1 ; 
0 in 1 / ! 0 ; 
0 in 1 / '' ; 
0 in 1 / 0 . x ; 
0 in 1 / 0 ; 
0 in 1 / 1 ; ; 
0 in 1 / null ; 
0 in 1 >> 0 ; 
0 in 1 >>> 0 ; 
0 in 1n % 1n ; ; 
0 in 1n ** 1n ; 
0 in 1n . x ** 0 ; ; 
0 in 1n . x ;
0 in [ 0 , ] [ 0 ] >> 0 ; 
0 in [ 0 ] [ 0 ? 0 : 0 ] [ 0 ] ; 
0 in [ 0 ] [ 0 ] ;
0 in [ 0 ] in 0 ; 
0 in [ ] ** 0 ; 
0 in [ ] + 0 ; 
0 in [ ] in 0 ; 
0 in `${ ! 0 }` ; 
0 in `${ 0 ** ~ 0 % 0 }` ; 
0 in `${ 0 . x }` ; 
0 in `${ 0 > 0 }` ; 
0 in `${ 0 }` ; 
0 in `${ 0 }` [ 0 ] ; 
0 in `${ 0 }` [ 0 ] >> 0 ; 
0 in `${ 0 }` [ 0 ] [ 0 ] ; 
0 in `${ 0 }` [ 0 ] [ true ] ; 
0 in `${ 0n . x }` ; 
0 in `${ 0n }` ; 
0 in `${ [ ] }` ; 
0 in `${ `${ 0 }${ 0 }` . x }` ; 
0 in `${ `` }` ; 
0 in `${ null }` ; 
0 in `${ { [ Symbol . toPrimitive ] : x => 0 } }` ; 
0 in `` ** 0 ; 
0 in `` + ! 0 ; 
0 in `` + 0 ; 
0 in `` + 0 ?. x ; 
0 in `` + null ; 
0 in `` . x ** 0 ; ; 
0 in `` . x ;
0 in `` . x >>> 0 ; ; 
0 in `` ; 
0 in `` >> 0 ; 
0 in `` >>> 0 ; ; 
0 in `` [ 0 ** 0 % 0 ] >> 0 ; 
0 in `` [ 0 ] >> 0 ; 
0 in `` [ 1n ] ; 
0 in `` [ true ] >> 0 ; 
0 in delete 0 + [ ] ; 
0 in delete 0 ; 
0 in delete 0 ?. x ; 
0 in delete 1n ?. x ; 
0 in delete [ ] ?. x ; 
0 in delete `` ?. x ; 
0 in delete true ?. x ; 
0 in delete ~ ~ 0 ; 
0 in false ** 1 ; ; 
0 in function * ( ) { } ( ) ?. x ; 
0 in null ** 0 ; 
0 in null + 0 ; 
0 in null + [ ] ; 
0 in null - 0 ; 
0 in null / 0 ; 
0 in null ; 
0 in null >> 0 ; 
0 in null >>> 0 ; 
0 in this + 0 . x ; ; 
0 in this + 0n ; 
0 in this - { [ Symbol . toPrimitive ] : function ( ) { } } ; 
0 in this - { [ Symbol . toPrimitive ] : x => { } } ; 
0 in this . x ** 0 ; ; 
0 in this . x >>> 0 ; ; 
0 in this / 0 ; 
0 in this >>> 0 ; 
0 in true ** 0 ; 
0 in true . x ** 0 ; ; 
0 in true . x ; 
0 in true ; 
0 in true >>> 0 ; 
0 in true [ 0 ] ; 
0 in true [ 0 ] >> 0 ; 
0 in typeof ! 0 ; 
0 in typeof '' ; 
0 in typeof - ! 1 ?? 0 ; 
0 in typeof 0 . x ; 
0 in typeof 0 ; 
0 in typeof 1n ; 
0 in typeof class { } ; 
0 in typeof null ; 
0 in typeof x ; 
0 in typeof x ?? 0 ; 
0 in typeof { } ; 
0 in void 0 ; 
0 in x ; var x ; 
0 in { } * 0 ; 
0 in { } ** 1 ; 
0 in { } - 0 ; 
0 in { } . x ;
0 in { } >> 0 ; 
0 in { } >>> 0 ; 
0 in { } >>> null ; 
0 in { } [ 0 ] ; 
0 in { } [ 0 ] >> 0 ; 
0 in ~ ! 0 ; ; 
0 in ~ ! 1 ; ; 
0 in ~ '' ; ; 
0 in ~ 0 * - 0 ; ; 
0 in ~ 0 / 0 ; 
0 in ~ 0 ; 
0 in ~ 0 >> 0 ; 
0 in ~ 0 >>> 0 ; 
0 in ~ 0 >>> 0 ; ; 
0 in ~ 0 [ 0 ] ; ; 
0 in ~ null ; ; 
0 in ~ { } ; ; 
0 in ~ ~ 0 ; 
0 instanceof 0 ?. x in 0 ; 
0 instanceof 0 in 0 ; 
0 instanceof [ ] in 0 ; 
0 instanceof class { } in 0 ; 
0 | 0 == 0 in 0 ; 
0 | 0 === 0 in 0 ; 
0 | 0 in 0 ; 
0 | 0 in 0 === 0 && 0 ; 
0 | 0 in 0 instanceof 0 ; 
0 | 0 in 0 instanceof 0 <= this ; 
0 | 0 in 0 instanceof 0 | 0 ; 
0 || 0 in 0 ; 
0 || 0 in 0 || 0 ; 
0 || 0 | function x ( ) { } & 0 in 0 ; 
0 || 1 | 0 & 0 in 0 . x ; 
0 || 1 | 0 & 0 in 1n . x ; 
0 || 1 | 0 & 0 in { } . x ; 
0 || 1 | 0 & this in 0 << ~ 0 ; 
0n ** 0n in 0 ; 
0n . x ?. x ?. x in 0 ; 
0n . x in 0 ; 
0n / 0 in 0 ; 
0n <= '' in 0 ; 
0n <= 0 % 0 in 0 ; 
0n <= 0 in 0 ; 
0n <= { } in 0 ; 
0n > '' in 0 ; 
0n >= 0 in 0 ; 
0n >>> ! ~ 0 in 0 ?? 0 ; 
0n >>> 1n in 0 ?? 0 ; 
0n >>> { [ Symbol . toPrimitive ] : false } in 0 ?? 0 ; 
1 ** 1 in 0 ; 
1 / 0 >= 0 in 0 ; 
1 / 0 in 0 ; 
1 / 1 in 0 ; 
1 / { [ Symbol . toPrimitive ] : async function ( x ) { } } in 0 ; 
1 / { [ Symbol . toPrimitive ] : { get : 0 } } in 0 ; 
1 < 0 in 0 ; 
1 < 0 in `` ; 
1 << 0 in 0 ; 
1 <= 0 in 0 ; 
1 > 0 in 0 ; 
1 >= 0 in 0 ; 
1 in function ( ) { } ( ) ; 
1n ** 0 in 0 ; 
1n ** 0n in 0 ; 
1n < 0 in 0 ; 
1n < { } in 0 ; 
1n <= '' in 0 ; 
1n <= 0 in 0 ; 
1n > '' in 0 ; 
1n > 0 . x in 0 ; 
1n > 0 in 0 ; 
1n > this in 0 ; 
1n >= '' in 0 ; 
1n >= this in 0 ; 
1n ?. x in 0 ?? 0 ; 
1n [ 0 ] > 0n in 0 ; 
1n in 0 ?. x & 0 ; 
[ , ... 0 != 0 in 0 ] ; 
[ , 0 !== 0 in 0 != 0 ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { switch ( yield * 0 in '' . x ) { } } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { switch ( yield * 0 in 1n . x ) { } } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { switch ( yield * 0 in true . x ) { } } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield * 0 in 0 && 0 ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield * [ ] in 0 . x ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield 0 ( ) in 0 , 0 ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield 0 . x in 0 , 0 ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield new . target [ 0 ] in 0 , 0 ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield x in 0 , 0 ; } } ] ; 
[ , 0 , , ... { [ Symbol . iterator ] : function * ( x ) { yield x in 0 ^ 0 ; } } ] ; 
[ , 0 . x in 0 ] ; 
[ , 0 < 0 !== 0 in 0 ] ; 
[ , 0 == 0 in 0 . x , , ] ; 
[ , 0 == 0 in 1n . x , , ] ; 
[ , 0 == 0 in `` . x , , ] ; 
[ , 0 == 0 in true . x , , ] ; 
[ , 0 === 0 in 0 ] ; 
[ , 0 in '' . x ] ; 
[ , 0 in 0 !== 0 , 0 ] ; 
[ , 0 in 0 . x ] ; 
[ , 0 in 0 ] ; 
[ , 0 in 0n . x ] ; 
[ , 0 in [ ] . x ++ ] ; 
[ , 0 in { } . x ++ ] ; 
[ , 0 in { } . x ] ; 
[ , ] in 0 ; 
[ ... 0 & 0 in 0 ] ; 
[ ... 0 , ] in 0 ; 
[ ... 0 == 0 in 0 ] ; 
[ ... 0 in 0 != 0 , ] ; 
[ ... 0 in 0 . x ] ; 
[ ... 0 in 0 ] ; 
[ ... 0 in 0 in 0 ] ; 
[ ... { [ Symbol . iterator ] : function * ( ) { if ( yield * 0 in 0 ) ; } } ] ; 
[ ... { [ Symbol . iterator ] : function * ( ) { return yield * 0 != 0 in 0 ; } } ] ; 
[ ... { [ Symbol . iterator ] : function * ( ) { yield 0 in 0 !== 0 ; } } ] ; 
[ ... { [ Symbol . iterator ] : function * ( ) { yield 0 in 0 ; } } ] ; 
[ 0 !== 0 in 0 ] ; 
[ 0 , , 0 !== 0 in 0 . x , ] ; 
[ 0 , , 0 !== 1n . x in 0 , ] ; 
[ 0 , , 0 ** 0 ? 0 in 0 : 0 ] ; 
[ 0 , , 0 in 0 . x ] ; 
[ 0 , , 0 in 0 ] ; 
[ 0 , , 0 in 0 in 0 ] ; 
[ 0 , , 0 in 0 instanceof 0 !== 0 ] ; 
[ 0 , , 0 in 0n . x ] ; 
[ 0 , , 0 in `` . x ] ; 
[ 0 , , ] in 0 ; 
[ 0 , ... { [ Symbol . toPrimitive ] : x => 0 in 0 } & 0 != 0 ] ; 
[ 0 , 0 !== 0 in 0 , ] ; 
[ 0 , 0 in + 0 [ 0 ] , , ] ; 
[ 0 , 0 in + null , , ] ; 
[ 0 , 0 in + { [ Symbol . toPrimitive ] : null } , , ] ; 
[ 0 , 0 in + { [ Symbol . toPrimitive ] : x => 0 > 0 } , , ] ; 
[ 0 , 0 in + { [ Symbol . toPrimitive ] : x => 0 } , , ] ; 
[ 0 , 0 in + { [ Symbol . toPrimitive ] : x => true } , , ] ; 
[ 0 , 0 in + { [ Symbol . toPrimitive ] : x => { } } , , ] ; 
[ 0 , 0 in + { } , , ] ; 
[ 0 , 0 in 0 !== 0 ] ; 
[ 0 , 0 in 0 ?. x , , ] ; 
[ 0 , 0 in 0 ] ; 
[ 0 , 0 in 0 in 0 ? 0 : 0 ] ; 
[ 0 , 0 in 0 instanceof 0 ] ; 
[ 0 , 0 in 0n ?. x , , ] ; 
[ 0 , 0 in 0n [ 0 ] - 0 , , ] ; 
[ 0 , 0 in [ 0 , ] ?. x , , ] ; 
[ 0 , 0 in `` + true , , ] ; 
[ 0 , 0 in `` . x ?. x + 0 , , ] ; 
[ 0 , 0 in class { } ?. x + 0 , , ] ; 
[ 0 , 0 in this - [ 0 , ] [ 0 ] , , ] ; 
[ 0 , 0 in this . x ?. x + 0 , , ] ; 
[ 0 , 0 in true ?. x , , ] ; 
[ 0 , 0 in { } + null , , ] ; 
[ 0 , 0 in { } [ 0 ] - 0 , , ] ; 
[ 0 , ] in 0 ; 
[ 0 , `${ 0 !== 0 in 0 }` ] ; 
[ 0 - null , 0 & 0 in 0 ?? 0 ] ; 
[ 0 <= 0 + { [ Symbol . toPrimitive ] : async x => { for await ( let x of ! 0 in 0 [ 0 ] . x ) ; } } ] ; 
[ 0 <= 0 + { [ Symbol . toPrimitive ] : async x => { for await ( let x of 0 in 0 . x ) ; } } ] ; 
[ 0 ?. x || 0 in 0 ? 0 : 0 , , 0 <= 0 ] ; 
[ 0 ] < this in 0 ; 
[ 0 ] > 0n in 0 ; 
[ 0 ] >= typeof void 0 in 0 ; 
[ 0 ] in 0 ; 
[ 0 ^ 0 in 0 ?. x ] ; 
[ 0 in ! ! + 0 ] ; 
[ 0 in 0 , , ] >>> 0n ; 
[ 0 in 0 . x <= 0 , 0 ] ; 
[ 0 in 0 . x ] ; 
[ 0 in 0 . x | 0 , , 0 ] ; 
[ 0 in 0 ] ; 
[ 0 in 0 in 0 in 0 < 0 ] ; 
[ 0 in 0 instanceof 0 in 0 , 0 , 0 ] ; 
[ 0 in `` ?. x <= 0 , 0 ] ; 
[ 0 in function * x ( ) { } ?. x ] ; 
[ 0 in this ?. x <= 0 , 0 ] ; 
[ 0 || 0 in 0 . x ] ; 
[ 0 || 0 in 0 ? 0 : 0 , , 0 <= 0 ] ; 
[ 0 || `` . x in 0 || 0 , , 0 ] ; 
[ 0 || { [ 0 . x in 0 ] : 0 , } > 0 == 0 >= 0 ] ; 
[ 0 || { [ `` . x in 0 ] : 0 , } > 0 == 0 >= 0 ] ; 
[ 0 || { [ true . x in 0 ] : 0 , } > 0 == 0 >= 0 ] ; 
[ 0n ?. x || 0 in 0 ? 0 : 0 , , 0 <= 0 ] ; 
[ [ 0 , , ] ?. x || 0 in 0 ? 0 : 0 , , 0 <= 0 ] ; 
[ ] . x ?. x ?. x in 0 ; 
[ ] / 0 in 0 ; 
[ ] < - 0 in 0 ; 
[ ] < 0 in 0 ; 
[ ] < 0n in 0 ; 
[ ] < 1n in 0 ; 
[ ] < `` in 0 ; 
[ ] << 0 in 0 ; 
[ ] >= 0 in 0 ; 
[ ] >= { [ Symbol . toPrimitive ] : 0 } in 0 ; 
[ ] >= { } in 0 ; 
[ ] ?. x ?. x in 0 ; 
[ ] [ 0 ] ||= 0 & 0 in 0 ? 0 : 0 ; 
[ ] in 0 ; 
[ class x extends 0 { } in 0 ] ; 
[ function ( ) { } ^ 0 in 0 ] ; 
[ function * ( ) { } ^ 0 in 0 ] ; 
[ function * x ( ) { } ^ 0 in 0 ] ; 
[ function x ( ) { } ^ 0 in 0 ] ; 
[ null || 0 in 0 ? 0 : 0 , , 0 <= 0 ] ; 
`${ ! 0 }` in 0 ; 
`${ 0 != 0 in 0 !== 0 }` >> 0 ; 
`${ 0 . x in 0 }` ; 
`${ 0 . x }` in 0 ; 
`${ 0 < 0 }` in 0 ; 
`${ 0 === 0 in 0 || 0 }` ; 
`${ 0 in 0 . x >= 0 }` ; 
`${ 0 in 0 . x }` ; 
`${ 0 in 0 >> - 0 / ~ 0 >= 0 }` ; 
`${ 0 in 0 ?. x }` ; 
`${ 0 in 0 instanceof 0 >= 0 }` ; 
`${ 0 in 0 }` ; 
`${ 0 }${ 0 != 0 in 0 }` ; 
`${ 0 }${ 0 in '' . x }` ; 
`${ 0 }${ 0 in 0 % delete '' [ 0 , 0 % 0 ] }` ; 
`${ 0 }${ 0 in 0 % delete '' [ 0 , 0 ] }` ; 
`${ 0 }${ 0 in 0 % delete [ 0 ] [ 0 , 0 ] }` ; 
`${ 0 }${ 0 in 0 . x }` ; 
`${ 0 }${ 0 in 0 in 0 }` ; 
`${ 0 }${ 0 in 0 }` ; 
`${ 0 }${ 0 in true . x }` ; 
`${ 0 }${ 0 }${ 0 . x in 0 }` ; 
`${ 0 }${ 0 }${ 0 in 0 . x }` ; 
`${ 0 }${ 0 }${ 0 in 0 in 0 >> 0 }` ; 
`${ 0 }${ 0 }${ 0 in 0 }` ; 
`${ 0 }${ 0 }${ this in 0 . x }${ 0 }` ; 
`${ 0 }${ 1n in 0 . x }` ; 
`${ 0 }` in 0 ; 
`${ 0n . x }` in 0 ; 
`${ 0n ?. x }` == 0 << 0 in 0 >> 0 >> 0 & 0 ; 
`${ 1n }` in 0 ; 
`${ [ ] . x }` in 0 ; 
`${ `` }` in 0 ; 
`${ null }` == 0 << 0 in 0 >> 0 >> 0 & 0 ; 
`${ null }` in 0 ; 
`${ { 1 : 0 } . x in 0 }` ; 
`${ { } }` in 0 ; 
`` . x in 0 ;
`` < 0 in 0 ; 
`` >= 0 in 0 ; 
`` >= 1n in 0 ; 
`` >= typeof void 0 in 0 ; 
`` [ 0 ] > 0 in 0 ; 
`` in 0 ; 
class x { static { if ( 0 in 0 ) ; } } 
class x { static { if ( super [ 0 in 0 ?? 0 ? 0 : 0 ] ) ; } } 
class x { static { if ( true - { [ Symbol . toPrimitive ] : x => 0 in 0 } ) ; } } 
delete '' . x in 0 ; 
delete 0 . x in 0 ; 
delete 0 in 0 ; 
delete 0n . x in 0 ; 
delete [ ] . x in 0 ; 
delete `${ 0 in 0 }` ; 
delete true . x in 0 ; 
do if ( 0 [ 0 ] in 0 ) ; else ; while ( 0 ) ; 
do if ( 0 in 0 . x ) ; else ; while ( 0 ) ; 
false ** 0 in 0 ; 
for ( 0 ; 0 in 0 , 0 ; 0 ) ; 
for ( ; 0 & 0 & 0 in 0 ?? 0 , 0 ; 0 ) ; 
for ( ; 0 in 0 ? 0 : 0 ; ) ; 
for ( ; { [ Symbol . toPrimitive ] : x => 0 in 0 } >= 0 ; 0 ) break ; 
for ( [ , ] [ 0 ] in [ 0 ] ) ;
for ( [ 0 in 0 >> ! 1 in 0 ] <= `` ; 0 ; ) ; 
for ( [ 0 in x >> ! 0 in 0 ] <= `` ; 0 ; ) var x , x ; 
for ( let x ; { set : 0 in x } ; 0 ) ; 
for ( var x ; ; 0 || 0 !== 0 in 0 ? 0 : 0 ) ; 
for ( var x ; this . x ^= 1 ; ) if ( 0 in 0 ) ; else ; 
for ( var x ; x => 0 ; 0 ) switch ( 0 in 0 ? 0 : 0 ) { } 
for ( var x of [ 0 ] ) 0 in 0 ; 
for ( { x : 0 } . x in [ 0 ] ) ;
for ( { } in [ 0 ] ) if ( 0 in 0 ) ; 
if ( 0 !== 0 in 0 ) ; 
if ( 0 , 0 in 0 !== 0 ) ; else ; 
if ( 0 < { [ Symbol . toPrimitive ] : x => 0 in 0 } ) ; else ; 
if ( 0 === 0 in 0 ) ; 
if ( 0 ?. x in 0 ) 0 ; 
if ( 0 [ { [ Symbol . toPrimitive ] : x => 0 in 0 } ] ) ; else ; 
if ( 0 in 0 ) ; 
if ( 0 in 0 ) ; else ; 
if ( 0 in 0 . x ) ; else ; 
if ( 0 in 0 . x ) if ( 0 ) ; else ; 
if ( 0 in 0 [ 0 ] ) ; 
if ( 0 in 0 ^ 0 ) ; else ; 
if ( 0 in 0 in 0 ) ; else ; 
if ( 0 in 0 in 0 > 1 ) ; 
if ( 0 || 0 in 0 ? 0 : 0 ) ; 
if ( [ ] in 0 + 0 ** ~ ! 0 ) 0 ; 
if ( true in `` . x ) if ( 0 ) ; else ; 
let x ; 0 / 0 >= x in 0 ; 
let x ; 0 <= x in 0 ; 
let x ; 0 ?. x ?. x in x ; 
let x ; x : 0 , 0 in x ; 
let x ; x in 0 ; 
let x ; ~ x in 0 ; 
new class { } ( ) >= this in 0 ; 
new class { } ( ) in 0 ; 
new function ( ) { return 0 in 0 . x ; } ; 
new function ( ) { return 0 in 0 ; } ; 
new function ( ) { return 0 in 0 in 0 ; } ; 
new function ( ) { } ( ) in 0 ; 
null < 0 in 0 ; 
null < 1 in 0 ; 
null << 0 in 0 ; 
null <= 0 in 0 ; 
null >= 0 in 0 ; 
null >> 0 in 0 ; 
null ?. x ?. x in 0 ; 
null in [ ] in 0 ; 
switch ( 0 !== 0 in 0 ) { } 
switch ( 0 ) { case '' . x in 0 : default : case 0 : } 
switch ( 0 ) { case 0 !== { [ Symbol . toPrimitive ] : x => 0 || 0 in 0 } > ~ 0 && 0 : default : case 0 : break ; } 
switch ( 0 ) { case 0 & 0 == 0 >= 0 >>> 0 in 0 ** 0 / 0 % 0 * 0 + ! ! 0 : break ; default : } 
switch ( 0 ) { case 0 * { [ Symbol . toPrimitive ] : x => 0 in 0 } : default : case 0 : } 
switch ( 0 ) { case 0 , 0 in 0 : } 
switch ( 0 ) { case 0 . x in 0 : break ; } 
switch ( 0 ) { case 0 . x in 0 : default : case 0 : } 
switch ( 0 ) { case 0 . x in 0 : default : } 
switch ( 0 ) { case 0 in 0 && 0 && 0 : default : case 0 : } 
switch ( 0 ) { case 0 in 0 . x : default : case 0 : } 
switch ( 0 ) { case 0 in 0 . x : default : } 
switch ( 0 ) { case 0 in 0 . x : } 
switch ( 0 ) { case 0 in 0 : ; } 
switch ( 0 ) { case 0 in 0 : default : case 0 : } 
switch ( 0 ) { case 0 in 0 : default : } 
switch ( 0 ) { case 0 in 0 : } 
switch ( 0 ) { case 0 in 0 instanceof 0 : default : } 
switch ( 0 ) { case 1n in 0 [ 0 ] : default : case 0 : } 
switch ( 0 ) { case true . x in 0 : default : case 0 : } 
switch ( 0 ) { case { } . x in 0 : default : case 0 : } 
switch ( 0 ) { default : case 0 . x in 0 : } 
switch ( 0 ) { default : case 0 === 0 in 0 : } 
switch ( 0 ) { default : case 0 in 0 . x : } 
switch ( 0 ) { default : case 0 in 0 : } 
switch ( 0 ) { default : case 0 in 0 === 0 : } 
switch ( 0 ) { default : case 0 in 0 ?? 0 : } 
switch ( 0 ) { default : case 0 in 0 instanceof 0 : } 
switch ( 0 ) { default : case 0n . x in 0 : } 
switch ( 0 ) { default : case `${ 0 }` . x in 0 : } 
switch ( 0 ) { default : case this . x in 0 : } 
switch ( 0 == 0 in 0 ) { } 
switch ( 0 in 0 ) { } 
switch ( 0 in 0 in 0 ) { } 
switch ( 1 ) { case 0 === 0 in 0 : default : } 
this ** 1 in 0 ; 
this . x in `` ; 
this < '' in 0 ; 
this < 0 in 0 ; 
this < 0n in 0 ; 
this < this in 0 ; 
this < { } in 0 ; 
this <= '' in 0 ; 
this <= 0 in 0 ; 
this <= this in 0 ; 
this > 0 in 0 ; 
this > 0n in 0 ; 
this > `` in 0 ; 
this > this in 0 ; 
this > typeof 0 in 0 ; 
this > { } in 0 ; 
this >= 0 in 0 ; 
this >= 0n in 0 ; 
this >= [ 0 , ] in 0 ; 
this >= `` in 0 ; 
this >= this in 0 ; 
this >= typeof 0 in 0 ; 
this in [ ] in 0 ; 
this | 0 in 0 == 0 === 0 ; 
true ** 0 in 0 ; 
true >> 0 in 0 ; 
true ?. x ?. x in 0 ; 
true in 0 ; 
typeof 0 in 0 ; 
var x ; x : 0 , 0 in x ; 
var x ; ~ x in 0 ; 
var x = 0 in 0 !== 0 && 0 ? 0 : 0 ; 
void 0 < 0 in 0 ; 
void 0 > 0 in 0 ; 
void 0 >> 0 in 0 ; 
void 0 in 0 ; 
x : 0 , '' . x in ! 0 ; 
x : 0 , 0 . x in '' ; 
x : 0 , 0 in 0 . x ; 
x : 0 , 0 in 0 ; 
x : 0 , 0 in 0 instanceof 0 ; 
x : if ( 0 === 0 in 0 ) ; else ; 
x in 0 ; function * x ( ) { } 
x in x ; var x ; 
{ if ( 0 != 0 in 0 ) ; } 
{ if ( { [ Symbol . toPrimitive ] : x => 0 in 0 } >= 0 ) ; } 
{ switch ( '' ?. x in 0 ) { } } 
{ switch ( 0 ?. x in 0 ) { } } 
{ switch ( 1n ?. x in 0 ) { } } 
{ switch ( true ?. x in 0 ) { } } 
{ value : 0 } + { [ Symbol . toPrimitive ] : x => { } } in `` ; 
{ } + { [ Symbol . toPrimitive ] : x => 0 } in `` ; 
~ ! 0 in 0 ; 
~ ! ~ 0 in 0 ; 
~ '' in 0 ; 
~ 0 . x in 0 ; 
~ 0 in 0 ; 
~ 1 in 0 ; 
~ 1n in 0 ; 
~ [ ] in 0 ; 
~ null in 0 ; 
~ ~ 0 in 0 ; 
