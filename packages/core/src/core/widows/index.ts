import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type WidowsPropValue = number | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WidowsDeclaration = {
    /**
     * Maps to CSS's **`widows`** property
     * @category RBProperty
     */
    widows: WidowsPropValue
}

export type WidowsDeclarationJSS = {
    widows: ValueOrFunc<WidowsPropValue>
}
