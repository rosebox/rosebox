import {
  LineWidth,
  LineStyle,
  GlobalCssKeyword,
  isGlobalCssKeyword,
  serializeAtomicValue,
} from '../shared'
import { Color } from '../shared'

type AtomicValue = Color | LineStyle | LineWidth

type BorderWidthValue = LineWidth
type BorderStyleValue = LineStyle
type BorderColorValue = Color

/**
 * @hide
 */
type Border = [BorderWidthValue, BorderStyleValue, BorderColorValue]

const serializeBorderValue = (property: string) => (
  value: Border | GlobalCssKeyword
) => ({
  [property]: isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeAtomicValue(value)
    : (value as AtomicValue[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim(),
})

export const serializeBorderTop = serializeBorderValue('borderTop')
export const serializeBorderRight = serializeBorderValue('borderRight')
export const serializeBorderBottom = serializeBorderValue('borderBottom')
export const serializeBorderLeft = serializeBorderValue('borderLeft')
export const serializeBorder = serializeBorderValue('border')

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopDeclaration = {
  /**
   * Maps to CSS's **`border-top`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/CSS2/box.html#propdef-border-top
   */
  borderTop: Border | GlobalCssKeyword | 'none'
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightDeclaration = {
  /**
   * Maps to CSS's **`border-right`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/CSS2/box.html#propdef-border-top
   */
  borderRight: Border | GlobalCssKeyword | 'none'
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomDeclaration = {
  /**
   * Maps to CSS's **`border-bottom`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/CSS2/box.html#propdef-border-top
   */
  borderBottom: Border | GlobalCssKeyword | 'none'
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftDeclaration = {
  /**
   * Maps to CSS's **`border-left`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/CSS2/box.html#propdef-border-top
   */
  borderLeft: Border | GlobalCssKeyword | 'none'
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderDeclaration = {
  /**
   * Maps to CSS's **`border`** property
   * @category RBProperty
   * @added 0.2.0
   */
  border: Border | GlobalCssKeyword | 'none'
}
