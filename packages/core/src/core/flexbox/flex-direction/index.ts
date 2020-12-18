import { GlobalCssKeyword, PropType, ValueOrFunc } from '../../shared'

/**
 * Formal syntax: row | row-reverse | column | column-reverse
 * @hide
 * */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export const serializeFlexDirectionValue = (type: PropType) => (value: FlexDirection | GlobalCssKeyword) => ({
    [type === 'inline' ? 'flexDirection' : 'flex-direction']: value,
})

/** @hide */
type FlexDirectionPropValue = FlexDirection | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexDirectionDeclaration = {
    /**
     * Maps to CSS's **`flex-direction`** property
     * @initial row
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex-direction
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flexDirection: FlexDirectionPropValue
}

export type FlexDirectionDeclarationJSS = {
    flexDirection: ValueOrFunc<FlexDirectionPropValue>
}
