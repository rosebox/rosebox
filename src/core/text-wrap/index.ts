import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'wrap'
| 'nowrap'
| 'balance'
| 'stable'
| 'pretty'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextWrapDeclaration = {
  /**
   *  Maps to CSS's **`text-wrap`** property
   * @category RBProperty
   */
  textWrap: PropValue
}

export type TextWrapDeclarationJSS = {
  textWrap: ValueOrFunc<PropValue>
}
