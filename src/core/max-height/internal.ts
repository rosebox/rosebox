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

const serializeMaxHeight = (value: MaxHeight): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value

/**
 * Creates a declaration object for the **`max-height`** property.
 * @category Declaration function
 * @formalSyntaxForValue <length> | <percentage> | none
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#min-max-heights
 */
export const maxHeight = (
    value: Length | Percentage | GlobalCssKeyword | 'none'
): { maxHeight: string } => ({
    maxHeight: isGlobalCssKeyword(value) ? `${value}` : serializeMaxHeight(value),
})

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
