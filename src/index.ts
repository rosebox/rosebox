import { CSSProperties } from 'react'

export * from './background-color/index'
export * from './box-offsets/index'
export * from './box-sizing/index'
export * from './color/index'
export * from './display/index'
export * from './flex/index'
export * from './fonts/index'
export * from './height/index'
export * from './margin/index'
export * from './padding/index'
export * from './max-height/index'
export * from './max-width/index'
export * from './min-height/index'
export * from './min-width/index'
export * from './opacity/index'
export * from './position/index'
export * from './visibility/index'
export * from './width/index'
export * from './shared/value-constructors'

export const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

/**
 * Merges several declaration objects into a single object of type React.CSSProperties
 * @category Utility function
 * @added 0.1.4
 */
export const style = (x: CSSProperties[]): CSSProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as CSSProperties
