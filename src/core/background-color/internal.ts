import { serializeColor, Color } from '../color/internal'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

export type BackgroundColorCSSProp = 'background-color'

/**
 * Creates a declartion object for the **`background-color`** property
 * @category Declaration function
 * @formalSyntax <color>
 * @added 0.1.4
 * @implementationReference Reference: https://www.w3.org/TR/2018/REC-css-color-3-20180619/#color0
 */
export const bgColor = (
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
