import {
  Percentage,
  Length,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

export type FontSizeCSSProp = 'font-size'

type RelativeSizeKeyword = 'larger' | 'smaller'

type AbsoluteSizeKeyword =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'

export const serializeFontSize = (
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
    : value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSizeDeclaration = {
  /**
   * Maps to CSS's **`font-size`** property
   * @category RBProperty
   * @formalSyntaxForValue <absolute-size> | <relative-size> | <length-percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-size-prop
   */
  fontSize:
    | RelativeSizeKeyword
    | AbsoluteSizeKeyword
    | Length
    | Percentage
    | GlobalCssKeyword
}
