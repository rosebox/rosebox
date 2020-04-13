import {
  LineWidth,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLineWidth } from '../shared/serializers'

/**
 * Creates a declaration object for the **`border-top-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
 */
export const borderTopWidth = (
  value: LineWidth | GlobalCssKeyword
): { borderTopWidth: string } => ({
  borderTopWidth: isGlobalCssKeyword(value) ? value : serializeLineWidth(value),
})

export type BorderTopWidthDeclaration = {
  /**
   * Maps to CSS's **`border-top-width`** property
   * @category Property
   * @formalSyntaxForValue <line-width>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderTopWidth: LineWidth | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`border-right-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
 */
export const borderRightWidth = (
  value: LineWidth | GlobalCssKeyword
): { borderRightWidth: string } => ({
  borderRightWidth: isGlobalCssKeyword(value)
    ? value
    : serializeLineWidth(value),
})

/**
 * Creates a declaration object for the **`border-bottom-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
 */
export const borderBottomWidth = (
  value: LineWidth | GlobalCssKeyword
): { borderBottomWidth: string } => ({
  borderBottomWidth: isGlobalCssKeyword(value)
    ? value
    : serializeLineWidth(value),
})

/**
 * Creates a declaration object for the **`border-left-width`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
 */
export const borderLeftWidth = (
  value: LineWidth | GlobalCssKeyword
): { borderLeftWidth: string } => ({
  borderLeftWidth: isGlobalCssKeyword(value)
    ? value
    : serializeLineWidth(value),
})

type BorderWidth =
  | LineWidth
  | [LineWidth]
  | [LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth, LineWidth]

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
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
 */
export const borderWidth = (
  value: BorderWidth | GlobalCssKeyword
): { borderWidth: string } => ({
  borderWidth: isGlobalCssKeyword(value) ? value : serializeBorderWidth(value),
})
