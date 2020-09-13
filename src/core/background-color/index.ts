import { Color, getSerializer } from '../shared'
import { GlobalCssKeyword } from '../shared'

export const serializeBackgroundColor = (
  x: Color | GlobalCssKeyword
): { backgroundColor: string } => ({
  backgroundColor: typeof x === 'string' ? x : getSerializer(x)(x),
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
