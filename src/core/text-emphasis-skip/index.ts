import { GlobalCssKeyword, serializeDoubleBar } from '../shared'
import { DoubleBar4 } from '../shared/types'

export const serializeTextEmphasisSkip = (
  x: DoubleBar4<'spaces', 'punctuation', 'symbols', 'narrow'> | GlobalCssKeyword
) => ({
  textEmphasisSkip: typeof x === 'string' ? x : serializeDoubleBar(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisSkipDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-skip`** property
   * @category RBProperty
   */
  textEmphasisSkip:
    | DoubleBar4<'spaces', 'punctuation', 'symbols', 'narrow'>
    | GlobalCssKeyword
}
