import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TextAlignPropValue =
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
    | 'justify-all'
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextAlignDeclaration = {
    /**
     * Maps to CSS's **`text-align`** property
     * @category RBProperty
     * @formalSyntaxForValue start | end | left | right | center | justify | match-parent | justify-all
     * @added 0.2.0
     * @implentationReference @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-align-property
     */
    textAlign: TextAlignPropValue
}

export type TextAlignDeclarationJSS = {
    /**
     * Maps to CSS's **`text-align`** property
     * @category RBProperty
     * @formalSyntaxForValue start | end | left | right | center | justify | match-parent | justify-all
     * @added 0.2.0
     * @implentationReference @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-align-property
     */
    textAlign: ValueOrFunc<TextAlignPropValue>
}
