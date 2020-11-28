import { isLengthType, Length, serializeLength } from './length'
import { Percentage, serializePercentage } from './percentage'

export interface RBType<B = any> {
  data: B
  valueConstructor: Function
  serialize: () => string
}

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

export const serializeAtomicValue = (x: string | number | RBType): string => {
  if (typeof x === 'number') return `${x}`
  if (typeof x === 'string') return x
  return x.serialize(x)
}


export const getData = (x: any) => x.data
export const getValConstructor = <B>(x: RBType<B>) =>
  x.valueConstructor
export const getTypeName = (x: any): string => x?.type ?? ''
export const getSerializer = (x: RBType): Function => x.serialize
