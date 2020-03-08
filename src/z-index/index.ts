import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`z-index`** property.
 * @category Declaration function
 * @formalSyntax auto | <integer>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-z-index
 */
export const zIndex = (value: number | 'auto' | GlobalCssKeyword) => ({
  zIndex: value
})
