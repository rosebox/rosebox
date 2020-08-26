import { GlobalCssKeyword, serializeDoubleBar } from '../shared'
import { DoubleBar4 } from '../shared/types'

export const serializeTextEmphasisPosition = (
  x: DoubleBar4<'spaces', 'punctuation', 'symbols', 'narrow'> | GlobalCssKeyword
) => ({
  textEmphasisPosition: typeof x === 'string' ? x : serializeDoubleBar(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisPositionDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-position`** property
   * @category RBProperty
   */
  textEmphasisPosition:
    | 'over'
    | 'under'
    | ['over']
    | ['under']
    | ['over', 'right']
    | ['right', 'over']
    | ['over', 'left']
    | ['left', 'over']
    | ['under', 'right']
    | ['right', 'under']
    | ['under', 'left']
    | ['left', 'under']
    | GlobalCssKeyword
}
