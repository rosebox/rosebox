import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
} from '../shared'

export const serializeTextUnderlineOffset = (
  x: LengthPercentage | 'auto' | GlobalCssKeyword
) => ({
  textUnderlineOffset: serializeAtomicValue(x),
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
