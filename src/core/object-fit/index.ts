import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type ObjectFitDeclaration = {
  /**
   * Maps to CSS's **`object-fit`** property
   * @category RBProperty
   * @formalSyntaxForValue fill | contain | cover | none | scale-down
   * @implementationReference https://drafts.csswg.org/css-images-4/#the-object-fit
   */
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale' | GlobalCssKeyword
}
