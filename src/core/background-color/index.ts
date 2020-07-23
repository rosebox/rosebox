import { serializeColor, Color } from '../color'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'

export const serializeBackgroundColor = (
  value: Color | GlobalCssKeyword
): { backgroundColor: string } => ({
  backgroundColor: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BgColorDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-color`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <integer>
   * @added 0.2.0
   */
  backgroundColor: Color | GlobalCssKeyword
}
