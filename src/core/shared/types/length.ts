import { getData, getValConstructor, getTypeName } from './shared'

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
export interface Length<A extends Unit = any> {
  unit: A extends any ? Unit : A
  data: number
  type: 'Length'
  valueConstructor: (x: number) => Length
  serialize: (x: Length<A>) => string

  toNum: (x: Length) => number
  mult: (x: any, y: any) => Length
}

export const serializeLength = (x: Length) => `${getData(x)}${getUnit(x)}`

const lengthMixin = {
  type: 'Length',
  serialize: serializeLength,
} as const

const toNum = (x: Length): number => x.data

function mult(x: any, y: any): Length {
  const val = isLengthType(x) ? toNum(x) * y : toNum(y as Length) * x
  const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
  return valueConstructor(val)
}

/**
 * Constructs a value of type `Length` where the unit is **`px`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const px = (x: number): Length<'px'> => ({
  unit: 'px',
  ...lengthMixin,
  data: x,
  valueConstructor: px,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`em`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const em = (x: number): Length<'em'> => ({
  ...lengthMixin,
  unit: 'em',
  data: x,
  valueConstructor: em,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`rem`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const rem = (x: number): Length<'rem'> => ({
  ...lengthMixin,
  unit: 'rem',
  data: x,
  valueConstructor: rem,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`ex`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ex = (x: number): Length<'ex'> => ({
  unit: 'ex',
  ...lengthMixin,
  data: x,
  valueConstructor: ex,
  toNum,
  mult,
})
/**
 * Constructs a value of type `Length` where the unit is **`ch`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ch = (x: number): Length<'ch'> => ({
  ...lengthMixin,
  unit: 'ch',
  data: x,
  valueConstructor: ch,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`vw`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vw = (x: number): Length<'vw'> => ({
  ...lengthMixin,
  unit: 'vw',
  data: x,
  valueConstructor: vw,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`vh`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vh = (x: number): Length<'vh'> => ({
  ...lengthMixin,
  unit: 'vh',
  data: x,
  valueConstructor: vh,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`vmin`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vmin = (x: number): Length<'vmin'> => ({
  ...lengthMixin,
  unit: 'vmin',
  data: x,
  valueConstructor: vmin,

  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`vmax`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vmax = (x: number): Length<'vmax'> => ({
  ...lengthMixin,
  unit: 'vmax',
  data: x,
  valueConstructor: vmax,

  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`q`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const Q = (x: number): Length<'q'> => ({
  ...lengthMixin,
  unit: 'q',
  data: x,
  valueConstructor: Q,

  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`cm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const cm = (x: number): Length<'cm'> => ({
  ...lengthMixin,
  unit: 'cm',
  data: x,
  valueConstructor: cm,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`mm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const mm = (x: number): Length<'mm'> => ({
  ...lengthMixin,
  unit: 'mm',
  data: x,
  valueConstructor: mm,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`in`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const In = (x: number): Length<'in'> => ({
  ...lengthMixin,
  unit: 'in',
  data: x,
  valueConstructor: In,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`pc`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pc = (x: number): Length<'pc'> => ({
  ...lengthMixin,
  unit: 'pc',
  data: x,
  valueConstructor: pc,
  toNum,
  mult,
})

/**
 * Constructs a value of type `Length` where the unit is **`pt`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pt = (x: number): Length<'pt'> => ({
  ...lengthMixin,
  unit: 'pt',
  data: x,
  valueConstructor: pt,
  toNum,
  mult,
})

export const isLengthType = (x: any): x is Length => getTypeName(x) === 'Length'

const getUnit = (x: Length) => {
  switch (getValConstructor(x)) {
    case px:
      return 'px'
    case pt:
      return 'pt'
    case pc:
      return 'pc'
    case In:
      return 'in'
    case Q:
      return 'q'
    case mm:
      return 'mm'
    case cm:
      return 'cm'
    case vmin:
      return 'vmin'
    case vmax:
      return 'vmax'
    case vh:
      return 'vh'
    case vw:
      return 'vw'
    case rem:
      return 'rem'
    case ch:
      return 'ch'
    case em:
      return 'em'
    case ex:
      return 'ex'
    default:
      throw new Error('Invalid Length unit')
  }
}
