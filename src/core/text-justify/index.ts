import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'auto'
| 'none'
| 'inter-word'
| 'inter-character'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextJustifyDeclaration = {
  /**
   * Maps to CSS's **`text-justify`** property
   * @category RBProperty
   */
  textJustify: PropValue
}

export type TextJustifyDeclarationJSS = {
  textJustify: ValueOrFunc<PropValue>
}
