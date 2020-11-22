import { Color, serializeColorValue } from '../shared'
import { GlobalCssKeyword } from '../shared'


export const serializeOutlineColor = (
  x: Color | 'invert' | GlobalCssKeyword
): {
  outlineColor: string
} => ({
  outlineColor: typeof x === 'string' ? x : serializeColorValue(x) 
})

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineColorDeclaration = {
  /**
   * Maps to CSS's **`outline-color`** property
   * @category RBProperty
   */
  outlineColor: Color | 'invert' | GlobalCssKeyword
}
