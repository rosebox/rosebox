import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type UserSelectDeclaration = {
  /**
   * Maps to CSS's **`user-select`** property
   * @category RBProperty
   */
  userSelect: 'auto' | 'text' | 'none' | 'contain' | 'all' | GlobalCssKeyword
}
