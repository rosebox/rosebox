import {
    Length,
    Percentage,
    isLengthType,
    isPercentageType,
    GlobalCssKeyword,
    isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

export type MaxHeightCSSProp = 'max-height'

type MaxHeight = Length | Percentage | 'none'

export const serializeMaxHeightValue = (value: MaxHeight | GlobalCssKeyword): string =>
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
    maxHeight: Length | Percentage | GlobalCssKeyword | 'none'
}
