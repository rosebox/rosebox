import {
  LineWidth,
  LineStyle,
  isLengthType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared'
import { Color, isColor, serializeColor } from '../color'
import { serializeLength } from '../shared'

type AtomicValue = Color | LineStyle | LineWidth

/**
 * @hide
 */
type Border = [LineWidth, LineStyle, Color]

const serializeAtomicValue = (value: AtomicValue) =>
  isColor(value)
    ? serializeColor(value)
    : isLengthType(value)
    ? serializeLength(value)
    : value

const serializeBorder = (value: Border | GlobalCssKeyword) =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeAtomicValue(value)
    : (value as AtomicValue[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

export const serializeBorderTopValue = serializeBorder
export const serializeBorderRightValue = serializeBorder
export const serializeBorderBottomValue = serializeBorder
export const serializeBorderLeftValue = serializeBorder
export const serializeBorderValue = serializeBorder

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
  borderTop: Border | GlobalCssKeyword
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
  borderRight: Border | GlobalCssKeyword
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
  borderBottom: Border | GlobalCssKeyword
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
  borderLeft: Border | GlobalCssKeyword
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
  border: Border | GlobalCssKeyword
}
