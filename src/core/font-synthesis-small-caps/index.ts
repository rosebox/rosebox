import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontSynthesisSmallPropValue = 'auto' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisSmallCapsDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis-small-caps`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-synthesis-small-caps
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontSynthesisSmallCaps: FontSynthesisSmallPropValue
}

export type FontSynthesisSmallCapsDeclarationJSS = {
    fontSynthesisSmallCaps: ValueOrFunc<FontSynthesisSmallPropValue>
}
