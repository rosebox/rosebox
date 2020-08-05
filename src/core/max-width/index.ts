import {
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  LengthPercentage,
  WidthCalculation,
  isCalculation,
  serializeWidthCalculation,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

type MaxWidth = LengthPercentage | 'none'

export const serializeMaxWidth = (
  x: MaxWidth | GlobalCssKeyword
): { maxWidth: string } => ({
  maxWidth: isLengthType(x)
    ? serializeLength(x)
    : isPercentageType(x)
    ? serializePercentage(x)
    : isCalculation(x)
    ? serializeWidthCalculation(x)
    : x,
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
  maxWidth: MaxWidth | WidthCalculation | GlobalCssKeyword
}
