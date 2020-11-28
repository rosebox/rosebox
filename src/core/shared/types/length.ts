import { getTypeName, RBType } from './shared'

type Unit =
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
export class Length<A extends Unit = any> implements RBType<number>{
  unit: A extends any ? Unit : A
  data: number
  valueConstructor: (x: number) => Length

  private constructor(data: number, unit: Unit, valueConstructor: (x: number) => Length) {
    this.data = data
    this.unit = unit as any
    this.valueConstructor = valueConstructor
  }

  static px(x: number): Length<'px'> {
    return new Length(x, 'px', Length.px)
  }
  static em(x: number): Length<'em'> {
    return new Length(x, 'em', Length.em)
  }
  static rem(x: number): Length<'rem'> {
    return new Length(x, 'rem', Length.rem)
  }
  static ex(x: number): Length<'ex'> {
    return new Length(x, 'ex', Length.ex)
  }
  static vw(x: number): Length<'vw'> {
    return new Length(x, 'vw', Length.vw)
  }
  static vh(x: number): Length<'vh'> {
    return new Length(x, 'vh', Length.vh)
  }
  static vmin(x: number): Length<'vmin'> {
    return new Length(x, 'vmin', Length.vmin)
  }
  static vmax(x: number): Length<'vmax'> {
    return new Length(x, 'vmax', Length.vmax)
  }
  static ch(x: number): Length<'ch'> {
    return new Length(x, 'ch', Length.ch)
  }
  static q(x: number): Length<'q'> {
    return new Length(x, 'q', Length.q)
  }
  static cm(x: number): Length<'cm'> {
    return new Length(x, 'cm', Length.cm)
  }
  static mm(x: number): Length<'mm'> {
    return new Length(x, 'mm', Length.mm)
  }
  static in(x: number): Length<'in'> {
    return new Length(x, 'in', Length.in)
  }
  static pc(x: number): Length<'pc'> {
    return new Length(x, 'pc', Length.pc)
  }
  static pt(x: number): Length<'pt'> {
    return new Length(x, 'pt', Length.pt)
  }
  serialize(): string {
    return `${this.data}${this.unit}`
  }
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

function mult(x: any, y: any): Length {
  const val = isLengthType(x) ? toNum(x) * y : toNum(y as Length) * x
  const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
  return valueConstructor(val)
}

export const isLengthType = (x: any): x is Length => getTypeName(x) === 'Length'

