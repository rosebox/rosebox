import { Width, GlobalCssKeyword, isGlobalCssKeyword } from '../shared//types'
import { serializeWidth } from '../shared/serializers'

/**
 * Creates a declaration object for the **`width`** property.
 * @category Declaration function
 * @formalSyntaxForValue <length> | <percentage> | auto
 * @added 0.1.4
 * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-width
 */
export const width = (value: Width | GlobalCssKeyword) => ({
  width: isGlobalCssKeyword(value) ? value : serializeWidth(value),
})

export type WidthDeclaration = {
  /**
   * Maps to CSS's **`width`** property
   * @category Property
   * @formalSyntaxForValue <length> | <percentage> | auto
   * @added 0.2.0
   * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-width
   */
  width: Width | GlobalCssKeyword
}
