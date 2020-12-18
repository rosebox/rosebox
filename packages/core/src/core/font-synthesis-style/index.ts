import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontSynthesisStylePropValue = 'auto' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisStyleDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis-style`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-synthesis-style
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontSynthesisStyle: FontSynthesisStylePropValue
}

export type FontSynthesisStyleDeclarationJSS = {
    fontSynthesisStyle: ValueOrFunc<FontSynthesisStylePropValue>
}
