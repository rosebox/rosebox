import { Color, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { GlobalCssKeyword } from '../shared'

export const serializeBackgroundColor = (type: PropType) => (
  x: Color | GlobalCssKeyword
) => ({
  [type === 'inline'
    ? 'backgroundColor'
    : 'background-color']: serializeAtomicValue(x),
})

/** @hide */
type PropValue = Color | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BgColorDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-color`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <integer>
   * @added 0.2.0
   */
  backgroundColor: PropValue
}
export type BgColorDeclarationJSS = {
  backgroundColor: ValueOrFunc<PropValue>
}
