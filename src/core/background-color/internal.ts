import { serializeColor, Color } from '../color/internal'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

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

export type BgColorDeclaration = {
  backgroundColor: Color | GlobalCssKeyword
}
