import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type TextGroupAlignDeclaration = {
  /**
   * Maps to CSS's **`text-group-align`** property
   * @category RBProperty
   */
  textGroupAlign:
    | 'none'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | GlobalCssKeyword
}
