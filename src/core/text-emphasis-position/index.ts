import { GlobalCssKeyword, serializeDoubleBar, ValueOrFunc } from '../shared'

export const serializeTextEmphasisPosition = (
  x: PropValue
) => ({
  textEmphasisPosition: typeof x === 'string' ? x : serializeDoubleBar(x),
})

/**
 * @hide
 */
type PropValue =
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

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisPositionDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-position`** property
   * @category RBProperty
   */
  textEmphasisPosition: PropValue
}

export type TextEmphasisPositionDeclarationJSS = {
  textEmphasisPosition: ValueOrFunc<PropValue>
}
