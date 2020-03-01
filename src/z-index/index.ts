import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`z-index`** property.
 * @category Declaration function
 * @formalSyntax auto | <integer>
 * @implentationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/
 */
export const zIndex = (
  value: number | 'auto' | GlobalCssKeyword
): { zIndex: string | number } => ({
  zIndex: value
})
