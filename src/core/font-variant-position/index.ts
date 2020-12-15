import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontVariantPositionPropValue = 'normal' | 'sub' | 'super' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantPositionDeclaration = {
    /**
     * Maps to CSS's **`font-variant-position`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-variant-position-prop
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariantPosition: FontVariantPositionPropValue
}

export type FontVariantPositionDeclarationJSS = {
    fontVariantPosition: ValueOrFunc<FontVariantPositionPropValue>
}
