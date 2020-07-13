import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { Color, serializeColor, isColor } from '../color'

export type TextDecorationCSSProp = 'text-decoration'

type OneValue = 'none' | 'underline' | 'overline' | 'line-through' | 'blink'

type TwoValues =
  | 'underline overline'
  | 'underline line-through'
  | 'underline blink'
  | 'overline underline'
  | 'overline line-through'
  | 'overline blink'
  | 'line-through underline'
  | 'line-through overline'
  | 'line-through blink'
  | 'blink underline'
  | 'blink overline'
  | 'blink line-through'

type ThreeValues =
  | 'underline overline line-through'
  | 'underline line-through overline'
  | 'underline overline blink'
  | 'underline blink overline'
  | 'underline line-through blink'
  | 'underline blink line-through'
  | 'overline underline line-through'
  | 'overline line-through underline'
  | 'overline underline blink'
  | 'overline blink underline'
  | 'overline line-through blink'
  | 'overline blink line-through'
  | 'line-through underline overline'
  | 'line-through overline underline'
  | 'line-through underline blink'
  | 'line-through blink underline'
  | 'line-through overline blink'
  | 'line-through blink overline'
  | 'blink underline overline'
  | 'blink overline underline'
  | 'blink underline line-through'
  | 'blink line-through underline'
  | 'blink overline line-through'
  | 'blink line-through overline'

type FourValues =
  | 'underline overline line-through blink'
  | 'underline overline blink line-through'
  | 'underline line-through overline blink'
  | 'underline line-through blink overline'
  | 'underline blink overline line-through'
  | 'underline blink line-through overline'
  | 'overline underline line-through blink'
  | 'overline underline blink line-through'
  | 'overline line-through underline blink'
  | 'overline line-through blink underline'
  | 'overline blink underline line-through'
  | 'overline blink line-through underline'
  | 'line-through underline overline blink'
  | 'line-through underline blink overline'
  | 'line-through overline underline blink'
  | 'line-through overline blink underline'
  | 'line-through blink underline overline'
  | 'line-through blink overline underline'
  | 'blink underline overline line-through'
  | 'blink underline line-through overline'
  | 'blink overline underline line-through'
  | 'blink overline line-through underline'
  | 'blink line-through underline overline'
  | 'blink line-through overline underline'

type TextDecorationLine = OneValue | TwoValues | ThreeValues | FourValues

/**
 * Creates a declaration object for the **`text-decoration-line`** property.
 * @category Declaration function
 * @formalSyntax none | [ underline || overline || line-through || blink ]
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/#propdef-text-decoration-line
 */
export const textDecorationLine = (
  value: TextDecorationLine | GlobalCssKeyword
): { textDecorationLine: string } => ({
  textDecorationLine: value,
})

/**
 * Creates a declaration object for the **`text-decoration-color`** property.
 * @category Declaration function
 * @formalSyntax <color>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/#text-decoration-color-property
 */
export const textDecorationColor = (
  value: Color | GlobalCssKeyword
): { textDecorationColor: string } => ({
  textDecorationColor: isGlobalCssKeyword(value)
    ? value
    : serializeColor(value),
})

type TextDecorationStyle =
  | 'solid'
  | 'double'
  | 'dotted'
  | 'dashed'
  | 'wavy'
  | 'GlobalCssKeyword'

/**
 * Creates a declaration object for the **`text-decoration-style`** property.
 * @category Declaration function
 * @formalSyntax solid | double | dotted | dashed | wavy
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/#text-decoration-style-property
 */
export const textDecorationStyle = (
  value: 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy' | GlobalCssKeyword
): { textDecorationStyle: string } => ({
  textDecorationStyle: value,
})

type TextDecorationSingleValue =
  | Color
  | TextDecorationStyle
  | TextDecorationLine
  | [Color | TextDecorationLine | TextDecorationStyle]

type TextDecorationTwoValues =
  | [Color, TextDecorationStyle]
  | [TextDecorationStyle, Color]
  | [Color, TextDecorationLine]
  | [TextDecorationLine, Color]
  | [TextDecorationLine, TextDecorationStyle]
  | [TextDecorationStyle, TextDecorationLine]

type TextDecorationThreeValues =
  | [Color, TextDecorationStyle, TextDecorationLine]
  | [Color, TextDecorationLine, TextDecorationStyle]
  | [TextDecorationLine, Color, TextDecorationStyle]
  | [TextDecorationLine, TextDecorationStyle, Color]
  | [TextDecorationStyle, Color, TextDecorationLine]
  | [TextDecorationStyle, TextDecorationLine, Color]

type TextDecoration =
  | TextDecorationSingleValue
  | TextDecorationTwoValues
  | TextDecorationThreeValues

const serializeShorthandleValue = (value: TextDecoration): string =>
  !Array.isArray(value)
    ? isColor(value)
      ? serializeColor(value)
      : value
    : (value as (Color | TextDecorationStyle | TextDecorationLine)[])
        .reduce(
          (acc: any, item) =>
            acc + ' ' + (isColor(item) ? serializeColor(item as Color) : item),
          ''
        )
        .trim()

export const serializeTextDecorationValue = (
  value: TextDecoration | GlobalCssKeyword
): string =>
  isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value)

/**
 * @category RBDeclarationTypeAlias
 */
export type TextDecorationDeclaration = {
  /**
   * Maps to CSS's **`text-decoration`** property
   * @category RBProperty
   * @formalSyntaxForValue '<text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/#text-decoration-property
   */
  textDecoration: TextDecoration | GlobalCssKeyword
}
