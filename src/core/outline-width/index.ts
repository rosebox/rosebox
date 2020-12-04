import { Length, serializeAtomicValue, ValueOrFunc } from '../shared'
import { GlobalCssKeyword } from '../shared'


/**
 * @hide
 */
type PropValue = Length | 'thin' | 'medium' | 'thick' | GlobalCssKeyword

export const serializeOutlineWidth = (
  x: PropValue
): {
  outlineWidth: string
} => ({
  outlineWidth: serializeAtomicValue(x)
})

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineWidthDeclaration = {
  /**
   * Maps to CSS's **`outline-width`** property
   * @category RBProperty
   */
  outlineWidth: PropValue
}

export type OutlineWidthDeclarationJSS = {
  /**
   * Maps to CSS's **`outline-width`** property
   * @category RBProperty
   */
  outlineWidth: ValueOrFunc<PropValue>
}
