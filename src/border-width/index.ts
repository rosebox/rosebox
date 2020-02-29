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
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-width
 */
export const borderLeftWidth = (
  value: BorderSideWidth | GlobalCssKeyword
): { borderLeftWidth: string } => ({
  borderLeftWidth: isGlobalCssKeyword(value) ? value : serializeLineWidth(value)
})
