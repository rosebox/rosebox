import { Width, GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { serializeWidth as serializeWidthValue } from '../shared'

export const serializeWidth = (value: Width | GlobalCssKeyword) => ({
  width: isGlobalCssKeyword(value) ? value : serializeWidthValue(value),
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
  width: Width | GlobalCssKeyword
}
