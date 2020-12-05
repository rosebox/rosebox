import { GlobalCssKeyword, LineStyle, ValueOrFunc } from '../shared'

/** @hide */
type OutlineStylePropValue = LineStyle | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineStyleDeclaration = {
  /**
   * Maps to CSS's **`outline-style`** property
   * @category RBProperty
   */
  outlineStyle: OutlineStylePropValue
}

export type OutlineStyleDeclarationJSS = {
  outlineStyle: ValueOrFunc<OutlineStylePropValue>
}
