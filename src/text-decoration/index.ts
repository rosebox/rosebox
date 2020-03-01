import { GlobalCssKeyword } from '../shared/types'

type SingleValue = 'none' | 'underline' | 'overline' | 'line-through' | 'blink'

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

type TextDecorationLine = SingleValue | TwoValues | ThreeValues | FourValues

/**
 * Creates a declaration object for the **`text-decoration-line`** property.
 * @category Declaration function
 * @formalSyntax none | [ underline || overline || line-through || blink ]
 * @implentationReference https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/#propdef-text-decoration-line
 */
export const textDecorationLine = (
  value: TextDecorationLine | GlobalCssKeyword
): { textDecorationLine: string } => ({
  textDecorationLine: value
})
