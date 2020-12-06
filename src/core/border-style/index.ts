import { GlobalCssKeyword, LineStyle, PropType, serializeAtomicValue, ValueOrFunc } from '../shared';

export type BorderStyleCSSProp = 'border-style';

const serializeBorderSideStyle = (property: string) => (value: LineStyle | GlobalCssKeyword) => ({
    [property]: value,
});

export const serializeBorderTopStyle = (type: PropType) =>
    serializeBorderSideStyle(type === 'inline' ? 'borderTopStyle' : 'border-top-style');
export const serializeBorderRightStyle = (type: PropType) =>
    serializeBorderSideStyle(type === 'inline' ? 'borderRightStyle' : 'border-right-style');
export const serializeBorderBottomStyle = (type: PropType) =>
    serializeBorderSideStyle(type === 'inline' ? 'borderBottomStyle' : 'border-bottom-style');
export const serializeBorderLeftStyle = (type: PropType) =>
    serializeBorderSideStyle(type === 'inline' ? 'borderLeftStyle' : 'border-Left-style');

/** @hide */
type BorderSideStylePropValue = LineStyle | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopStyleDeclaration = {
    /**
     * Maps to CSS's **`border-top-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
     */
    borderTopStyle: LineStyle | GlobalCssKeyword;
};
export type BorderTopStyleDeclarationJSS = {
    borderTopStyle: ValueOrFunc<BorderSideStylePropValue>;
};

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightStyleDeclaration = {
    /**
     * Maps to CSS's **`border-right-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
     */
    borderRightStyle: BorderSideStylePropValue;
};
export type BorderRightStyleDeclarationJSS = {
    borderRightStyle: ValueOrFunc<BorderSideStylePropValue>;
};

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomStyleDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
     */
    borderBottomStyle: BorderSideStylePropValue;
};
export type BorderBottomStyleDeclarationJSS = {
    borderBottomStyle: ValueOrFunc<BorderSideStylePropValue>;
};

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftStyleDeclaration = {
    /**
     * Maps to CSS's **`border-left-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
     */
    borderLeftStyle: BorderSideStylePropValue;
};
export type BorderLeftStyleDeclarationJSS = {
    borderLeftStyle: ValueOrFunc<BorderSideStylePropValue>;
};

/**
 * @hide
 */
type BorderStyle = LineStyle | [LineStyle, LineStyle, LineStyle, LineStyle];

export const serializeBorderStyle = (type: PropType) => (
    x: BorderStyle | GlobalCssKeyword,
): {
    [key: string]: string;
} => {
    const propName = type === 'inline' ? 'borderStyle' : 'border-style';
    return {
        [propName]: !Array.isArray(x)
            ? serializeAtomicValue(x)
            : (x as LineStyle[]).reduce((acc: any, item) => acc + ' ' + item, '').trim(),
    };
};
/** @hide */
type BorderStylePropValue = BorderStyle | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderStyleDeclaration = {
    /**
     * Maps to CSS's **`border-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>{1,4}
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
     */
    borderStyle: BorderStylePropValue;
};
export type BorderStyleDeclarationJSS = {
    /**
     * Maps to CSS's **`border-style`** property
     * @category RBProperty
     * @formalSyntaxForValue <line-style>{1,4}
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
     */
    borderStyle: ValueOrFunc<BorderStylePropValue>;
};
