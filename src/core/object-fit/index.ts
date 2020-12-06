import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type ObjectFitPropValue = 'fill' | 'contain' | 'cover' | 'none' | 'scale' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type ObjectFitDeclaration = {
    /**
     * Maps to CSS's **`object-fit`** property
     * @category RBProperty
     * @formalSyntaxForValue fill | contain | cover | none | scale-down
     * @implementationReference https://drafts.csswg.org/css-images-4/#the-object-fit
     */
    objectFit: ObjectFitPropValue
}

export type ObjectFitDeclarationJSS = {
    objectFit: ValueOrFunc<ObjectFitPropValue>
}
