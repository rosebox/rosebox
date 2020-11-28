import { Width, GlobalCssKeyword, serializeAtomicValue } from '../shared'
import { Calculation } from '../shared'

export const serializeWidth = (
  x: Width | Calculation | GlobalCssKeyword
) => ({
  width: serializeAtomicValue(x),
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
  width: Width | Calculation | GlobalCssKeyword
}
