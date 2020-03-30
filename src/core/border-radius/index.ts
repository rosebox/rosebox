import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage
} from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

export type BorderCornerRadius =
  | LengthPercentage
  | [LengthPercentage]
  | [LengthPercentage, LengthPercentage]

const serializeBorderColor = (value: BorderCornerRadius): string =>
  !Array.isArray(value)
    ? serializeLengthPercentage(value)
    : (value as LengthPercentage[])
        .reduce(
          (acc: any, item) => acc + ' ' + serializeLengthPercentage(item),
          ''
        )
        .trim()

/**
 * Creates a declaration object for the **`border-top-right-radius`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage>{1,2}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
 */
export const borderTopRightRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderTopRightRadius: string } => ({
  borderTopRightRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})

/**
 * Creates a declaration object for the **`border-bottom-right-radius`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage>{1,2}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
 */
export const borderBottomRightRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderBottomRightRadius: string } => ({
  borderBottomRightRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})

/**
 * Creates a declaration object for the **`border-bottom-left-radius`** property.
 * @category Declaration function
 * @formalSyntax <length-percentage>{1,2}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
 */
export const borderBottomLeftRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderBottomLeftRadius: string } => ({
  borderBottomLeftRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})

/**
 * Creates a declaration object for the **`border-top-left-radius`** property.
 * @category Declaration function
 * @formalSyntax	<length-percentage>{1,2}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
 */
export const borderTopLeftRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderTopLeftRadius: string } => ({
  borderTopLeftRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})

type RadiusTuple =
  | [LengthPercentage]
  | [LengthPercentage, LengthPercentage]
  | [LengthPercentage, LengthPercentage, LengthPercentage]
  | [LengthPercentage, LengthPercentage, LengthPercentage, LengthPercentage]

type OneRadius = LengthPercentage | RadiusTuple

type TwoRadius = [RadiusTuple, RadiusTuple]

const serializRadiusTuple = (value: RadiusTuple): string =>
  (value as LengthPercentage[])
    .reduce((acc: any, item) => acc + ' ' + serializeLengthPercentage(item), '')
    .trim()

const serializeTwoRadius = (value: TwoRadius): string =>
  (value as RadiusTuple[])
    .reduce(
      (acc: any, item, idx: number) =>
        idx === value.length - 1
          ? acc + serializRadiusTuple(item)
          : acc + serializRadiusTuple(item) + ' / ',
      ''
    )
    .trim()

const serializeBorderRadius = (value: OneRadius | TwoRadius) =>
  !Array.isArray(value)
    ? serializeLengthPercentage(value)
    : !Array.isArray(value[0])
    ? serializRadiusTuple(value as RadiusTuple)
    : serializeTwoRadius(value as TwoRadius)

/**
 * Creates a declaration object for the **`border-radius`** property.
 * @category Declaration function
 * @formalSyntax	<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
 */
export const borderRadius = (
  value: OneRadius | TwoRadius | GlobalCssKeyword
): { borderRadius: string } => ({
  borderRadius: isGlobalCssKeyword(value) ? value : serializeBorderRadius(value)
})
