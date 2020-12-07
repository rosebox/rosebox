import { GlobalCssKeyword, PropType, ValueOrFunc } from '../../shared'

export const serializeFlexWrap = (type: PropType) => (
    value: 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalCssKeyword,
): { [key: string]: string } => ({
    [type === 'inline' ? 'flexWrap' : 'flex-wrap']: value,
})

/** @hide */
type FlexWrapPropValue = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalCssKeyword

export type FlexWrapDeclaration = {
    /**
     * Maps to CSS's **`flex-wrap`** property
     * @initial nowrap
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex-wrap
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flexWrap: FlexWrapPropValue
}

export type FlexWrapDeclarationJSS = {
    flexWrap: ValueOrFunc<FlexWrapPropValue>
}
