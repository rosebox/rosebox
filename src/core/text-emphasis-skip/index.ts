import { GlobalCssKeyword, serializeDoubleBar } from '../shared'
import { DoubleBar4, ValueOrFunc } from '../shared/types'

export const serializeTextEmphasisSkip = (
    x: DoubleBar4<'spaces', 'punctuation', 'symbols', 'narrow'> | GlobalCssKeyword,
) => ({
    textEmphasisSkip: typeof x === 'string' ? x : serializeDoubleBar(x),
})

/** @hide */
type TextEmphasisSkipPropValue = DoubleBar4<'spaces', 'punctuation', 'symbols', 'narrow'> | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisSkipDeclaration = {
    /**
     * Maps to CSS's **`text-emphasis-skip`** property
     * @category RBProperty
     */
    textEmphasisSkip: TextEmphasisSkipPropValue
}

export type TextEmphasisSkipDeclarationJSS = {
    textEmphasisSkip: ValueOrFunc<TextEmphasisSkipPropValue>
}
