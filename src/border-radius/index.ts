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
 * @formalSyntax <line-width>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-radius
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
 * @formalSyntax <line-width>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-radius
 */
export const borderBottomRightRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderBottomRightRadius: string } => ({
  borderBottomRightRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})

/**
 * Creates a declaration object for the **`border-top-left-radius`** property.
 * @category Declaration function
 * @formalSyntax <line-width>
 * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-radius
 */
export const borderTopLeftRadius = (
  value: BorderCornerRadius | GlobalCssKeyword
): { borderTopLeftRadius: string } => ({
  borderTopLeftRadius: isGlobalCssKeyword(value)
    ? value
    : serializeBorderColor(value)
})
