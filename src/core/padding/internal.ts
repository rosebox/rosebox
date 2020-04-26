import {
    Length,
    Percentage,
    GlobalCssKeyword,
    isLengthType,
    isPercentageType,
    isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

export type PaddingTopCSSProp = 'padding-top'
export type PaddingRightCSSProp = 'padding-right'
export type PaddingBottomCSSProp = 'padding-bottom'
export type PaddingLeftCSSProp = 'padding-left'
export type PaddingCSSProp = 'padding'

const serializeAtomicValue = (
    value: Length | Percentage | GlobalCssKeyword
): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value

export const serializePaddingTopValue = serializeAtomicValue

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingTopDeclaration = {
    /**
     * Maps to CSS's **`padding-top`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
     */
    paddingTop: Length | Percentage | GlobalCssKeyword
}

export const serializePaddingRightValue = serializeAtomicValue

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingRightDeclaration = {
    /**
     * Maps to CSS's **`padding-right`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
     */
    paddingRight: Length | Percentage | GlobalCssKeyword
}

export const serializePaddingBottomValue = serializeAtomicValue

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingBottomDeclaration = {
    /**
     * Maps to CSS's **`padding-bottom`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
     */
    paddingBottom: Length | Percentage | GlobalCssKeyword
}

export const serializePaddingLeftValue = serializeAtomicValue

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingLeftDeclaration = {
    /**
     * Maps to CSS's **`padding-left`** property
     * @category RBProperty
     * @formalSyntaxForValue <length-percentage>
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
     */
    paddingLeft: Length | Percentage | GlobalCssKeyword
}

type PaddingShorthand =
    | Length
    | Percentage
    | [Length | Percentage]
    | [Length | Percentage, Length | Percentage]
    | [Length | Percentage, Length | Percentage, Length | Percentage]
    | [
        Length | Percentage,
        Length | Percentage,
        Length | Percentage,
        Length | Percentage
    ]

const serializeShorthandleValue = (value: PaddingShorthand): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : isGlobalCssKeyword(value)
                ? value
                : (value as (Length | Percentage)[])
                    .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
                    .trim()


export const serializePaddingValue = (
    value: PaddingShorthand | GlobalCssKeyword
): string => isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value)

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingDeclaration = {
    /**
     * Maps to CSS's **`padding`** property
     * @category RBProperty
     * @formalSyntaxForValue <padding-top’>{1,4}
     * @added 0.2.0
     * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
     */
    padding: PaddingShorthand | GlobalCssKeyword
}
