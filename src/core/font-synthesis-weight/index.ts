import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisWeightDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis-weight`** property
   * @category RBProperty
   * @formalSyntaxForValu auto | none
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-weight
   */
  fontSynthesisWeight: 'auto' | 'none' | GlobalCssKeyword
}
