import { GlobalCssKeyword } from '../shared/types'

type SingleValueSyntax =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana '

type TwoValuesSyntax =
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

type ThreeValuesSyntax =
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

type TextTransform = SingleValueSyntax | TwoValuesSyntax | ThreeValuesSyntax

/**
 * Creates a declaration object for the **`textTransform`** shorthand property.
 * @category Declaration function
 * @formalSyntax none | [capitalize | uppercase | lowercase ] || full-width || full-size-kana
 * @implentationReference https://www.w3.org/TR/css-text-3/#propdef-text-transform
 */

export const textTransform = (
  value: TextTransform | GlobalCssKeyword
): { textTransform: string } => ({
  textTransform: value
})
