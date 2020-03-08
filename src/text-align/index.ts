import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`text-align`** property.
 * @category Declaration function
 * @formalSyntax start | end | left | right | center | justify | match-parent | justify-all
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-align-property
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
) => ({
  textAlign: value
})
