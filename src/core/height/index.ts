import {
  GlobalCssKeyword,
  Width,
  WidthCalculation,
  serializeAtomicValue,
} from '../shared'

export type HeightCSSProp = 'height'

export const serializeHeight = (
  x: Width | GlobalCssKeyword
): {
  height: string
} => ({
  height: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type HeightDeclaration = {
  /**
   * Maps to CSS's **`height`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | auto
   * @added 0.2.0
   * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-height
   */
  height: Width | WidthCalculation | GlobalCssKeyword
}
