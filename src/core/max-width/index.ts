import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword,
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
 * Maps to CSS's **`max-width`** property
 * @category Declaration function
 * @formalSyntaxForValue <length> | <percentage> | none
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
 */
export const maxWidth = (value: MaxWidth | GlobalCssKeyword) => ({
  maxWidth: isGlobalCssKeyword(value) ? value : serializeMaxWidth(value),
})

export type MaxWidthDeclaration = {
  /**
   * Maps to CSS's **`max-width`** property
   * @category Property
   * @formalSyntaxForValue <length> | <percentage> | none
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
   */
  maxWidth: MaxWidth | GlobalCssKeyword
}
