 // class ID1 { static ID = ... ID1 &&= ANY ... ; }
 // class ID1 { static { ... ID1 &&= ANY ...  } }
 // new class ID1 { ID = ... ID1 &&= 0 ... ; } ;
 ///
class x { static #x = x &&= 0 ; }
class x { static #x = x &&= super . x ; }
class x { static #x = x &&= x ; }
class x { static 0 = 0 ? 0 : x &&= 0 . x ; }
class x { static 0 = 0 ? 0 : x &&= 0 ; }
class x { static 0 = 0 ? 0 : x &&= class x { } ; }
class x { static 0 = 0 ? 0 : x &&= super . x ; }
class x { static 0 = 0 ? 0 : x &&= x ; }
class x { static 0 = 0 ? 0 : x &&= x => 0 ; }
class x { static 0 = super [ x ] ||= 0 ; }
class x { static 0 = x &&= ! super . x ; }
class x { static 0 = x &&= ! ~ 0n ; }
class x { static 0 = x &&= ! ~ super . x ; }
class x { static 0 = x &&= 0 . x ; }
class x { static 0 = x &&= 0 ; }
class x { static 0 = x &&= 0 >= 0 >= x ; }
class x { static 0 = x &&= 0n . x &&= 0 ; }
class x { static 0 = x &&= 0n . x ; }
class x { static 0 = x &&= [ ! 0 ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ ! 0 ] [ 0 ] -- ; }
class x { static 0 = x &&= [ , 0 ] [ 0 ] -- ; }
class x { static 0 = x &&= [ 0 , , ] [ 1 ] ++ ; }
class x { static 0 = x &&= [ 0 < 0 ] [ 0 ] -- ; }
class x { static 0 = x &&= [ 0 > 0 ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ 0 ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ 0 ] [ 0 ] -- ; }
class x { static 0 = x &&= [ 0n ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ 0n ] [ 0 ] -- ; }
class x { static 0 = x &&= [ ] . x ++ ; }
class x { static 0 = x &&= [ ] . x ||= 0 ; }
class x { static 0 = x &&= [ ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ ] [ 0 ] -- ; }
class x { static 0 = x &&= [ ] [ 1 ] ++ ; }
class x { static 0 = x &&= [ ] [ 1 ] -- ; }
class x { static 0 = x &&= [ ] [ x ] -- ; }
class x { static 0 = x &&= [ `` ] [ 0 ] -- ; }
class x { static 0 = x &&= [ null ] [ 0 ] ++ ; }
class x { static 0 = x &&= [ null ] [ 0 ] -- ; }
class x { static 0 = x &&= [ { } ] [ 0 ] -- ; }
class x { static 0 = x &&= `` . x &&= 0 ; }
class x { static 0 = x &&= class x { } ; }
class x { static 0 = x &&= new . target ; }
class x { static 0 = x &&= super . x &&= 0 ; }
class x { static 0 = x &&= super . x ++ ; }
class x { static 0 = x &&= super . x -- ; }
class x { static 0 = x &&= super . x ; }
class x { static 0 = x &&= super . x ||= 0 ; }
class x { static 0 = x &&= this ; }
class x { static 0 = x &&= true . x ; }
class x { static 0 = x &&= typeof super . x ; }
class x { static 0 = x &&= x . x ++ ; }
class x { static 0 = x &&= x . x -- ; }
class x { static 0 = x &&= x . x ; }
class x { static 0 = x &&= x . x ||= 0 ; }
class x { static 0 = x &&= x ; }
class x { static 0 = x &&= x => 0 ; }
class x { static 0 = x &&= x >= 0 >= x ; }
class x { static 0 = x &&= x ||= 0 ; }
class x { static 0 = x &&= { x , } . x ; }
class x { static 0 = x &&= { x } . x ++ ; }
class x { static 0 = x &&= { x } . x ||= 0 ; }
class x { static 0 = x &&= ~ new x ; }
class x { static 0 = x [ x &&= 0 . x ] /= 0 ; }
class x { static 0 = x [ x &&= 0 ] /= 0 ; }
class x { static 0 = x [ x &&= class x { } ] /= 0 ; }
class x { static 0 = x [ x &&= super . x ] /= 0 ; }
class x { static 0 = x [ x &&= x => 0 ] /= 0 ; }
class x { static 0 = x [ x &&= x ] /= 0 ; }
class x { static { if ( new x ( super [ x &&= 0 . x ] *= 0 ) ) ; else ; } }
class x { static { if ( new x ( super [ x &&= 0 ] *= 0 ) ) ; else ; } }
class x { static { if ( new x ( super [ x &&= super . x %= 0 ] *= 0 ) ) ; else ; } }
class x { static { if ( new x ( super [ x &&= super . x %= super . x ] *= 0 ) ) ; else ; } }
class x { static { if ( new x ( super [ x &&= x => 0 ] *= 0 ) ) ; else ; } }
class x { static { if ( new x ( super [ x &&= x ] *= 0 ) ) ; else ; } }
class x { static { if ( super [ x ] ||= 0 ) ; } }
new class x extends class { } { ; #x = x &&= #x in x ; } ; 
new class x extends class { } { ; #x = x &&= super . x ||= 0 ; } ; 
new class x { 0 = super [ x &&= 0 ] ; } ; 
new class x { 0 = super [ x &&= class x { } ] ; } ; 
new class x { 0 = super [ x &&= super . x = 0 ] ; } ; 
new class x { 0 = super [ x &&= x => 0 ] ; } ; 
new class x { 0 = x &&= 0 ; } ; 
new class x { 0 = x &&= class x { } ; } ; 
new class x { 0 = x &&= new . target ; } ; 
new class x { 0 = x &&= super . x ; } ; 
new class x { 0 = x &&= super . x ?. x ; } ; 
new class x { 0 = x &&= super . x ??= 0 ; } ; 
new class x { 0 = x &&= this ; } ; 
new class x { 0 = x &&= x => 0 ; } ; 