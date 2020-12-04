import {
  GlobalCssKeyword,
  LengthPercentage,
  Calculation,
  serializeAtomicValue,
  ValueOrFunc,
} from '../shared'

/**
 * @hide
 */
type PropValue = LengthPercentage | Calculation | GlobalCssKeyword | 'none'

/** @hide */


export const serializeMaxWidth = (
  x: PropValue
): { maxWidth: string } => ({
  maxWidth: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MaxWidthDeclaration = {
  /**
   * Maps to CSS's **`max-width`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | none
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-widths
   */
  maxWidth: PropValue
}

export type MaxWidthDeclarationJSS = {
  maxWidth: ValueOrFunc<PropValue>
}
