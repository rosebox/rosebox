import { GlobalCssKeyword, Length } from '../shared'
import { serializeLength } from '../shared'

export const serializePerspectivePropertyValue = (
  x: 'none' | Length | GlobalCssKeyword
): string => (typeof x === 'string' ? x : serializeLength(x))

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveDeclaration = {
  /**
   * Maps to CSS's **`perspective`** property
   * @category RBProperty
   */
  perspective: 'none' | Length | GlobalCssKeyword
}
