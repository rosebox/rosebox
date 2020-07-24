import { LineWidth, GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { serializeLineWidth } from '../shared'

export type BorderWidthCSSProp = 'border-width'

const serializeBorderSideWidthValue = (property: string) => (
  value: LineWidth | GlobalCssKeyword
) => ({
  [property]: isGlobalCssKeyword(value) ? value : serializeLineWidth(value),
})

export const serializeBorderTopWidth = serializeBorderSideWidthValue(
  'borderTopWidth'
)

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

export const serializeBorderRightWidth = serializeBorderSideWidthValue(
  'borderRightWidth'
)

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

export const serializeBorderBottomWidth = serializeBorderSideWidthValue(
  'borderBottomWidth'
)

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

export const serializeBorderLeftWidth = serializeBorderSideWidthValue(
  'borderLeftWidth'
)

type BorderWidth =
  | LineWidth
  | [LineWidth]
  | [LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth, LineWidth]

export const serializeBorderWidth = (
  value: BorderWidth | GlobalCssKeyword
): { borderWidth: string } => ({
  borderWidth: isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeLineWidth(value)
    : (value as LineWidth[])
        .reduce((acc: any, item) => acc + ' ' + serializeLineWidth(item), '')
        .trim(),
})

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
