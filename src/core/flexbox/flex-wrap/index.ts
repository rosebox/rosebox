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
     * @category RBProperty
     * @formalSyntaxForValue nowrap | wrap | wrap-reverse
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-wrap-property
     */
    flexWrap: FlexWrapPropValue
}
export type FlexWrapDeclarationJSS = {
    flexWrap: ValueOrFunc<FlexWrapPropValue>
}
