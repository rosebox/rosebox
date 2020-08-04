import {
  Width,
  GlobalCssKeyword,
  isGlobalCssKeyword,
  serializeWidthCalculation,
  isCalculation,
} from '../shared'
import {
  serializeWidth as serializeWidthValue,
  WidthCalculation,
} from '../shared'

export const serializeWidth = (
  value: Width | WidthCalculation | GlobalCssKeyword
) => ({
  width: isGlobalCssKeyword(value)
    ? value
    : isCalculation(value)
    ? serializeWidthCalculation(value)
    : serializeWidthValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type WidthDeclaration = {
  /**
   * Maps to CSS's **`width`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | auto
   * @added 0.2.0
   * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-width
   */
  width: Width | WidthCalculation | GlobalCssKeyword
}
