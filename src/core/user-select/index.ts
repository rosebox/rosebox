import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'auto' | 'text' | 'none' | 'contain' | 'all' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type UserSelectDeclaration = {
  /**
   * Maps to CSS's **`user-select`** property
   * @category RBProperty
   */
  userSelect: PropValue
}

export type UserSelectDeclarationJSS = {
  userSelect: ValueOrFunc<PropValue>
}
