import {
  GlobalCssKeyword,
  Length,
  serializeAtomicValue,
  WidthCalculation,
} from '../shared'

/**
 * @hide
 */
type Perspective = 'none' | Length | WidthCalculation | GlobalCssKeyword

export const serializePerspectivePropertyValue = (
  x: Perspective
): { perspective: string } => ({
  perspective: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveDeclaration = {
  /**
   * Maps to CSS's **`perspective`** property
   * @category RBProperty
   */
  perspective: Perspective
}
