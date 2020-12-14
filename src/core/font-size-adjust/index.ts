import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontSizeAdjust = (type: PropType) => (x: number | 'none' | GlobalCssKeyword) => ({
    [type === 'inline' ? 'fontSizeAdjust' : 'font-size-adjust']: typeof x === 'string' ? x : x,
})

type FontSizeAdjustPropValue = number | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSizeAdjustDeclaration = {
    /**
     * Maps to CSS's **`font-size-adjust`** property
     * @initial none
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#propdef-font-size-adjust
     * @specification {@link https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/ CSS Fonts Module Level 4}
     */
    fontSizeAdjust: FontSizeAdjustPropValue
}
export type FontSizeAdjustDeclarationJSS = {
    fontSizeAdjust: ValueOrFunc<FontSizeAdjustPropValue>
}
