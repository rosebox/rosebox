import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = number | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WidowsDeclaration = {
  /**
   * Maps to CSS's **`widows`** property
   * @category RBProperty
   */
  widows: PropValue
}

export type WidowsDeclarationJSS = {
  widows: ValueOrFunc<PropValue>
}

