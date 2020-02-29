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

/**
 * Creates a declaration object for the **`border-right-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderRightStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderRightStyle: string } => ({
  borderRightStyle: value
})

/**
 * Creates a declaration object for the **`border-bottom-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderBottomStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderBottomStyle: string } => ({
  borderBottomStyle: value
})
