import { isLengthType, Length, serializeLength } from './length'
import { Percentage, serializePercentage } from './percentage'

/**
 * @global
 */
export type LengthPercentage = Length | Percentage

/**
 * @global
 */
export type LineWidth = Length | 'thin' | 'medium' | 'thick'

export const serializeLineWidth = (value: LineWidth) =>
  isLengthType(value) ? serializeLength(value) : value

/**
 * @global
 */
export type LineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export const serializeLengthPercentage = (value: LengthPercentage) =>
  isLengthType(value) ? serializeLength(value) : serializePercentage(value)

export const NAMESPACE = 'npmjs.com/package/rosebox'

export interface RBTypeVal<A, B> {
  type: A
  valueConstructor: Function
  data: B
}

export type RBType<A = string, B = any> = {
  [NAMESPACE]: RBTypeVal<A, B>
}

export const getData = <A, B>(x: RBType<A, B>) => x[NAMESPACE].data
export const getValConstructor = <A, B>(x: RBType<A, B>) =>
  x[NAMESPACE]?.valueConstructor
export const getTypeName = <A, B>(x: RBType<A, B>) => x[NAMESPACE]?.type
