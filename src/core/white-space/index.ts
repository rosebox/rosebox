import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type WhiteSpacPropValue = 'normal' | 'pre' | 'nowrap' | 'pre-wrap' | 'pre-line' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WhiteSpaceDeclaration = {
    /**
     * Maps to CSS's **`white-space`** property
     * @category RBProperty
     */
    whiteSpace: WhiteSpacPropValue
}

export type WhiteSpaceDeclarationJSS = {
    whiteSpace: ValueOrFunc<WhiteSpacPropValue>
}
