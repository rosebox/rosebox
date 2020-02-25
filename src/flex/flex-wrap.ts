import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`flex-wrap`** property.
 * @category Declaration function
 * @formalSyntax nowrap | wrap | wrap-reverse
 * @implementationReference https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property
 */

export const flexWrap = (
  value: 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalCssKeyword
) => ({
  flexWrap: value
})
