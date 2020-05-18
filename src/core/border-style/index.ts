import {
    GlobalCssKeyword,
    LineStyle,
    isGlobalCssKeyword,
} from '../shared/types'

export type BorderStyleCSSProp = 'border-style'

const borderSideStyle =
    (value: LineStyle | GlobalCssKeyword): string =>
        value

export const serializeBorderTopStyleValue = borderSideStyle
export const serializeBorderRightStyleValue = borderSideStyle
export const serializeBorderBottomStyleValue = borderSideStyle
export const serializeBorderLeftStyleValue = borderSideStyle

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
    borderTopStyle: LineStyle | GlobalCssKeyword
}


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
    borderRightStyle: LineStyle | GlobalCssKeyword
}

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
    borderBottomStyle: LineStyle | GlobalCssKeyword
}


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
    borderLeftStyle: LineStyle | GlobalCssKeyword
}

type BorderStyle =
    | LineStyle
    | [LineStyle]
    | [LineStyle, LineStyle]
    | [LineStyle, LineStyle, LineStyle]
    | [LineStyle, LineStyle, LineStyle, LineStyle]

export const serializeBorderStyleValue = (value: BorderStyle | GlobalCssKeyword): string =>
    isGlobalCssKeyword(value)
        ? value
        : !Array.isArray(value)
            ? value
            : (value as LineStyle[])
                .reduce((acc: any, item) => acc + ' ' + item, '')
                .trim()

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
    borderStyle: BorderStyle | GlobalCssKeyword
}
