import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isGlobalCssKeyword
} from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

/**
 * Creates a declaration object for the **`top`** property.
 * @category Declaration function
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const top = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { top: string } => ({
  top:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
      ? value
      : serializeLengthPercentage(value)
})

/**
 * Creates a declaration object for the **`right`** property.
 * @category Declaration functionn
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference  https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const right = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { right: string } => ({
  right:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
      ? value
      : serializeLengthPercentage(value)
})

/**
 * Creates a declaration object for the **`bottom`** property.
 * @category Declaration function
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const bottom = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { bottom: string } => ({
  bottom:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
      ? value
      : serializeLengthPercentage(value)
})

/**
 * Creates a declaration object for the **`left`** property.
 * @category Declaration functionn
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const left = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { left: string } => ({
  left:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
      ? value
      : serializeLengthPercentage(value)
})
