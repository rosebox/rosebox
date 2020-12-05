import { Color, serializeAtomicValue, ValueOrFunc } from '../shared'
import { GlobalCssKeyword } from '../shared'


export const serializeOutlineColor = (
  x: Color | 'invert' | GlobalCssKeyword
): {
  outlineColor: string
} => ({
  outlineColor: serializeAtomicValue(x)
})

/** @hide */
type OutlineColorPropvalue = Color | 'invert' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineColorDeclaration = {
  /**
   * Maps to CSS's **`outline-color`** property
   * @category RBProperty
   */
  outlineColor: OutlineColorPropvalue
}

export type OutlineColorDeclarationJSS = {
  outlineColor: ValueOrFunc<OutlineColorPropvalue>
}
