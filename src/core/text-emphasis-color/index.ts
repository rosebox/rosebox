import { Color, serializeAtomicValue, ValueOrFunc } from '../shared'
import { GlobalCssKeyword } from '../shared'

export const serializeTextEmphasisColor = (x: Color | GlobalCssKeyword) => ({
  textEmphasisColor: serializeAtomicValue(x),
})

/** @hide */
type PropValue = Color | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisColorDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-color`** property
   * @category RBProperty
   */
  textEmphasisColor: PropValue
}

export type TextEmphasisColorDeclarationJSS = {
  textEmphasisColor: ValueOrFunc<PropValue>
}
