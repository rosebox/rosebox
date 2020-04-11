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
 * @formalSyntax <length> | <percentage> | auto
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

export type HeightDeclaration = {
  height: Width | GlobalCssKeyword
}
