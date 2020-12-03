import {
  GlobalCssKeyword,
  Length,
  serializeAtomicValue,
  Calculation,
  ValueOrFunc,
} from '../shared'

/**
 * @hide
 */
type PropValue = 'none' | Length | Calculation | GlobalCssKeyword

export const serializePerspectivePropertyValue = (
  x: PropValue
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
  perspective: PropValue
}

export type PerspectiveDeclarationJS = {
  perspective: ValueOrFunc<PropValue>
}
