import {
  Percentage,
  Length,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

type RelativeSizeKeyword = 'larger' | 'smaller'

type AbsoluteSizeKeyword =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'

/**
 * Creates a declaration object for the **`font-size`** property.
 * @category Declaration function
 * @formalSyntax <absolute-size> | <relative-size> | <length-percentage>
 * @implentationReference https://www.w3.org/TR/css-fonts-4/#font-size-prop
 */
export const fontSize = (
  value:
    | RelativeSizeKeyword
    | AbsoluteSizeKeyword
    | Length
    | Percentage
    | GlobalCssKeyword
): { fontSize: string } => ({
  fontSize: isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value
})
