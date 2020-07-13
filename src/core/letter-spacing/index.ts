import { GlobalCssKeyword, Length, isLengthType } from '../shared'

import { serializeLength } from '../shared'

export type LetterSpacingCSSProp = 'letter-spacing'

export const serializeLetterSpacing = (
  value: 'normal' | Length | GlobalCssKeyword
): string => (isLengthType(value) ? serializeLength(value) : value)

/**
 * @category RBDeclarationTypeAlias
 */
export type LetterSpacingDeclaration = {
  /**
   * Maps to CSS's **`letter-spacing`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | <length>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#letter-spacing-property
   */
  letterSpacing: 'normal' | Length | GlobalCssKeyword
}
