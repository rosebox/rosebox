import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

type MaxWidth = Length | Percentage | 'none'

const serializeMaxWidth = (value: MaxWidth): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the **`margin-width`** property.
 * @category Declaration function
 * @formalSyntax <length> | <percentage> | none
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
 */
export const maxWidth = (value: MaxWidth | GlobalCssKeyword) => ({
  maxWidth: isGlobalCssKeyword(value) ? value : serializeMaxWidth(value)
})
