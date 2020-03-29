import { GlobalCssKeyword } from '../shared/types'

type Position = 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'

/**
 * Creates a declaration object for the **`position`** property.
 * @category Declaration function
 * @formalSyntax relative | absolute | static | fixed | sticky
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#position-property
 */
export const position = (value: Position | GlobalCssKeyword) => ({
  position: value
})
