import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type WhiteSpaceDeclaration = {
  /**
   * Maps to CSS's **`white-space`** property
   * @category RBProperty
   */
  whiteSpace:
    | 'normal'
    | 'pre'
    | 'nowrap'
    | 'pre-wrap'
    | 'pre-line'
    | GlobalCssKeyword
}
