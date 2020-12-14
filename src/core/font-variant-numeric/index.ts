import { GlobalCssKeyword, ValueOrFunc } from '../shared'

type NumericFigureValues = 'lining-nums' | 'oldstyle-num'
type NumericSpacingValues = 'proportional-nums' | 'tabular-nums'
type NumericFractionValues = 'diagonal-fractions' | 'stacked-fractions'

/** @hide */
type FontVariantNumericPropValue =
    | 'normal'
    | 'ordinal'
    | 'slashed-zero'
    | NumericFigureValues
    | NumericSpacingValues
    | NumericFractionValues
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantNumericDeclaration = {
    /**
     * Maps to CSS's **`font-variant-numeric`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-variant-numeric-prop
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariantNumeric: FontVariantNumericPropValue
}

export type FontVariantNumericDeclarationJSS = {
    fontVariantNumeric: ValueOrFunc<FontVariantNumericPropValue>
}
