import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @skip
 */
type BoxSizing = 'content-box' | 'border-box'

export const serializeBoxSizingValue = (value: BoxSizing | GlobalCssKeyword) => value

/** @hide */
type BoxSizingPropValue = BoxSizing | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BoxSizingDeclaration = {
    /**
     * Maps to CSS's **`box-sizing`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-sizing-3-20201023/#propdef-box-sizing
     * @specification {@link https://www.w3.org/TR/2020/WD-css-sizing-3-20201023/ CSS Box Sizing Module Level 3}.
     */
    boxSizing: BoxSizingPropValue
}
export type BoxSizingDeclarationJSS = {
    boxSizing: ValueOrFunc<BoxSizingPropValue>
}

export const serializeBoxSizing = (type: PropType) => (x: BoxSizingPropValue) => ({
    [type === 'inline' ? 'boxSizing' : 'box-sizing']: serializeBoxSizingValue(x),
})
