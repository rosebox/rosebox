import {
  Length,
  Percentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

/**
 * @skip
 */
type MinWidth = Length | Percentage

const serializeMinWidth = (value: MinWidth): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the **`min-width`** property.
 * @category Declaration function
 * @formalSyntax <length> | <percentage>
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
 */
export const minWidth = (
  value: MinWidth | GlobalCssKeyword
): { minWidth: string } => ({
  minWidth: isGlobalCssKeyword(value) ? value : serializeMinWidth(value)
})
