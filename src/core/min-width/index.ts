import {
  LengthPercentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  WidthCalculation,
  isCalculation,
  serializeWidthCalculation,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type MinWidthCSSProp = 'min-width'

export const serializeMinWidth = (
  value: LengthPercentage | WidthCalculation | GlobalCssKeyword
): { minWidth: string } => ({
  minWidth: isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : isCalculation(value)
    ? serializeWidthCalculation(value)
    : value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MinWidthDeclaration = {
  /**
   * Maps to CSS's **`min-width`** property.
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width
   */
  minWidth: LengthPercentage | WidthCalculation | GlobalCssKeyword
}
