import {
  Length,
  Percentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

const serializeMinHeight = (value: Length | Percentage): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the **`min-height`** property.
 * @category Declaration function
 * @formalSyntax <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-heights
 */
export const minHeight = (
  value: Length | Percentage | GlobalCssKeyword
): { minHeight: string } => ({
  minHeight: isGlobalCssKeyword(value) ? `${value}` : serializeMinHeight(value),
})

export type MinHeightDeclaration = {
  minHeight: Length | Percentage | GlobalCssKeyword
}
