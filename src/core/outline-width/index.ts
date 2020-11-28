import { Length, serializeAtomicValue } from '../shared'
import { GlobalCssKeyword } from '../shared'


/**
 * @hide
 */
type OutlineValue = Length | 'thin' | 'medium' | 'thick' | GlobalCssKeyword

export const serializeOutlineWidth = (
  x: OutlineValue
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
  outlineWidth: OutlineValue
}
