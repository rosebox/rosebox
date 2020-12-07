import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TransformBoxPropValue = 'content-box' | 'border-box' | 'fill-box' | 'stroke-box' | 'view-box' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformBoxDeclaration = {
    /**
     * Maps to CSS's **`transform-box`** property
     * @category RBProperty
     */
    transformBox: TransformBoxPropValue
}

export type TransformBoxDeclarationJSS = {
    transformBox: ValueOrFunc<TransformBoxPropValue>
}
