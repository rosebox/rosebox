import { Calculation } from './calc'
import { RBType } from './shared'

export type LengthUnit =
  | 'px'
  | 'em'
  | 'rem'
  | 'ex'
  | 'ch'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'q'
  | 'cm'
  | 'mm'
  | 'in'
  | 'pc'
  | 'pt'

/**
 *
 * A type that maps to CSS's **`<length>`** type.
 * @added 0.1.0
 */
export class Length<A extends LengthUnit = LengthUnit> implements RBType<number> {
  unit: A
  data: number
  valueConstructor: Function
  serialize: () => string

  private constructor(
    data: number,
    unit: A,
    valueConstructor: Function
  ) {
    this.data = data
    this.unit = unit
    this.valueConstructor = valueConstructor
    this.serialize = (): string => {
      return `${this.data}${this.unit}`
    }
  }

  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`px`**.
   */
  static px(x: number): Length<'px'> {
    return new Length(x, 'px', Length.px)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`em`**.
   */
  static em(x: number): Length<'em'> {
    return new Length(x, 'em', Length.em)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`rem`**.
   */
  static rem(x: number): Length<'rem'> {
    return new Length(x, 'rem', Length.rem)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`ex`**.
   */
  static ex(x: number): Length<'ex'> {
    return new Length(x, 'ex', Length.ex)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`vw`**.
   */
  static vw(x: number): Length<'vw'> {
    return new Length(x, 'vw', Length.vw)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`vh`**.
   */
  static vh(x: number): Length<'vh'> {
    return new Length(x, 'vh', Length.vh)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`vmin`**.
   */
  static vmin(x: number): Length<'vmin'> {
    return new Length(x, 'vmin', Length.vmin)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`vmax`**.
   */
  static vmax(x: number): Length<'vmax'> {
    return new Length(x, 'vmax', Length.vmax)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`ch`**.
   */
  static ch(x: number): Length<'ch'> {
    return new Length(x, 'ch', Length.ch)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`q`**.
   */
  static q(x: number): Length<'q'> {
    return new Length(x, 'q', Length.q)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`cm`**.
   */
  static cm(x: number): Length<'cm'> {
    return new Length(x, 'cm', Length.cm)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`mm`**.
   */
  static mm(x: number): Length<'mm'> {
    return new Length(x, 'mm', Length.mm)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`in`**.
   */
  static in(x: number): Length<'in'> {
    return new Length(x, 'in', Length.in)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`pc`**.
   */
  static pc(x: number): Length<'pc'> {
    return new Length(x, 'pc', Length.pc)
  }
  /**
   *
   * Constructs a value of type **`Length`** where the unit is **`pt`**.
   */
  static pt(x: number): Length<'pt'> {
    return new Length(x, 'pt', Length.pt)
  }
  
  add = add
  sub = sub
  mult = mult
  div = div
  eq = eq
}

/** @category Value constructor */
export const px = Length.px
/** @category Value constructor */
export const em = Length.em
/** @category Value constructor */
export const rem = Length.rem
/** @category Value constructor */
export const ex = Length.ex
/** @category Value constructor */
export const vw = Length.vw
/** @category Value constructor */
export const vh = Length.vh
/** @category Value constructor */
export const vmin = Length.vmin
/** @category Value constructor */
export const vmax = Length.vmax
/** @category Value constructor */
export const ch = Length.ch
/** @category Value constructor */
export const q = Length.q
/** @category Value constructor */
export const cm = Length.cm
/** @category Value constructor */
export const mm = Length.mm
/** @category Value constructor */
export const In = Length.in
/** @category Value constructor */
export const pc = Length.pc
/** @category Value constructor */
export const pt = Length.pt

const toNum = (x: Length): number => x.data

/** @ignore */
function mult(x: any, y: any): Length {
  const val = isLengthType(x) ? x.data * y : toNum(y as Length) * x
  const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
  return valueConstructor(val)
}

/** @ignore */
function add<A extends LengthUnit>(x1: Length<A>, x2: Length<A>): Length<A> {
  return x1.valueConstructor(x1.data + x2.data)
}

/** @ignore */
function sub<A extends LengthUnit>(x1: Length<A>, x2: Length<A>): Length<A> {
  return x1.valueConstructor(x1.data - x2.data)
}

/** @ignore */
function div<A extends LengthUnit>(x: Length<A>, x2: number): Length<A>
function div(x: any, y: any): Length {
  const val = isLengthType(x) ? x.data / y : toNum(y as Length) / x
  const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
  return valueConstructor(val)
}

/** @ignore */
function eq<A extends LengthUnit>(x1: Length<A>, x2: Length<A>): boolean {
  return x1.data === x2.data
}

export const isLengthType = (x: any): x is Length => x instanceof Length

export type LengthValue = Length | Calculation