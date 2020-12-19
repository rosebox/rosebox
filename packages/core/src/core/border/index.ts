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
import { DoubleBar3 } from '../shared'

type AtomicValue = Color | LineStyle | LineWidth

type BorderWidthValue = LineWidth
type BorderStyleValue = LineStyle
type BorderColorValue = Color

/**
 * @hide
 */
type BorderValue = DoubleBar3<BorderWidthValue, BorderStyleValue, BorderColorValue>

/** @hide */
type BorderSidePropValue = BorderValue | GlobalCssKeyword | 'none'

const serializeBorderValue = (property: string) => (value: BorderSidePropValue) => ({
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
     * @initial See individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
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
     * @initial See individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
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
     * @initial See individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
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
     * @initial See individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
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
     * @initial See individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-shorthands
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    border: BorderSidePropValue
}
export type BorderDeclarationJSS = {
    border: ValueOrFunc<BorderSidePropValue>
}
