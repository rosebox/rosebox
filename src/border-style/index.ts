import { GlobalCssKeyword, LineStyle } from '../shared/types'

/**
 * Creates a declaration object for the **`border-top-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderTopStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderTopStyle: string } => ({
  borderTopStyle: value
})
