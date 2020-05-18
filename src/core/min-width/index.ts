import {
    Length,
    Percentage,
    isLengthType,
    isPercentageType,
    GlobalCssKeyword,
    isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

export type MinWidthCSSProp = 'min-width'


export const serializeMinWidthValue = (
    value: Length | Percentage | GlobalCssKeyword
): string => isGlobalCssKeyword(value)
        ? value
        : isLengthType(value)
            ? serializeLength(value)
            : isPercentageType(value)
                ? serializePercentage(value)
                : value

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
    minWidth: Length | Percentage | GlobalCssKeyword
}
