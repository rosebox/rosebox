import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontOpticalSizingDeclaration = {
  /**
   * Maps to CSS's **`font-optical-sizing`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-def
   */
  fontOpticalSizing: 'auto' | 'none' | GlobalCssKeyword
}
