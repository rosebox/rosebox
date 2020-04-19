import { Length, Percentage, URL, Time } from './types'

/**
 * Constructs a value of type **`Percentage`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const per = (x: number): Percentage => ({
  __tag: 'Percentage',
  value: x
})

/**
 * Constructs a value of type `Length` where the unit is **`px`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const px = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'px']
})

/**
 * Constructs a value of type `Length` where the unit is **`em`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const em = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'em']
})

/**
 * Constructs a value of type `Length` where the unit is **`rem`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const rem = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'rem']
})

/**
 * Constructs a value of type `Length` where the unit is **`ex`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ex = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'ex']
})
/**
 * Constructs a value of type `Length` where the unit is **`ch`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const ch = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'ch']
})

/**
 * Constructs a value of type `Length` where the unit is **`vw`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vw = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'vw']
})

/**
 * Constructs a value of type `Length` where the unit is **`vh`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vh = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'vh']
})

/**
 * Constructs a value of type `Length` where the unit is **`vmin`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const vmin = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'vmin']
})

/**
 * Constructs a value of type `Length` where the unit is **`q`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const Q = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'Q']
})

/**
 * Constructs a value of type `Length` where the unit is **`cm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const cm = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'cm']
})

/**
 * Constructs a value of type `Length` where the unit is **`mm`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const mm = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'mm']
})

/**
 * Constructs a value of type `Length` where the unit is **`in`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const In = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'in']
})

/**
 * Constructs a value of type `Length` where the unit is **`pc`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pc = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'pc']
})

/**
 * Constructs a value of type `Length` where the unit is **`pt`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const pt = (x: number): Length => ({
  __tag: 'Length',
  value: [x, 'pt']
})

/**
 * Constructs a value of type `URL`.
 * @category Value constructor
 * @added 0.1.96
 */
export const url = (x: string): URL => ({
  __tag: 'URL',
  value: x
})

/**
 * Constructs a value of type **`Time`** where the unit is **`seconds`**..
 * @category Value constructor
 * @added 0.2.1
 */
export const s = (x: number): Time => ({
  __tag: 'Time',
  value: [x, 's']
})

/**
 * Constructs a value of type **`Time`** where the unit is **`milliseconds`**..
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = (x: number): Time => ({
  __tag: 'Time',
  value: [x, 'ms']
})
