import {
  GlobalCssKeyword,
  LineStyle,
  isGlobalCssKeyword
} from '../shared/types'

/**
 * Creates a declaration object for the **`border-top-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderTopStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderTopStyle: LineStyle | GlobalCssKeyword } => ({
  borderTopStyle: value
})

/**
 * Creates a declaration object for the **`border-right-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderRightStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderRightStyle: LineStyle | GlobalCssKeyword } => ({
  borderRightStyle: value
})

/**
 * Creates a declaration object for the **`border-bottom-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderBottomStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderBottomStyle: LineStyle | GlobalCssKeyword } => ({
  borderBottomStyle: value
})

/**
 * Creates a declaration object for the **`border-left-style`** property.
 * @category Declaration function
 * @formalSyntax <line-style>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderLeftStyle = (
  value: LineStyle | GlobalCssKeyword
): { borderLeftStyle: LineStyle | GlobalCssKeyword } => ({
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
 * @formalSyntax <line-style>{1,4}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
 */
export const borderStyle = (
  value: BorderStyle | GlobalCssKeyword
): { borderStyle: string } => ({
  borderStyle: isGlobalCssKeyword(value) ? value : serializeBorderStyle(value)
})
