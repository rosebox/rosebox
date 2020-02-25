import { GlobalCssKeyword } from '../shared/types'

type FontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

/**
 * Creates a declaration object for the **`font-weight`** property
 * @category Declaration function
 * @formalSyntax normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
 * @implentationReference https://www.w3.org/TR/css-fonts-3/#propdef-font-weight
 */
export const fontWeight = (
  value: FontWeight | GlobalCssKeyword
): { fontWeight: string | number } => ({
  fontWeight: value
})
