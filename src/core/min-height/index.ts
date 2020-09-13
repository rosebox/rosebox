import {
  GlobalCssKeyword,
  LengthPercentage,
  WidthCalculation,
  serializeAtomicValue,
} from '../shared'

/**
 * @hide
 */
type MinHeight = LengthPercentage | WidthCalculation | GlobalCssKeyword

export const serializeMinHeightValue = (
  x: MinHeight
): { minHeight: string } => ({
  minHeight: serializeAtomicValue(x),
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
  minHeight: MinHeight
}
