import {
    LineWidth,
    LineStyle,
    isLengthType,
    GlobalCssKeyword,
    isGlobalCssKeyword,
} from '../shared/types'
import { Color, isColor, serializeColor } from '../color/internal'
import { serializeLength } from '../shared/serializers'

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

const serializeBorderSide = (value: BorderSide) =>
    !Array.isArray(value)
        ? serializeAtomicValue(value)
        : (value as AtomicValue[])
            .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
            .trim()

/**
 * Creates a declaration object for the **`border-top`** property.
 * @category Declaration function
 * @formalSyntax [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/CSS2/box.html#propdef-border-top
 */
export const borderTop = (
    value: BorderSide | GlobalCssKeyword
): { borderTop: string } => ({
    borderTop: isGlobalCssKeyword(value) ? value : serializeBorderSide(value),
})

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
 * Creates a declaration object for the **`border-right`** property.
 * @category Declaration function
 * @formalSyntax [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/CSS2/box.html#border-shorthand-properties
 */
export const borderRight = (
    value: BorderSide | GlobalCssKeyword
): { borderRight: string } => ({
    borderRight: isGlobalCssKeyword(value) ? value : serializeBorderSide(value),
})

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
 * Creates a declaration object for the **`border-bottom`** property.
 * @category Declaration function
 * @formalSyntax [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/CSS2/box.html#border-shorthand-properties
 */
export const borderBottom = (
    value: BorderSide | GlobalCssKeyword
): { borderBottom: string } => ({
    borderBottom: isGlobalCssKeyword(value) ? value : serializeBorderSide(value),
})

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
 * Creates a declaration object for the **`border-left`** property.
 * @category Declaration function
 * @formalSyntax [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/CSS2/box.html#border-shorthand-properties
 */
export const borderLeft = (
    value: BorderSide | GlobalCssKeyword
): { borderLeft: string } => ({
    borderLeft: isGlobalCssKeyword(value) ? value : serializeBorderSide(value),
})

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
 * Creates a declaration object for the **`border`** property.
 * @category Declaration function
 * @formalSyntax [ <border-width> || <border-style> || <'border-top-color'> ] | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/CSS2/box.html#border-shorthand-properties
 */
export const border = (
    value: BorderSide | GlobalCssKeyword
): { border: string } => ({
    border: isGlobalCssKeyword(value) ? value : serializeBorderSide(value),
})

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
