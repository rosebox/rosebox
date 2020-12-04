import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'none'
| 'start'
| 'end'
| 'left'
| 'right'
| 'center'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextGroupAlignDeclaration = {
  /**
   * Maps to CSS's **`text-group-align`** property
   * @category RBProperty
   */
  textGroupAlign: PropValue
}

export type TextGroupAlignDeclarationJSS = {
  textGroupAlign: ValueOrFunc<PropValue>
}
