import { GlobalCssKeyword, Length, serializeAtomicValue, ValueOrFunc } from '../shared'

export const serializeWordSpacing = (x: 'normal' | Length | GlobalCssKeyword): { wordSpacing: string } => ({
    wordSpacing: typeof x === 'string' ? x : serializeAtomicValue(x),
})

/** @hide */
type WordSpacingPropValue = 'normal' | Length | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WordSpacingDeclaration = {
    /**
     * Maps to CSS's **`word-spacing`** property
     * @category RBProperty
     * @formalSyntaxForValue normal | <length>
     * @added 0.2.0
     * @implentationReference https://drafts.csswg.org/css-text-3/#propdef-word-spacing
     */
    wordSpacing: WordSpacingPropValue
}

export type WordSpacingDeclarationJSS = {
    wordSpacing: ValueOrFunc<WordSpacingPropValue>
}
