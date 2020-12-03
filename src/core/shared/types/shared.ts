import { Length } from './length'
import { Percentage } from './percentage'

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

export const serializeLineWidth = (x: LineWidth) =>
  typeof x === 'string' ? x : x.serialize()

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
  

export const NAMESPACE = 'npmjs.com/package/rosebox'

export const serializeAtomicValue = (x: string | number | RBType): string => {
  if (typeof x === 'number') return `${x}`
  if (typeof x === 'string') return x
  if (!x.serialize) console.log('Not found: ', x)
  return x.serialize()
}

export const getData = (x: any) => x.data
export const getValConstructor = <B>(x: RBType<B>) =>
  x.valueConstructor
export const getTypeName = (x: any): string => x?.type ?? ''
export const getSerializer = (x: RBType): Function => x.serialize
