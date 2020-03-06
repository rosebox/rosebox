import {
  LineWidth,
  GlobalCssKeyword,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLineWidth } from '../shared/serializers'

export type BorderSideWidth = LineWidth

/**
 * Creates a declaration object for the **`border-top-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderTopWidth = (
  value: BorderSideWidth | GlobalCssKeyword
): { borderTopWidth: string } => ({
  borderTopWidth: isGlobalCssKeyword(value) ? value : serializeLineWidth(value)
})

/**
 * Creates a declaration object for the **`border-right-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderRightWidth = (
  value: BorderSideWidth | GlobalCssKeyword
): { borderRightWidth: string } => ({
  borderRightWidth: isGlobalCssKeyword(value)
    ? value
    : serializeLineWidth(value)
})

/**
 * Creates a declaration object for the **`border-bottom-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderBottomWidth = (
  value: BorderSideWidth | GlobalCssKeyword
): { borderBottomWidth: string } => ({
  borderBottomWidth: isGlobalCssKeyword(value)
    ? value
    : serializeLineWidth(value)
})

/**
 * Creates a declaration object for the **`border-left-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderLeftWidth = (
  value: BorderSideWidth | GlobalCssKeyword
): { borderLeftWidth: string } => ({
  borderLeftWidth: isGlobalCssKeyword(value) ? value : serializeLineWidth(value)
})

type BorderWidth =
  | BorderSideWidth
  | [BorderSideWidth]
  | [BorderSideWidth, BorderSideWidth]
  | [BorderSideWidth, BorderSideWidth, BorderSideWidth]
  | [BorderSideWidth, BorderSideWidth, BorderSideWidth, BorderSideWidth]

const serializeBorderWidth = (value: BorderWidth): string =>
  !Array.isArray(value)
    ? serializeLineWidth(value)
    : (value as LineWidth[])
        .reduce((acc: any, item) => acc + ' ' + serializeLineWidth(item), '')
        .trim()
/**
 * Creates a declaration object for the **`border-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>{1,4}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderWidth = (
  value: BorderWidth | GlobalCssKeyword
): { borderWidth: string } => ({
  borderWidth: isGlobalCssKeyword(value) ? value : serializeBorderWidth(value)
})
