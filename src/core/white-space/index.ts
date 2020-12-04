import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 
| 'normal'
| 'pre'
| 'nowrap'
| 'pre-wrap'
| 'pre-line'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WhiteSpaceDeclaration = {
  /**
   * Maps to CSS's **`white-space`** property
   * @category RBProperty
   */
  whiteSpace: PropValue
}

export type WhiteSpaceDeclarationJSS = {
  whiteSpace: ValueOrFunc<PropValue>
}
