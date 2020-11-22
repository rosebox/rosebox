import { GlobalCssKeyword, LineStyle } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineStyleDeclaration = {
  /**
   * Maps to CSS's **`outline-style`** property
   * @category RBProperty
   */
  outlineStyle: LineStyle | GlobalCssKeyword
}
