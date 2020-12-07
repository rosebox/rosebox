import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TextJustifyPropValue = 'auto' | 'none' | 'inter-word' | 'inter-character' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextJustifyDeclaration = {
    /**
     * Maps to CSS's **`text-justify`** property
     * @category RBProperty
     */
    textJustify: TextJustifyPropValue
}

export type TextJustifyDeclarationJSS = {
    textJustify: ValueOrFunc<TextJustifyPropValue>
}
