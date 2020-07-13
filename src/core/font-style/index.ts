import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStyleDeclaration = {
  /**
   * Maps to CSS's **`font-style`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | italic | oblique
   * @implementationReference https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-style-prop
   */
  fontStyle: 'normal' | 'italic' | 'oblique' | GlobalCssKeyword
}
