import {
  Length,
  Percentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

const serializeMinWidth = (value: Length | Percentage): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the **`min-width`** property.
 * @category Declaration function
 * @formalSyntax <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
 */
export const minWidth = (
  value: Length | Percentage | GlobalCssKeyword
): { minWidth: string } => ({
  minWidth: isGlobalCssKeyword(value) ? value : serializeMinWidth(value),
})

export type MinWidthDeclaration = {
  minWidth: Length | Percentage | GlobalCssKeyword
}
