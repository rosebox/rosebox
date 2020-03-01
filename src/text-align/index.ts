import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`text-align`** property.
 * @category Declaration function
 * @formalSyntax start | end | left | right | center | justify | match-parent | justify-all
 * @implentationReference https://www.w3.org/TR/css-text-3/#text-align-property
 */
export const textAlign = (
  value:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
    | 'justify-all'
    | GlobalCssKeyword
): { textAlign: string } => ({
  textAlign: value
})
