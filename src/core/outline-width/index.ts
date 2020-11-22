import { Length, serializeLength } from '../shared'
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
  outlineWidth: typeof x === 'string' ? x : serializeLength(x) 
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
