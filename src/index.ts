import { CSSProperties } from 'react'
import { overflowX, overflow, overflowY } from './core/overflow'
import { textAlign } from './core/text-align'
import { textTransform } from './core/text-transform'
import { display } from './core/display'

export * from './core/shared/value-constructors'
export * from './core/background-color'
export * from './core/box-offsets'
export * from './core/box-sizing'
export * from './core/color'
export * from './core/display'
export * from './core/flex'
export * from './core/fonts'
export * from './core/height'
export * from './core/margin'
export * from './core/padding'
export * from './core/max-height'
export * from './core/max-width'
export * from './core/min-height'
export * from './core/min-width'
export * from './core/opacity'
export * from './core/position'
export * from './core/visibility'
export * from './core/width'
export * from './core/border'
export * from './core/border-color'
export * from './core/border-radius'
export * from './core/border-style'
export * from './core/border-width'
export * from './core/letter-spacing'
export * from './core/line-height'
export * from './core/overflow'
export * from './core/text-align'
export * from './core/text-decoration'
export * from './core/text-transform'
export * from './core/z-index'
export * from './react/hooks'

type RoseBoxCssProperties_ = ReturnType<typeof display> &
  ReturnType<typeof overflowX> &
  ReturnType<typeof overflowY> &
  ReturnType<typeof overflow> &
  ReturnType<typeof textAlign> &
  ReturnType<typeof textTransform>

type RoseBoxCssPropertiesPartial = Partial<
  Omit<React.CSSProperties, keyof RoseBoxCssProperties_> & RoseBoxCssProperties_
>

/**
 *
 * **`RoseBoxCssProperties`**
 * @added 0.1.9
 */
export interface RoseBoxCssProperties extends RoseBoxCssPropertiesPartial {}

// Unexport

export const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

/**
 * A Type assertion function that tells the compiler to consider a style object of type **`RoseBoxCssProperties`** as a **`React.CSSProperties`** style object.
 * @category Utility function
 * @added 0.1.4
 * @updated 0.1.91
 */
export const style = (x: RoseBoxCssProperties): CSSProperties =>
  x as CSSProperties

/**
 * Merges an array of **`RoseBoxCssProperties`** objects into a single **`RoseBoxCssProperties`** object.
 * @category Utility function
 * @added 0.1.9
 */
export const compose = (x: RoseBoxCssProperties[]): RoseBoxCssProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as RoseBoxCssProperties
