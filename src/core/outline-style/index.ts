import { GlobalCssKeyword, LineStyle, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = LineStyle | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineStyleDeclaration = {
  /**
   * Maps to CSS's **`outline-style`** property
   * @category RBProperty
   */
  outlineStyle: PropValue
}

export type OutlineStyleDeclarationJSS = {
  outlineStyle: ValueOrFunc<PropValue>
}
