import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type TextWrapDeclaration = {
  /**
   *  Maps to CSS's **`text-wrap`** property
   * @category RBProperty
   */
  textWrap:
    | 'wrap'
    | 'nowrap'
    | 'balance'
    | 'stable'
    | 'pretty'
    | GlobalCssKeyword
}
