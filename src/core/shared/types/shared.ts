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
