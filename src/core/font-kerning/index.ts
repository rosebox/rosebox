import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontKerningDeclaration = {
  /**
   * Maps to CSS's **`font-kerning`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | normal | none
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#propdef-font-kerning
   */
  fontKerning: 'auto' | 'normal' | 'none' | GlobalCssKeyword
}
