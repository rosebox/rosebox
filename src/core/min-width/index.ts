import {
  LengthPercentage,
  GlobalCssKeyword,
  Calculation,
  serializeAtomicValue,
  ValueOrFunc,
} from '../shared'

/**
 * @hide
 */
type PropValue = LengthPercentage | Calculation | GlobalCssKeyword

export type MinWidthCSSProp = 'min-width'

export const serializeMinWidth = (x: PropValue): { minWidth: string } => ({
  minWidth: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MinWidthDeclaration = {
  /**
   * Maps to CSS's **`min-width`** property.
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width
   */
  minWidth: PropValue
}

export type MinWidthDeclarationJSS = {
  minWidth: ValueOrFunc<PropValue>
}
