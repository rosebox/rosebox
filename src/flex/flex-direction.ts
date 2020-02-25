import { GlobalCssKeyword } from '../shared/types'

/**
 * Formal syntax: row | row-reverse | column | column-reverse
 * @skip
 * */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

/**
 * Creates a declaration object for the **`flex-direction`** property.
 * @category Declaration function
 * @formalSyntax row | row-reverse | column | column-reverse
 * @implementationReference https://www.w3.org/TR/css-flexbox-1/#propdef-flex-direction
 */
export const flexDirection = (value: FlexDirection | GlobalCssKeyword) => ({
  flexDirection: value
})
