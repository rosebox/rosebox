import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TextGroupAlignPropValue = 'none' | 'start' | 'end' | 'left' | 'right' | 'center' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextGroupAlignDeclaration = {
    /**
     * Maps to CSS's **`text-group-align`** property
     * @category RBProperty
     */
    textGroupAlign: TextGroupAlignPropValue
}

export type TextGroupAlignDeclarationJSS = {
    textGroupAlign: ValueOrFunc<TextGroupAlignPropValue>
}
