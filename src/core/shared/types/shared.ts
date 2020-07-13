import { Length } from './length'
import { Percentage } from './percentage'

/**
 * @global
 */
export type LengthPercentage = Length | Percentage

/**
 * @global
 */
export type LineWidth = Length | 'thin' | 'medium' | 'thick'

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
