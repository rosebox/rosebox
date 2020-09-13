import { Color, serializeAtomicValue } from '../shared'
import { GlobalCssKeyword } from '../shared'

export const serializeTextEmphasisColor = (x: Color | GlobalCssKeyword) => ({
  textEmphasisColor: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisColorDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-color`** property
   * @category RBProperty
   */
  textEmphasisColor: Color | GlobalCssKeyword
}
