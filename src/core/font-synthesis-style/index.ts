import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisStyleDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis-style`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-style
   */
  fontSynthesisStyle: 'auto' | 'none' | GlobalCssKeyword
}
