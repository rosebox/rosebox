import {
    Length,
    Percentage,
    GlobalCssKeyword,
    isLengthType,
    isPercentageType,
    isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

export type MarginTopCSSProp = 'margin-top'
export type MarginRightCSSProp = 'margin-right'
export type MarginBottomCSSProp = 'margin-bottom'
export type MarginLeftCSSProp = 'margin-left'
export type MarginCSSProp = 'margin'

type MarginSide = Length | Percentage | 'auto'

const serializeAtomicValue = (
    value: Length | Percentage | 'auto' | GlobalCssKeyword
): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value

/**
 * Creates a declaration object for the **`margin-top`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
 */
export const marginTop = (
    value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginTop: string } => ({
    marginTop: serializeAtomicValue(value),
})

export type MarginTopDeclaration = {
    /**
     * Maps to CSS's **`margin-top`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage> | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
     */
    marginTop: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`margin-right`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
 */
export const marginRight = (
    value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginRight: string } => ({
    marginRight: serializeAtomicValue(value),
})

export type MarginRightDeclaration = {
    /**
     * Maps to CSS's **`margin-right`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage> | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
     */
    marginRight: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`margin-bottom`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
 */
export const marginBottom = (
    value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginBottom: string } => ({
    marginBottom: serializeAtomicValue(value),
})

export type MarginBottomDeclaration = {
    /**
     * Maps to CSS's **`margin-bottom`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage> | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
     */
    marginBottom: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`margin-left`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
 */
export const marginLeft = (
    value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginLeft: string } => ({
    marginLeft: serializeAtomicValue(value),
})

export type MarginLeftDeclaration = {
    /**
     * Maps to CSS's **`margin-left`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage> | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
     */
    marginLeft: Length | Percentage | 'auto' | GlobalCssKeyword
}

type MarginShorthandSingleValue = MarginSide | [MarginSide]
type MarginShorthandTwoValues = [MarginSide, MarginSide]
type MarginShorthandThreeValues = [MarginSide, MarginSide, MarginSide]
type MarginShorthandFourValues = [
    MarginSide,
    MarginSide,
    MarginSide,
    MarginSide
]

type MarginShorthand =
    | MarginShorthandSingleValue
    | MarginShorthandTwoValues
    | MarginShorthandThreeValues
    | MarginShorthandFourValues

const serializeShorthandleValue = (value: MarginShorthand): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value === 'auto'
                ? value
                : (value as (Length | Percentage | 'auto')[])
                    .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
                    .trim()

/**
 * Creates a declaration object for the **`margin`** shorthand property.
 * @category Declaration function
 * @formalSyntax <‘margin-top’>{1,4}
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
 */
export const margin = (
    value: MarginShorthand | GlobalCssKeyword
): { margin: string } => ({
    margin: isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MarginDeclaration = {
    /**
     * Maps to CSS's **`margin`** property
     * @category RBProperty
     * @formalSyntaxForValue <‘margin-top’>{1,4}
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
     */
    margin: MarginShorthand | GlobalCssKeyword
}
