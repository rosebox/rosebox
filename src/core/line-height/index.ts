import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
  Calculation,
} from '../shared'

export type LineHeightCSSProp = 'line-height'

export const serializeLineHeight = (
  x: 'normal' | number | LengthPercentage | Calculation | GlobalCssKeyword
): { lineHeight: string | number } => ({
  lineHeight: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type LineHeightDeclaration = {
  /**
   * Maps to CSS's **`line-height`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | <number> | <length> | <percentage> | inherit
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
   */
  lineHeight:
    | 'normal'
    | number
    | LengthPercentage
    | Calculation
    | GlobalCssKeyword
}
