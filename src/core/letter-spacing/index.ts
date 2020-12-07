import { GlobalCssKeyword, Length, Calculation, serializeAtomicValue, PropType, ValueOrFunc } from '../shared'

export type LetterSpacingCSSProp = 'letter-spacing'

export const serializeLetterSpacing = (type: PropType) => (x: 'normal' | Length | Calculation | GlobalCssKeyword) => ({
    [type === 'inline' ? 'letterSpacing' : 'letter-spacing']: serializeAtomicValue(x),
})

/** @hide */
type LetterSpacingPropValue = 'normal' | Length | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type LetterSpacingDeclaration = {
    /**
     * Maps to CSS's **`letter-spacing`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-text-3-20201119/#propdef-letter-spacing
     * @specification {@link https://www.w3.org/TR/2020/WD-css-text-3-20201119/ CSS Text Module Level 3}
     */
    letterSpacing: LetterSpacingPropValue
}

export type LetterSpacingDeclarationJSS = {
    letterSpacing: ValueOrFunc<LetterSpacingPropValue>
}
