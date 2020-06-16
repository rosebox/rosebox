import { GlobalCssKeyword, Length } from '../shared/types'
import { serializeLength } from '../shared/serializers'

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
