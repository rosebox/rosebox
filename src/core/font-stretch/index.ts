import { GlobalCssKeyword, Percentage, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

export const serializeFontStretch = (type: PropType) => (x: Percentage | string) => ({
    [type === 'inline' ? 'fontStretch' : 'font-stretch']: serializeAtomicValue(x),
})

/** @hide */
type FontStretchPropValue =
    | Percentage
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStretchDeclaration = {
    /**
     * Maps to CSS's **`font-stretch`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#propdef-font-stretch
     * @specification {@link https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/ CSS Fonts Module Level 4}
     */
    fontStretch: FontStretchPropValue
}
export type FontStretchDeclarationJSS = {
    fontStretch: ValueOrFunc<FontStretchPropValue>
}
