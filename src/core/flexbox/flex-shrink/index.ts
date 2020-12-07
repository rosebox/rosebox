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
     * @category RBProperty
     * @formalSyntaxForValue <number>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-shrink-property
     */
    flexShrink: FlexShrinkPropValue
}
export type FlexShrinkDeclarationJSS = {
    flexShrink: ValueOrFunc<FlexShrinkPropValue>
}
