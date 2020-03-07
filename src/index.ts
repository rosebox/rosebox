import { CSSProperties } from 'react'

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
export * from './width/index'
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

export const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

/**
 * Merges several declaration objects into a single object of type React.CSSProperties
 * @category Utility function
 * @added 0.1.4
 */
export const style = (x: CSSProperties[]): CSSProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as CSSProperties
