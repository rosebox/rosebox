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
type PerspectivePropValue = 'none' | Length | Calculation | GlobalCssKeyword

export const serializePerspectivePropertyValue = (
  x: PerspectivePropValue
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
  perspective: PerspectivePropValue
}

export type PerspectiveDeclarationJSS = {
  perspective: ValueOrFunc<PerspectivePropValue>
}
