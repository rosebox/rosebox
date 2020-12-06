import { GlobalCssKeyword, LengthPercentage, serializeAtomicValue, ValueOrFunc } from '../shared'

type BaselineSource = 'auto' | 'first' | 'last'
type AlignmentBaseline =
    | 'baseline'
    | 'text-bottom'
    | 'alphabetic'
    | 'ideographic'
    | 'middle'
    | 'central'
    | 'mathematical'
    | 'text-top'
    | 'bottom'
    | 'center'
    | 'top'

type BaselineShift = 'sub' | 'super' | 'top' | 'center' | 'bottom' | LengthPercentage

export const serializeVerticalAlign = (x: BaselineSource | AlignmentBaseline | BaselineShift | GlobalCssKeyword) => ({
    verticalAlign: serializeAtomicValue(x),
})

/** @hide */
type VerticalAlignPropValue = BaselineSource | AlignmentBaseline | BaselineShift | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VerticalAlignDeclaration = {
    /**
     * Maps to CSS's **`vertical-align`** property
     * @category RBProperty
     */
    verticalAlign: VerticalAlignPropValue
}

export type VerticalAlignDeclarationJSS = {
    verticalAlign: ValueOrFunc<VerticalAlignPropValue>
}
