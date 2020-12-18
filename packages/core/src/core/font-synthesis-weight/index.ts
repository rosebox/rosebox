import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontSynthesisWeightPropValue = 'auto' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisWeightDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis-weight`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-synthesis-weight
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontSynthesisWeight: FontSynthesisWeightPropValue
}

export type FontSynthesisWeightDeclarationJSS = {
    fontSynthesisWeight: ValueOrFunc<FontSynthesisWeightPropValue>
}
