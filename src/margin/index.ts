import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

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
 * @implentationReference https://www.w3.org/TR/css-box-3/#margin-physical
 */
export const marginTop = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { mraginTop: string } => ({
  mraginTop: serializeAtomicValue(value)
})

/**
 * Creates a declaration object for the **`margin-right`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @implentationReference https://www.w3.org/TR/css-box-3/#margin-physical
 */
export const marginRight = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginRight: string } => ({
  marginRight: serializeAtomicValue(value)
})
/**
 * Creates a declaration object for the **`margin-bottom`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @implentationReference https://www.w3.org/TR/css-box-3/#margin-physical
 */
export const marginBottom = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginBottom: string } => ({
  marginBottom: serializeAtomicValue(value)
})

/**
 * Creates a declaration object for the **`margin-left`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage> | auto
 * @implentationReference https://www.w3.org/TR/css-box-3/#margin-physical
 */
export const marginLeft = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { marginLeft: string } => ({
  marginLeft: serializeAtomicValue(value)
})

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
 * @implentationReference https://www.w3.org/TR/css-box-3/#margin-shorthand
 */
export const margin = (
  value: MarginShorthand | GlobalCssKeyword
): { margin: string } => ({
  margin: isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value)
})
