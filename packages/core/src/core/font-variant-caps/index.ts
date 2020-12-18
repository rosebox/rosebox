import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontVariantCapsPropValue =
    | 'normal'
    | 'small-caps'
    | 'all-small-caps'
    | 'petite-caps'
    | 'all-petite-caps'
    | 'unicase'
    | 'titling-caps'
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantCapsDeclaration = {
    /**
     * Maps to CSS's **`font-variant-caps`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-variant-caps-prop
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariantCaps: FontVariantCapsPropValue
}

export type FontVariantCapsDeclarationJSS = {
    fontVariantCaps: ValueOrFunc<FontVariantCapsPropValue>
}
