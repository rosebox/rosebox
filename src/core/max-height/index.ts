import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type MaxHeightCSSProp = 'max-height'

type MaxHeight = LengthPercentage | 'none'

export const serializeMaxHeightValue = (
  value: MaxHeight | GlobalCssKeyword
): string =>
  isGlobalCssKeyword(value)
    ? value
    : isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

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
  maxHeight: LengthPercentage | GlobalCssKeyword | 'none'
}
