import { Width, GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Calculation } from '../shared'

export const serializeWidth = (
  x: Width | Calculation | GlobalCssKeyword
) => ({
  width: serializeAtomicValue(x),
})

/** @hide */
type PropValue = Width | Calculation | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WidthDeclaration = {
  /**
   * Maps to CSS's **`width`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | auto
   * @added 0.2.0
   * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-width
   */
  width: PropValue
}

export type WidthDeclarationJSS = {
  width: PropValue | ValueOrFunc<PropValue>
}