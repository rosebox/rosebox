import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type MaxHeightCSSProp = 'max-height'

export const serializeMinHeightValue = (
  value: LengthPercentage | GlobalCssKeyword
): { minHeight: string } => ({
  minHeight: isGlobalCssKeyword(value)
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
export type MinHeightDeclaration = {
  /**
   * Maps to CSS's **`min-height`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height
   */
  minHeight: LengthPercentage | GlobalCssKeyword
}
