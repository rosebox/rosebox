import { Color, serializeColorValue } from '../color'
import { GlobalCssKeyword } from '../shared'

export const serializeTextEmphasisColor = (x: Color | GlobalCssKeyword) => ({
  textEmphasisColor: typeof x === 'string' ? x : serializeColorValue(x),
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
