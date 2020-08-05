import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  LengthPercentage,
  WidthCalculation,
  isCalculation,
  serializeWidthCalculation,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export const serializeMinHeightValue = (
  x: LengthPercentage | WidthCalculation | GlobalCssKeyword
): { minHeight: string } => ({
  minHeight: isLengthType(x)
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
export type MinHeightDeclaration = {
  /**
   * Maps to CSS's **`min-height`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height
   */
  minHeight: LengthPercentage | WidthCalculation | GlobalCssKeyword
}
