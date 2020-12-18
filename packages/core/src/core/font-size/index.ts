import { GlobalCssKeyword, LengthPercentage, serializeAtomicValue, Calculation, PropType, ValueOrFunc } from '../shared'

export type FontSizeCSSProp = 'font-size'

type RelativeSizeKeyword = 'larger' | 'smaller'

type AbsoluteSizeKeyword = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'

export const serializeFontSize = (type: PropType) => (
    x: RelativeSizeKeyword | AbsoluteSizeKeyword | LengthPercentage | Calculation | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'fontSize' : 'font-size']: serializeAtomicValue(x),
})

/** @hide */
type FontSizePropValue = RelativeSizeKeyword | AbsoluteSizeKeyword | LengthPercentage | Calculation | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSizeDeclaration = {
    /**
     * Maps to CSS's **`font-size`** property
     * @initial medium
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#propdef-font-size
     * @specification {@link https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/ CSS Fonts Module Level 4}
     */
    fontSize: FontSizePropValue
}
export type FontSizeDeclarationJSS = {
    fontSize: ValueOrFunc<FontSizePropValue>
}
