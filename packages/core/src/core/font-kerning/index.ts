import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontKerning = (type: PropType) => (x: 'auto' | 'normal' | 'none' | GlobalCssKeyword) => ({
    [type === 'inline' ? 'fontKerning' : 'font-kerning']: x,
})

/** @hide */
type FontKerningPropValue = 'auto' | 'normal' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontKerningDeclaration = {
    /**
     * Maps to CSS's **`font-kerning`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-kerning-prop
     * @specification {@link https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/ CSS Fonts Module Level 4}
     */
    fontKerning: FontKerningPropValue
}

export type FontKerningDeclarationJSS = {
    fontKerning: ValueOrFunc<FontKerningPropValue>
}
