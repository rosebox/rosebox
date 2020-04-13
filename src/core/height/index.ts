import {
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
  Width,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

/**
 * Creates a declaration object for the **`height`** property.
 * @category Declaration function
 * @formalSyntaxForValue <length> | <percentage> | auto
 * @added 0.1.4
 * @implentationReference https://drafts.csswg.org/css2/visudet.html#propdef-height
 */
export const height = (value: Width | GlobalCssKeyword) => ({
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
