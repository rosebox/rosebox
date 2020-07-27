import {
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword,
  LengthPercentage,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type MaxWidthCSSProp = 'max-width'

type MaxWidth = LengthPercentage | 'none'

export const serializeMaxWidth = (
  value: MaxWidth | GlobalCssKeyword
): { maxWidth: string } => ({
  maxWidth: isGlobalCssKeyword(value)
    ? value
    : isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MaxWidthDeclaration = {
  /**
   * Maps to CSS's **`max-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | none
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
   */
  maxWidth: MaxWidth | GlobalCssKeyword
}
