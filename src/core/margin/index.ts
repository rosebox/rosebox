import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type MarginTopCSSProp = 'margin-top'
export type MarginRightCSSProp = 'margin-right'
export type MarginBottomCSSProp = 'margin-bottom'
export type MarginLeftCSSProp = 'margin-left'
export type MarginCSSProp = 'margin'

type MarginValue = Length | Percentage | 'auto'

const serializeAtomicValue = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

export const serializeMarginTopValue = serializeAtomicValue

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

export const serializeMarginRightValue = serializeAtomicValue

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

export const serializeMarginBottomValue = serializeAtomicValue

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

export const serializeMarginLeftValue = serializeAtomicValue

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

type MarginShorthandSingleValue = MarginValue | [MarginValue]
type MarginShorthandTwoValues = [MarginValue, MarginValue]
type MarginShorthandThreeValues = [MarginValue, MarginValue, MarginValue]
type MarginShorthandFourValues = [
  MarginValue,
  MarginValue,
  MarginValue,
  MarginValue
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

export const serializeMarginValue = (
  value: MarginShorthand | GlobalCssKeyword
): string =>
  isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value)

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
  margin: MarginValue | [MarginValue, MarginValue] | GlobalCssKeyword
}
