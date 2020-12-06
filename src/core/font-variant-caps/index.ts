import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontVariantCapsPropValue =
    | 'normal'
    | 'small-caps'
    | 'all-small-caps'
    | 'petite-caps'
    | 'all-petite-caps'
    | 'unicase'
    | 'titling-caps'
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantCapsDeclaration = {
    /**
     * Maps to CSS's **`font-variant-caps`** property
     * @category RBProperty
     * @formalSyntaxForValue 	normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps
     * @implementationReference https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps
     */
    fontVariantCaps: FontVariantCapsPropValue
}

export type FontVariantCapsDeclarationJSS = {
    fontVariantCaps: ValueOrFunc<FontVariantCapsPropValue>
}
