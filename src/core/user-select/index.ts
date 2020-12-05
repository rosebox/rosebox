import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type UserSelectPropValue = 'auto' | 'text' | 'none' | 'contain' | 'all' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type UserSelectDeclaration = {
  /**
   * Maps to CSS's **`user-select`** property
   * @category RBProperty
   */
  userSelect: UserSelectPropValue
}

export type UserSelectDeclarationJSS = {
  userSelect: ValueOrFunc<UserSelectPropValue>
}
