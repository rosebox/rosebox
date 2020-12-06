import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontVariantPositionPropValue = 'normal' | 'sub' | 'super' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantPositionDeclaration = {
    /**
     * Maps to CSS's **`font-variant-position`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | none
     * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#propdef-font-variant-position
     */
    fontVariantPosition: FontVariantPositionPropValue
}

export type FontVariantPositionDeclarationJSS = {
    fontVariantPosition: ValueOrFunc<FontVariantPositionPropValue>
}
