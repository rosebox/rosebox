import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  LengthPercentage,
  WidthCalculation,
  isCalculation,
  serializeWidthCalculation,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export const serializeMaxHeight = (
  x: LengthPercentage | 'none' | GlobalCssKeyword
): {
  maxHeight: string
} => {
  return {
    maxHeight: isLengthType(x)
      ? serializeLength(x)
      : isPercentageType(x)
      ? serializePercentage(x)
      : isCalculation(x)
      ? serializeWidthCalculation(x)
      : x,
  }
}

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
  maxHeight: LengthPercentage | WidthCalculation | GlobalCssKeyword | 'none'
}
