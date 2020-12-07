import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontSynthesisStylePropValue = 'auto' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisStyleDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis-style`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | none
     * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-style
     */
    fontSynthesisStyle: FontSynthesisStylePropValue
}

export type FontSynthesisStyleDeclarationJSS = {
    fontSynthesisStyle: ValueOrFunc<FontSynthesisStylePropValue>
}
