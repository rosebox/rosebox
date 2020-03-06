import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

const serializeAtomicValue = (
  value: Length | Percentage | GlobalCssKeyword
): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the `padding-top` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/css-box-3/#padding-physical
 */
export const paddingTop = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingTop: string } => ({
  paddingTop: serializeAtomicValue(value)
})

/**
 * Creates a declaration object for the `padding-right` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/css-box-3/#padding-physical
 */
export const paddingRight = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingRight: string } => ({
  paddingRight: serializeAtomicValue(value)
})

/**
 * Creates a declaration object for the `padding-bottom` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/css-box-3/#padding-physical
 */
export const paddingBottom = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingBottom: string } => ({
  paddingBottom: serializeAtomicValue(value)
})

/**
 * Creates a declaration object for the `padding-left` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/css-box-3/#padding-physical
 */
export const paddingLeft = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingLeft: string } => ({
  paddingLeft: serializeAtomicValue(value)
})

type PaddingShorthandValue =
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

const serializeShorthandleValue = (value: PaddingShorthandValue): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : isGlobalCssKeyword(value)
    ? value
    : (value as (Length | Percentage)[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

/**
 * Creates a declaration object for the **`padding`** shorthand property.
 * @category Declaration function
 * @formalSyntax <padding-top’>{1,4}
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/css-box-3/#padding-shorthand
 */
export const padding = (
  value: PaddingShorthandValue | GlobalCssKeyword
): { padding: string } => ({
  padding: isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value)
})
