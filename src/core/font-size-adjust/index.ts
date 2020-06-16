import { GlobalCssKeyword } from '../shared/types'

export const serializeFontSizeAdjustPropValue = (
  x: number | 'none' | GlobalCssKeyword
): string | number => (typeof x === 'string' ? x : x)

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
  fontSizeAdjust: number | 'none' | GlobalCssKeyword
}
