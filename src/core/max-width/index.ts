import {
  GlobalCssKeyword,
  LengthPercentage,
  WidthCalculation,
  serializeAtomicValue,
} from '../shared'

/**
 * @hide
 */
type MaxWidth = LengthPercentage | WidthCalculation | GlobalCssKeyword | 'none'

export const serializeMaxWidth = (
  x: MaxWidth | GlobalCssKeyword
): { maxWidth: string } => ({
  maxWidth: serializeAtomicValue(x),
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
  maxWidth: MaxWidth
}
