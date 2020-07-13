import { LengthPercentage } from './shared'
import { isLengthType, serializeLength } from './length'
import { isPercentageType, serializePercentage } from './percentage'

/**
 * @global
 */
export type Width = LengthPercentage | 'auto'

/** Type-guard */
export const isWidthType = (value: any): value is Width =>
  isLengthType(value) || isPercentageType(value) || value === 'auto'

export const serializeWidth = (value: Width): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value
