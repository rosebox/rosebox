import {
  Length,
  Percentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

type MaxHeight = Length | Percentage | 'none'

const serializeMaxHeight = (value: MaxHeight): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the **`max-height`** property.
 * @category Declaration function
 * @formalSyntax <length> | <percentage> | none
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-heights
 */
export const maxHeight = (
  value: Length | Percentage | GlobalCssKeyword | 'none'
): { maxHeight: string } => ({
  maxHeight: isGlobalCssKeyword(value) ? `${value}` : serializeMaxHeight(value)
})
