import {
    LineWidth,
    LineStyle,
    GlobalCssKeyword,
    isGlobalCssKeyword,
    serializeAtomicValue,
    PropType,
    ValueOrFunc,
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

/** @hide */
type BorderSidePropValue = Border | GlobalCssKeyword | 'none'

const serializeBorderValue = (property: string) => (value: Border | GlobalCssKeyword) => ({
    [property]: isGlobalCssKeyword(value)
        ? value
        : !Array.isArray(value)
        ? serializeAtomicValue(value)
        : (value as AtomicValue[]).reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
})

export const serializeBorderTop = (type: PropType) =>
    serializeBorderValue(type === 'inline' ? 'borderTop' : 'border-top')
export const serializeBorderRight = (type: PropType) =>
    serializeBorderValue(type === 'inline' ? 'borderRight' : 'border-right')
export const serializeBorderBottom = (type: PropType) =>
    serializeBorderValue(type === 'inline' ? 'borderBottom' : 'border-bottom')
export const serializeBorderLeft = (type: PropType) =>
    serializeBorderValue(type === 'inline' ? 'borderLeft' : 'border-left')
export const serializeBorder = (type: PropType) => serializeBorderValue(type === 'inline' ? 'border' : 'border')

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
    borderTop: BorderSidePropValue
}
export type BorderTopDeclarationJSS = {
    borderTop: ValueOrFunc<BorderSidePropValue>
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
    borderRight: BorderSidePropValue
}
export type BorderRightDeclarationJSS = {
    borderRight: ValueOrFunc<BorderSidePropValue>
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
    borderBottom: BorderSidePropValue
}
export type BorderBottomDeclarationJSS = {
    borderBottom: ValueOrFunc<BorderSidePropValue>
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
    borderLeft: BorderSidePropValue
}
export type BorderLeftDeclarationJSS = {
    borderLeft: ValueOrFunc<BorderSidePropValue>
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
    border: BorderSidePropValue
}
export type BorderDeclarationJSS = {
    border: ValueOrFunc<BorderSidePropValue>
}
