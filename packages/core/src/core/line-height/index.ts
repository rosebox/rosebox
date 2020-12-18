import { GlobalCssKeyword, LengthPercentage, serializeAtomicValue, Calculation, PropType, ValueOrFunc } from '../shared'

export type LineHeightCSSProp = 'line-height'

export const serializeLineHeight = (type: PropType) => (
    x: 'normal' | number | LengthPercentage | Calculation | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'lineHeight' : 'line-height']: serializeAtomicValue(x),
})

/** @hide */
type LineHeightPropValue = 'normal' | number | LengthPercentage | Calculation | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type LineHeightDeclaration = {
    /**
     * Maps to CSS's **`line-height`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-inline-3-20200827/#propdef-line-height
     * @specification {@link https://www.w3.org/TR/2020/WD-css-inline-3-20200827/ CSS Inline Layout Module Level 3}
     */
    lineHeight: LineHeightPropValue
}

export type LineHeightDeclarationJSS = {
    lineHeight: ValueOrFunc<LineHeightPropValue>
}
