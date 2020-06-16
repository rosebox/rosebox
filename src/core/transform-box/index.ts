import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformBoxDeclaration = {
  /**
   * Maps to CSS's **`transform-box`** property
   * @category RBProperty
   */
  transformBox:
    | 'content-box'
    | 'border-box'
    | 'fill-box'
    | 'stroke-box'
    | 'view-box'
    | GlobalCssKeyword
}
