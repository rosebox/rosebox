import { serializeColor, Color } from '../color'
import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
  isLengthType,
  isPercentageType,
} from '../shared/types'
import {
  serializeLength,
  serializePercentage,
  serializeLengthPercentage,
} from '../shared/serializers'

export type BackgroundColorCSSProp = 'background-color'

export const serializeBackgroundColorValue = (
  value: Color | GlobalCssKeyword
): string => (isGlobalCssKeyword(value) ? value : serializeColor(value))

export const serializeBgPositionPropValue = (
  x:
    | [
        'left' | 'center' | 'right' | LengthPercentage,
        'top' | 'center' | 'bottom' | LengthPercentage
      ]
    | [
        'center' | ['left' | 'right', LengthPercentage],
        'center' | ['top' | 'bottom', LengthPercentage]
      ]
    | GlobalCssKeyword
): string =>
  typeof x === 'string'
    ? x
    : (x as (
        | 'left'
        | 'right'
        | 'center'
        | 'bottom'
        | 'top'
        | LengthPercentage
        | [string, LengthPercentage]
      )[]).reduce((acc, val, idx) => {
        const serializedVal =
          typeof val === 'string'
            ? val
            : isLengthType(val)
            ? acc + serializeLength(val)
            : isPercentageType(val)
            ? serializePercentage(val)
            : `${val[0]} ${serializeLengthPercentage(val[1])}`
        return acc + serializedVal + (idx === x.length - 1 ? '' : ' ')
      }, '')

/**
 * @category RBDeclarationTypeAlias
 */
export type BgPositionDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-position`** property
   * @category RBProperty
   * @formalSyntaxForValue [
   * [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]
   * | [ center | [ left | right ] <length-percentage>? ] & [ center | [ top | bottom ] <length-percentage>? ]
]
   * @added https://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-image
   */
  backgroundPosition:
    | [
        'left' | 'center' | 'right' | LengthPercentage,
        'top' | 'center' | 'bottom' | LengthPercentage
      ]
    | [
        'center' | ['left' | 'right', LengthPercentage],
        'center' | ['top' | 'bottom', LengthPercentage]
      ]
    | GlobalCssKeyword
}
