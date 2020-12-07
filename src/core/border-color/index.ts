import { Color, PropType, ValueOrFunc } from '../shared'
import { GlobalCssKeyword, serializeAtomicValue } from '../shared'

const serializeBorderSideColor = (property: string) => (x: Color | GlobalCssKeyword) => ({
    [property]: serializeAtomicValue(x),
})

/**
 * Creates a declaration object for the **`border-top-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference hhttps://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const serializeBorderTopColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderTopColor' : 'border-top-color')
export const serializeBorderRightColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderRightColor' : 'border-right-color')
export const serializeBorderBottomColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderBottomColor' : 'border-bottom-color')
export const serializeBorderLeftColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderLeftColor' : 'border-left-color')

/** @hide */
type BorderSidePropValue = Color | GlobalCssKeyword
/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopColorDeclaration = {
    /**
     * Maps to CSS's **`border-top-color`** property
     * @category RBProperty
     * @formalSyntaxForValue <color>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     */
    borderTopColor: BorderSidePropValue
}
export type BorderTopColorDeclarationJSS = {
    borderTopColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightColorDeclaration = {
    /**
     * Maps to CSS's **`border-right-color`** property
     * @category RBProperty
     * @formalSyntaxForValue <color>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     */
    borderRightColor: BorderSidePropValue
}
export type BorderRightColorDeclarationJSS = {
    borderRightColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomColorDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-color`** property
     * @category RBProperty
     * @formalSyntaxForValue <color>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     */
    borderBottomColor: BorderSidePropValue
}
export type BorderBottomColorDeclarationJSS = {
    borderBottomColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftColorDeclaration = {
    /**
     * Maps to CSS's **`border-left-color`** property
     * @category RBProperty
     * @formalSyntaxForValue <color>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     */
    borderLeftColor: BorderSidePropValue
}
export type BorderLeftColorDeclarationJSS = {
    borderLeftColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @hide
 */
type BorderColor = Color | [Color, Color, Color, Color]

export const serializeBorderColor = (type: PropType) => (
    x: GlobalCssKeyword | BorderColor,
): {
    [key: string]: string
} => {
    const propName = type === 'inline' ? 'borderColor' : 'border-color'
    return {
        [propName]: !Array.isArray(x)
            ? serializeAtomicValue(x)
            : x.reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
    }
}

/** @hide */
type BorderColorPropValue = BorderColor | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderColorDeclaration = {
    /**
     * Maps to CSS's **`border-color`** property
     * @category RBProperty
     * @formalSyntaxForValue <color>{1,4}
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     */
    borderColor: BorderColorPropValue
}
export type BorderColorDeclarationJSS = {
    borderColor: ValueOrFunc<BorderColorPropValue>
}
