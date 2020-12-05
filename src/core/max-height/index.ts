import {
  GlobalCssKeyword,
  LengthPercentage,
  Calculation,
  serializeAtomicValue,
  ValueOrFunc,
} from '../shared'

export const serializeMaxHeight = (
  x: LengthPercentage | 'none' | GlobalCssKeyword
): {
  maxHeight: string
} => {
  return {
    maxHeight: serializeAtomicValue(x),
  }
}

/** @hide */
type MaxHeightPropValue =
  | LengthPercentage
  | Calculation
  | GlobalCssKeyword
  | 'none'

/**
 * @category RBDeclarationTypeAlias
 */
export type MaxHeightDeclaration = {
  /**
   * Maps to CSS's **`max-height`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | none
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-heights
   */
  maxHeight: MaxHeightPropValue
}

export type MaxHeightDeclarationJSS = {
  maxHeight: ValueOrFunc<MaxHeightPropValue>
}
