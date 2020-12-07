import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TextOrientationPropValue = 'mixed' | 'upright' | 'sideways' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextOrientationDeclaration = {
    /**
     * Maps to CSS's **`text-orientation`** property
     * @category RBProperty
     */
    textOrientation: TextOrientationPropValue
}

export type TextOrientationDeclarationJSS = {
    textOrientation: ValueOrFunc<TextOrientationPropValue>
}
