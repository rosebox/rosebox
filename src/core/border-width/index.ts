import { LineWidth, GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { serializeLineWidth } from '../shared'

export type BorderWidthCSSProp = 'border-width'

const serializeBorderSideWidthValue = (value: LineWidth | GlobalCssKeyword) =>
  isGlobalCssKeyword(value) ? value : serializeLineWidth(value)

export const serializeBorderTopWidthValue = serializeBorderSideWidthValue

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopWidthDeclaration = {
  /**
   * Maps to CSS's **`border-top-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-width>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderTopWidth: LineWidth | GlobalCssKeyword
}

export const serializeBorderRightWidthValue = serializeBorderSideWidthValue

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
 * @category RBDeclarationTypeAlias
 */
export type BorderRightWidthDeclaration = {
  /**
   * Maps to CSS's **`border-right-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-width>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderRightWidth: LineWidth | GlobalCssKeyword
}

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
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomWidthDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-width>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderBottomWidth: LineWidth | GlobalCssKeyword
}

export const serializeBorderBottomWidthValue = serializeBorderSideWidthValue

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

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftWidthDeclaration = {
  /**
   * Maps to CSS's **`border-left-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-width>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderLeftWidth: LineWidth | GlobalCssKeyword
}

export const serializeBorderLeftWidthValue = serializeBorderSideWidthValue

type BorderWidth =
  | LineWidth
  | [LineWidth]
  | [LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth, LineWidth]

export const serializeBorderWidthValue = (
  value: BorderWidth | GlobalCssKeyword
): string =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeLineWidth(value)
    : (value as LineWidth[])
        .reduce((acc: any, item) => acc + ' ' + serializeLineWidth(item), '')
        .trim()

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderWidthDeclaration = {
  /**
   * Maps to CSS's **`border-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-width>{1,4}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
   */
  borderWidth: LineWidth | GlobalCssKeyword
}
