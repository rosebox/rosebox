import { CSSProperties } from 'react'
import { overflowX, overflow, overflowY } from './overflow'
import { textAlign } from './text-align'
import { textTransform } from './text-transform'
import { display } from './display'

export * from './shared/value-constructors'
export * from './background-color'
export * from './box-offsets'
export * from './box-sizing'
export * from './color'
export * from './display'
export * from './flex'
export * from './fonts'
export * from './height'
export * from './margin'
export * from './padding'
export * from './max-height'
export * from './max-width'
export * from './min-height'
export * from './min-width'
export * from './opacity'
export * from './position'
export * from './visibility'
export * from './width'
export * from './border'
export * from './border-color'
export * from './border-radius'
export * from './border-style'
export * from './border-width'
export * from './letter-spacing'
export * from './line-height'
export * from './overflow'
export * from './text-align'
export * from './text-decoration'
export * from './text-transform'
export * from './z-index'

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
interface RoseBoxCssProperties extends RoseBoxCssPropertiesPartial {}

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
