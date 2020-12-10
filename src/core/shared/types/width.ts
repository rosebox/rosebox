import { LengthPercentage, serializeAtomicValue } from '.'
import { isLengthType } from './length'
import { isPercentageType } from './percentage'

/**
 * @global
 */
export type Width = LengthPercentage | 'auto'

/** Type-guard */
export const isWidthType = (value: any): value is Width =>
    isLengthType(value) || isPercentageType(value) || value === 'auto'

export const serializeWidth = (value: Width): string => serializeAtomicValue(value)
