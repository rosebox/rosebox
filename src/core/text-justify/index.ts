import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type TextJustifyDeclaration = {
  /**
   * Maps to CSS's **`text-justify`** property
   * @category RBProperty
   */
  textJustify:
    | 'auto'
    | 'none'
    | 'inter-word'
    | 'inter-character'
    | GlobalCssKeyword
}
