import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type BackfaceVisibility = {
  /**
   * Maps to CSS's **`backface-visibility`** property
   * @category RBProperty
   */
  backfaceVisibility: 'visiblee' | 'hidden' | GlobalCssKeyword
}
