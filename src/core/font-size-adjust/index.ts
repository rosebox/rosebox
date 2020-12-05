import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontSizeAdjust = (type: PropType) => (
  x: number | 'none' | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'fontSizeAdjust' : 'font-size-adjust']: typeof x === 'string' ? x : x,
})

type FontSizeAdjustPropValue = number | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSizeAdjustDeclaration = {
  /**
   * Maps to CSS's **`font-size-adjust`** property
   * @category RBProperty
   * @formalSyntaxForValue none | <number>
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#propdef-font-size-adjust
   */
  fontSizeAdjust: FontSizeAdjustPropValue
}
export type FontSizeAdjustDeclarationJSS = {
  fontSizeAdjust: ValueOrFunc<FontSizeAdjustPropValue>
}
