import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformStyleDeclaration = {
  /**
   * Maps to CSS's **`transform-style`** property
   * @category RBProperty
   */
  transformStyle: 'flat' | 'preserve-3d' | GlobalCssKeyword
}
