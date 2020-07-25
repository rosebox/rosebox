import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  Width,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type HeightCSSProp = 'height'

export const serializeHeight = (
  value: Width | GlobalCssKeyword
): {
  height: string
} => ({
  height: isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type HeightDeclaration = {
  /**
   * Maps to CSS's **`height`** property
   * @category RBProperty
   * @formalSyntaxForValue <length> | <percentage> | auto
   * @added 0.2.0
   * @implementationReference https://drafts.csswg.org/css2/visudet.html#propdef-height
   */
  height: Width | GlobalCssKeyword
}
