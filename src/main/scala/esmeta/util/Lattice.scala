package esmeta.util

/** flat lattice */
sealed trait Lattice[+A, L[_] <: Lattice[_, L]] {

  /** partial order/subset operator */
  def <=[B >: A](that: => L[B]): Boolean
  def ⊑[B >: A](that: => L[B]): Boolean = this <= that

  /** join/union operator */
  def |[B >: A](that: => L[B]): L[B]
  def ⊔[B >: A](that: => L[B]): L[B] = this | that

  /** meet/intersection operator */
  def &[B >: A](that: => L[B]): L[B]
  def ⊓[B >: A](that: => L[B]): L[B] = this & that

  /** prune operator */
  def --[B >: A](that: => L[B]): L[B]

  /** map function */
  def map[B](f: A => B): L[B]
}

/** flat lattice */
sealed trait Flat[+A] extends Lattice[A, Flat] {

  /** partial order/subset operator */
  def <=[B >: A](that: => Flat[B]): Boolean = (this, that) match
    case (Zero, _) | (_, Many) => true
    case (Many, _) | (_, Zero) => false
    case (One(l), One(r))      => l == r

  /** join operator */
  def |[B >: A](that: => Flat[B]): Flat[B] = (this, that) match
    case (Zero, _) | (_, Many) => that
    case (_, Zero) | (Many, _) => this
    case (One(l), One(r))      => if (l == r) this else Many

  /** meet/intersection operator */
  def &[B >: A](that: => Flat[B]): Flat[B] = (this, that) match
    case (Zero, _) | (_, Many) => this
    case (_, Zero) | (Many, _) => that
    case (One(l), One(r))      => if (l == r) this else Zero

  /** prune operator */
  def --[B >: A](that: => Flat[B]): Flat[B] = (this, that) match
    case (Zero, _) | (_, Many) => Zero
    case (_, Zero)             => this
    case (Many, One(_))        => Many
    case (One(l), One(r))      => if (l == r) Zero else this

  /** map function */
  def map[B](f: A => B): Flat[B] = this match
    case Zero      => Zero
    case One(elem) => One(f(elem))
    case Many      => Many
}

/** more than two elements */
case object Many extends Flat[Nothing]

/** single element */
case class One[A](elem: A) extends Flat[A]

/** no element */
case object Zero extends Flat[Nothing]

/** bounded set lattice */
sealed trait BSet[+A] extends Lattice[A, BSet] {

  /** partial order/subset operator */
  def <=[B >: A](that: => BSet[B]): Boolean = (this, that) match
    case (_, Inf)               => true
    case (Inf, _)               => false
    case (Fin(lset), Fin(rset)) => lset.toSet subsetOf rset.toSet

  /** join operator */
  def |[B >: A](that: => BSet[B]): BSet[B] = (this, that) match
    case (Inf, _) | (_, Inf)    => Inf
    case (Fin(lset), Fin(rset)) => Fin(lset ++ rset)

  /** meet/intersection operator */
  def &[B >: A](that: => BSet[B]): BSet[B] = (this, that) match
    case (Inf, _)               => that
    case (_, Inf)               => this
    case (Fin(lset), Fin(rset)) => Fin(lset.toSet intersect rset.toSet)

  /** prune operator */
  def --[B >: A](that: => BSet[B]): BSet[B] = (this, that) match
    case (Inf, _)         => that
    case (_, Inf)         => Fin()
    case (Fin(l), Fin(r)) => Fin(l.toSet -- r)

  /** map function */
  def map[B](f: A => B): BSet[B] = this match
    case Fin(set) => Fin(set.map(f))
    case Inf      => Inf
}
case object Inf extends BSet[Nothing]
case class Fin[A](set: Set[A]) extends BSet[A]
object Fin:
  def apply[A](elems: A*): Fin[A] = Fin(elems.toSet)

/** simple lattice */
case class Simple[+A](exist: Boolean) extends Lattice[A, Simple] {

  /** partial order/subset operator */
  def <=[B >: A](that: => Simple[B]): Boolean = !this.exist | that.exist

  /** join operator */
  def |[B >: A](that: => Simple[B]): Simple[B] =
    Simple(this.exist | that.exist)

  /** meet/intersection operator */
  def &[B >: A](that: => Simple[B]): Simple[B] =
    Simple(this.exist & that.exist)

  /** prune operator */
  def --[B >: A](that: => Simple[B]): Simple[B] =
    Simple(this.exist & !that.exist)

  /** map function */
  def map[B](f: A => B): Simple[B] = Simple(exist)
}