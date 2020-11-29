import {
  LengthPercentage,
  GlobalCssKeyword,
  Calculation,
  serializeAtomicValue,
} from '../shared'

/**
 * @hide
 */
type MinWidth = LengthPercentage | Calculation | GlobalCssKeyword

export type MinWidthCSSProp = 'min-width'

export const serializeMinWidth = (x: MinWidth): { minWidth: string } => ({
  minWidth: serializeAtomicValue(x),
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
  minWidth: MinWidth
}
