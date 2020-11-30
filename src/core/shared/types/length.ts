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
export class Length<A extends LengthUnit = any> implements RBType<number>{
  unit: A extends any ? LengthUnit : A
  data: number
  valueConstructor: (x: number) => Length

  private constructor(data: number, unit: LengthUnit, valueConstructor: (x: number) => Length) {
    this.data = data
    this.unit = unit as any
    this.valueConstructor = valueConstructor
  }

  /** @category Value constructor */
  static px(x: number): Length<'px'> {
    return new Length(x, 'px', Length.px)
  }
  /** @category Value constructor */
  static em(x: number): Length<'em'> {
    return new Length(x, 'em', Length.em)
  }
  /** @category Value constructor */
  static rem(x: number): Length<'rem'> {
    return new Length(x, 'rem', Length.rem)
  }
  /** @category Value constructor */
  static ex(x: number): Length<'ex'> {
    return new Length(x, 'ex', Length.ex)
  }
  /** @category Value constructor */
  static vw(x: number): Length<'vw'> {
    return new Length(x, 'vw', Length.vw)
  }
  /** @category Value constructor */
  static vh(x: number): Length<'vh'> {
    return new Length(x, 'vh', Length.vh)
  }
  /** @category Value constructor */
  static vmin(x: number): Length<'vmin'> {
    return new Length(x, 'vmin', Length.vmin)
  }
  /** @category Value constructor */
  static vmax(x: number): Length<'vmax'> {
    return new Length(x, 'vmax', Length.vmax)
  }
  /** @category Value constructor */
  static ch(x: number): Length<'ch'> {
    return new Length(x, 'ch', Length.ch)
  }
  /** @category Value constructor */
  static q(x: number): Length<'q'> {
    return new Length(x, 'q', Length.q)
  }
  /** @category Value constructor */
  static cm(x: number): Length<'cm'> {
    return new Length(x, 'cm', Length.cm)
  }
  /** @category Value constructor */
  static mm(x: number): Length<'mm'> {
    return new Length(x, 'mm', Length.mm)
  }
  /** @category Value constructor */
  static in(x: number): Length<'in'> {
    return new Length(x, 'in', Length.in)
  }
  /** @category Value constructor */
  static pc(x: number): Length<'pc'> {
    return new Length(x, 'pc', Length.pc)
  }
  /** @category Value constructor */
  static pt(x: number): Length<'pt'> {
    return new Length(x, 'pt', Length.pt)
  }
  serialize(): string {
    return `${this.data}${this.unit}`
  }

  add = add
  sub = sub
  mult = mult
  div = div
  eq = eq
}

export const px = Length.px
export const em = Length.em
export const rem = Length.rem
export const ex = Length.ex
export const vw = Length.vw
export const vh = Length.vh
export const vmin = Length.vmin
export const vmax = Length.vmax
export const ch = Length.ch
export const q = Length.q
export const cm = Length.cm
export const mm = Length.mm
export const In = Length.in
export const pc = Length.pc
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

