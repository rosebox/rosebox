import { LineWidth, GlobalCssKeyword, Calculation, serializeAtomicValue, PropType, ValueOrFunc } from '../shared'

export type BorderWidthCSSProp = 'border-width'

const serializeBorderSideWidthValue = (property: string) => (x: LineWidth | Calculation | GlobalCssKeyword) => ({
    [property]: serializeAtomicValue(x),
})

export const serializeBorderTopWidth = (type: PropType) =>
    serializeBorderSideWidthValue(type === 'inline' ? 'borderTopWidth' : 'border-top-width')

/** @hide */
type BorderSideWidthPropValue = LineWidth | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopWidthDeclaration = {
    /**
     * Maps to CSS's **`border-top-width`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderTopWidth: BorderSideWidthPropValue
}
export type BorderTopWidthDeclarationJSS = {
    borderTopWidth: ValueOrFunc<BorderSideWidthPropValue>
}

export const serializeBorderRightWidth = (type: PropType) =>
    serializeBorderSideWidthValue(type === 'inline' ? 'borderRightWidth' : 'border-right-width')

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightWidthDeclaration = {
    /**
     * Maps to CSS's **`border-right-width`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderRightWidth: BorderSideWidthPropValue
}
export type BorderRightWidthDeclarationJSS = {
    borderRightWidth: ValueOrFunc<BorderSideWidthPropValue>
}

export const serializeBorderBottomWidth = (type: PropType) =>
    serializeBorderSideWidthValue(type === 'inline' ? 'borderBottomWidth' : 'border-bottom-width')

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomWidthDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-width`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderBottomWidth: BorderSideWidthPropValue
}
export type BorderBottomWidthDeclarationJSS = {
    /**
     * Maps to CSS's **`border-bottom-width`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderBottomWidth: ValueOrFunc<BorderSideWidthPropValue>
}

export const serializeBorderLeftWidth = (type: PropType) =>
    serializeBorderSideWidthValue(type === 'inline' ? 'borderLeftWidth' : 'border-left-width')

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftWidthDeclaration = {
    /**
     * Maps to CSS's **`border-left-width`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderLeftWidth: BorderSideWidthPropValue
}
export type BorderLeftWidthDeclarationJSS = {
    borderLeftWidth: ValueOrFunc<BorderSideWidthPropValue>
}

type BorderWidth =
    | LineWidth
    | [LineWidth]
    | [LineWidth, LineWidth]
    | [LineWidth, LineWidth, LineWidth]
    | [LineWidth, LineWidth, LineWidth, LineWidth]

/** @hide */
type BorderWidthPropValue = BorderWidth | GlobalCssKeyword

export const serializeBorderWidth = (type: PropType) => (
    x: BorderWidth | GlobalCssKeyword,
): { [key: string]: string } => {
    const propName = type === 'inline' ? 'borderWidth' : 'border-width'
    return {
        [propName]: !Array.isArray(x)
            ? serializeAtomicValue(x)
            : (x as LineWidth[]).reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderWidthDeclaration = {
    /**
     * Maps to CSS's **`border-width`** property
     * @initial (see individual properties)
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderWidth: BorderWidthPropValue
}

export type BorderWidthDeclarationJSS = {
    borderWidth: ValueOrFunc<BorderWidthPropValue>
}
