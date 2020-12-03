import { GlobalCssKeyword, ValueOrFunc } from '../shared'

type TextUnderlinePosition =
  | 'auto'
  | 'from-font'
  | 'under'
  | 'left'
  | 'right'
  | ['from-font', 'left']
  | ['from-font', 'right']
  | ['under', 'left']
  | ['under', 'right']
  | ['left', 'from-font']
  | ['left', 'under']
  | ['right', 'from-font']
  | ['right', 'under']

export const serializeTextUnderlinePosition = (
  x: TextUnderlinePosition | GlobalCssKeyword
) => ({
  textUnderlinePosition: typeof x === 'string' ? x : `${x[0]} ${x[1]}`,
})

/** @hide */
type PropValue = TextUnderlinePosition | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextUnderlinePositionDeclaration = {
  /**
   * Maps to CSS's **`text-underline-position`** property
   * @category RBProperty
   */
  textUnderlinePosition: PropValue
}

export type TextUnderlinePositionDeclarationJSS = {
  textUnderlinePosition: ValueOrFunc<PropValue>
}
