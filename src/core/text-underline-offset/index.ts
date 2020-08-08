import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeLengthPercentage,
} from '../shared'

export const serializeTextUnderlineOffset = (
  x: LengthPercentage | 'auto' | GlobalCssKeyword
) => ({
  textUnderlineOffset: typeof x === 'string' ? x : serializeLengthPercentage(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TextUnderlineOffsetDeclaration = {
  /**
   * Maps to CSS's **`text-underline-position`** property
   * @category RBProperty
   */
  textUnderlineOffset: LengthPercentage | 'auto' | GlobalCssKeyword
}
