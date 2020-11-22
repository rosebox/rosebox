import {
  getData,
  getValConstructor,
  NAMESPACE,
  getTypeName,
} from './shared'

type Unit = 'px' | 'em' | 'rem' | 'ex' | 'ch' | 'vw' | 'vh' | 'vmin' | 'vmax' | 'q' | 'cm' | 'mm' | 'in' | 'pc'
| 'pt'
 
/**
 *
 * A type that maps to CSS's **`<length>`** type.
 * @added 0.1.0
 */
export interface Length<A extends Unit = any> {
  [NAMESPACE]: {
    unit: A extends any ? Unit : A
    data: number
    type: 'Length'
    valueConstructor: (x: number) => Length
    serializer: (x: Length<A>) => string
  },
  toNum: (x: Length) => number
}


export const serializeLength = (x: Length) => `${getData(x)}${getUnit(x)}`

const lengthMixin = {
  type: 'Length',
  serializer: serializeLength,
} as const

const toNum = (x: Length): number => x[NAMESPACE].data

/**
 * Constructs a value of type `Length` where the unit is **`px`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const px = (x: number): Length<'px'> => ({
  [NAMESPACE]: {
    unit: 'px',
    ...lengthMixin,
    data: x,
    valueConstructor: px,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`em`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const em = (x: number): Length<'em'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'em',
    data: x,
    valueConstructor: em,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`rem`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const rem = (x: number): Length<'rem'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'rem',
    data: x,
    valueConstructor: rem,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`ex`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ex = (x: number): Length<'ex'> => ({
  [NAMESPACE]: {
    unit: 'ex',
    ...lengthMixin,
    data: x,
    valueConstructor: ex,
  },
  toNum
})
/**
 * Constructs a value of type `Length` where the unit is **`ch`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ch = (x: number): Length<'ch'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'ch',
    data: x,
    valueConstructor: ch,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`vw`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vw = (x: number): Length<'vw'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'vw',
    data: x,
    valueConstructor: vw,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`vh`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vh = (x: number): Length<'vh'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'vh',
    data: x,
    valueConstructor: vh,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`vmin`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vmin = (x: number): Length<'vmin'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'vmin',
    data: x,
    valueConstructor: vmin,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`vmax`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vmax = (x: number): Length<'vmax'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'vmax',
    data: x,
    valueConstructor: vmax,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`q`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const Q = (x: number): Length<'q'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'q',
    data: x,
    valueConstructor: Q,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`cm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const cm = (x: number): Length<'cm'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'cm',
    data: x,
    valueConstructor: cm,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`mm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const mm = (x: number): Length<'mm'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'mm',
    data: x,
    valueConstructor: mm,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`in`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const In = (x: number): Length<'in'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'in',
    data: x,
    valueConstructor: In,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`pc`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pc = (x: number): Length<'pc'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'pc',
    data: x,
    valueConstructor: pc,
  },
  toNum
})

/**
 * Constructs a value of type `Length` where the unit is **`pt`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pt = (x: number): Length<'pt'> => ({
  [NAMESPACE]: {
    ...lengthMixin,
    unit: 'pt',
    data: x,
    valueConstructor: pt,
  },
  toNum
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
      throw new Error("Invalid Length unit")
  }
}
