import { ShrinkGrow } from '../shared'
import { GlobalCssKeyword, PropType, ValueOrFunc } from '../../shared'

export const serializeFlexGrow = (type: PropType) => (
    value: ShrinkGrow | GlobalCssKeyword,
): {
    [key: string]: string | number
} => ({
    [type === 'inline' ? 'flexGrow' : 'flex-grow']: value,
})

/** @hide */
type FlexGrowPropValue = number | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexGrowDeclaration = {
    /**
     * Maps to CSS's **`flex-grow`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex-grow
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flexGrow: FlexGrowPropValue
}

export type FlexGrowDeclarationJSS = {
    flexGrow: ValueOrFunc<FlexGrowPropValue>
}
