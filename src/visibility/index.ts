import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`visibility`** shorthand property.
 * @category Declaration function
 * @formalSyntax visible | hidden | collapse | inherit
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#propdef-visibility
 */

export const visibility = (
  value: 'visible' | 'hidden' | 'collapse' | GlobalCssKeyword
): { visibility: string } => ({
  visibility: value
})

export const visible = { visibility: 'visible' }
export const hidden = { visibility: 'hidden' }
export const collapse = { visibility: 'collapse' }
