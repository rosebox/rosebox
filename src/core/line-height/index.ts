import {
    GlobalCssKeyword,
    isLengthType,
    isPercentageType,
    Percentage,
    Length,
} from '../shared/types'

import { serializeLength, serializePercentage } from '../shared/serializers'

export type LineHeightCSSProp = 'line-height'

export const serializeLineHeight = (
    value: 'normal' | number | Length | Percentage | GlobalCssKeyword
): string | number => isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value

/**
 * @category RBDeclarationTypeAlias
 */
export type LineHeightDeclaration = {
    /**
     * Maps to CSS's **`line-height`** property
     * @category RBProperty
     * @formalSyntaxForValue normal | <number> | <length> | <percentage> | inherit
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
     */
    lineHeight: 'normal' | number | Length | Percentage | GlobalCssKeyword
}
