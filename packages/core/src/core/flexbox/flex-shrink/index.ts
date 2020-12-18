import { ShrinkGrow } from '../shared'
import { GlobalCssKeyword, PropType, ValueOrFunc } from '../../shared'

export const serializeFlexShrink = (type: PropType) => (
    value: ShrinkGrow | GlobalCssKeyword,
): { [key: string]: string | number } => ({
    [type === 'inline' ? 'flexShrink' : 'flex-shrink']: value,
})

/** @hide */
type FlexShrinkPropValue = ShrinkGrow | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexShrinkDeclaration = {
    /**
     * Maps to CSS's **`flex-shrink`** property
     * @initial 1
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex-shrink
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flexShrink: FlexShrinkPropValue
}

export type FlexShrinkDeclarationJSS = {
    flexShrink: ValueOrFunc<FlexShrinkPropValue>
}
