import { GlobalCssKeyword } from '../shared'

type OneValue =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana '

type TwoValues =
  | ['capitalize', 'full-width']
  | ['full-width', 'capitalize']
  | ['uppercase', 'full-width']
  | ['full-width', 'uppercase']
  | ['lowercase', 'full-width']
  | ['full-width', 'lowercase']
  | ['capitalize', 'full-size-kana']
  | ['full-size-kana', 'capitalize']
  | ['uppercase', 'full-size-kana']
  | ['full-size-kana', 'uppercase']
  | ['lowercase', 'full-size-kana']
  | ['full-size-kana', 'lowercase']

type ThreeValues =
  | ['capitalize', 'full-width', 'full-size-kana']
  | ['capitalize', 'full-size-kana', 'full-width']
  | ['full-size-kana', 'capitalize', 'full-width']
  | ['full-size-kana', 'full-width', 'capitalize']
  | ['full-width', 'full-size-kana', 'capitalize']
  | ['full-width', 'capitalize', 'full-size-kana']
  | ['uppercase', 'full-width', 'full-size-kana']
  | ['uppercase', 'full-size-kana', 'full-width']
  | ['full-size-kana', 'uppercase', 'full-width']
  | ['full-size-kana', 'full-width', 'uppercase']
  | ['full-width', 'full-size-kana', 'uppercase']
  | ['full-width', 'uppercase', 'full-size-kana']
  | ['lowercase', 'full-width', 'full-size-kana']
  | ['lowercase', 'full-size-kana', 'full-width']
  | ['full-size-kana', 'lowercase', 'full-width']
  | ['full-size-kana', 'full-width', 'lowercase']
  | ['full-width', 'full-size-kana', 'lowercase']
  | ['full-width', 'lowercase', 'full-size-kana']

type TextTransform = OneValue | TwoValues | ThreeValues

export const serializeTextTransform = (value: TextTransform) => ({
  textTransform: !Array.isArray(value)
    ? value
    : (value as string[]).reduce((acc, item) => acc + ' ' + item, '').trim(),
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
