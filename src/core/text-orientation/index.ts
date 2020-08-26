import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type TextOrientationDeclaration = {
  /**
   * Maps to CSS's **`text-orientation`** property
   * @category RBProperty
   */
  textOrientation: 'mixed' | 'upright' | 'sideways' | GlobalCssKeyword
}
