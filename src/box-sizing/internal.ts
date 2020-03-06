import { GlobalCssKeyword } from '../shared/types'

/**
 * @skip
 */
type BoxSizing = 'content-box' | 'border-box'

/**
 * Creates a declaration object for the **`box-sizing`** property.
 * @category Declaration function
 * @formalSyntax content-box | border-box
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-box-sizing
 */
export const boxSizing = (value: BoxSizing | GlobalCssKeyword) => ({
  boxSizing: value
})
