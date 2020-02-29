import { Color, serializeColor } from '../color/internal'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`border-top-color`** property.
 * @category Declaration function
 * @formalSyntax <color>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-color
 */
export const borderTopColor = (
  value: Color | GlobalCssKeyword
): { borderTopColor: string } => ({
  borderTopColor: isGlobalCssKeyword(value) ? value : serializeColor(value)
})
