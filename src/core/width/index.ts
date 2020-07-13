import { Width, GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { serializeWidth } from '../shared'

export type WidthCSSProp = 'width'

export const serializeWidthValue = (value: Width | GlobalCssKeyword) =>
  isGlobalCssKeyword(value) ? value : serializeWidth(value)
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
  width: Width | GlobalCssKeyword
}
