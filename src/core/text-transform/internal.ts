import { GlobalCssKeyword } from '../shared/types'

export type TextTransformCSSProp = 'text-transform'

type OneValue =
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana '

type TwoValues =
    | 'capitalize full-width'
    | 'full-width capitalize'
    | 'uppercase full-width'
    | 'full-width uppercase'
    | 'lowercase full-width'
    | 'full-width lowercase'
    | 'capitalize full-size-kana'
    | 'full-size-kana capitalize'
    | 'uppercase full-size-kana'
    | 'full-size-kana uppercase'
    | 'lowercase full-size-kana'
    | 'full-size-kana lowercase'

type ThreeValues =
    | 'capitalize full-width full-size-kana'
    | 'capitalize full-size-kana full-width'
    | 'full-size-kana capitalize full-width'
    | 'full-size-kana full-width capitalize'
    | 'full-width full-size-kana capitalize'
    | 'full-width capitalize full-size-kana'
    | 'uppercase full-width full-size-kana'
    | 'uppercase full-size-kana full-width'
    | 'full-size-kana uppercase full-width'
    | 'full-size-kana full-width uppercase'
    | 'full-width full-size-kana uppercase'
    | 'full-width uppercase full-size-kana'
    | 'lowercase full-width full-size-kana'
    | 'lowercase full-size-kana full-width'
    | 'full-size-kana lowercase full-width'
    | 'full-size-kana full-width lowercase'
    | 'full-width full-size-kana lowercase'
    | 'full-width lowercase full-size-kana'

type TextTransform = OneValue | TwoValues | ThreeValues

/**
 * Creates a declaration object for the **`text-transform`** shorthand property.
 * @category Declaration function
 * @formalSyntax none | [capitalize | uppercase | lowercase ] || full-width || full-size-kana
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-transform-property
 */

export const textTransform = (value: TextTransform | GlobalCssKeyword) => ({
    textTransform: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TextTransformDeclaration = {
    /**
     * Maps to CSS's **`text-transform`** property
     * @category RBProperty
     * @formalSyntaxForValue none | [capitalize | uppercase | lowercase ] || full-width || full-size-kana
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-transform-property
     */
    textTransform: TextTransform | GlobalCssKeyword
}
