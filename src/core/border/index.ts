import {
  LineWidth,
  LineStyle,
  isLengthType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared'
import { Color, isColor, serializeColor } from '../color'
import { serializeLength } from '../shared'

export type BorderCSSProp = 'border'

type AtomicValue = Color | LineStyle | LineWidth

type OneValue = AtomicValue | [Color] | [LineStyle] | [LineWidth]

type TwoValues =
  | [Color, LineStyle]
  | [LineStyle, Color]
  | [Color, LineWidth]
  | [LineWidth, Color]
  | [LineStyle, LineWidth]
  | [LineWidth, LineStyle]

type ThreeValues =
  | [Color, LineStyle, LineWidth]
  | [Color, LineWidth, LineStyle]
  | [LineStyle, Color, LineWidth]
  | [LineStyle, LineWidth, Color]
  | [LineWidth, Color, LineStyle]
  | [LineWidth, LineStyle, Color]

type BorderSide = OneValue | TwoValues | ThreeValues

const serializeAtomicValue = (value: AtomicValue) =>
  isColor(value)
    ? serializeColor(value)
    : isLengthType(value)
    ? serializeLength(value)
    : value

const serializeBorderSide = (value: BorderSide | GlobalCssKeyword) =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeAtomicValue(value)
    : (value as AtomicValue[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

export const serializeBorderTopValue = serializeBorderSide
export const serializeBorderRightValue = serializeBorderSide
export const serializeBorderBottomValue = serializeBorderSide
export const serializeBorderLeftValue = serializeBorderSide
export const serializeBorderValue = serializeBorderSide

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
  borderTop: BorderSide | GlobalCssKeyword
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
  borderRight: BorderSide | GlobalCssKeyword
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
  borderBottom: BorderSide | GlobalCssKeyword
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
  borderLeft: BorderSide | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderDeclaration = {
  /**
   * Maps to CSS's **`border`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/CSS2/box.html#border-shorthand-properties
   */
  border: BorderSide | GlobalCssKeyword
}
