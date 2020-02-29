import {
  GlobalCssKeyword,
  LineStyle,
  isGlobalCssKeyword
} from '../shared/types'

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

/**
 * Creates a declaration object for the **`border-left-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderLeftStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderLeftStyle: string } => ({
  borderLeftStyle: value
})

type BorderStyle =
  | LineStyle
  | [LineStyle]
  | [LineStyle, LineStyle]
  | [LineStyle, LineStyle, LineStyle]
  | [LineStyle, LineStyle, LineStyle, LineStyle]

const serializeBorderStyle = (value: BorderStyle): string =>
  !Array.isArray(value)
    ? value
    : (value as LineStyle[])
        .reduce((acc: any, item) => acc + ' ' + item, '')
        .trim()
/**
 * Creates a declaration object for the **`border-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>{1,4}
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderStyle = (
  value: BorderStyle | GlobalCssKeyword
): { borderStyle: string } => ({
  borderStyle: isGlobalCssKeyword(value) ? value : serializeBorderStyle(value)
})
