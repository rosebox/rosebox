import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantPositionDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis-style`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#propdef-font-variant-position
   */
  fontVariantPosition: 'normal' | 'sub' | 'super' | GlobalCssKeyword
}
