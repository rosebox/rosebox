import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisSmallCapsDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis-small-caps`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-small-caps
   */
  fontSynthesisSmallCaps: 'auto' | 'none' | GlobalCssKeyword
}
