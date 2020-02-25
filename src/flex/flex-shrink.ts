import { ShrinkGrow } from './shared/types'
import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`flex-shrink`** property.
 * @category Declaration function
 * @formalSyntax <number>
 * @implementationReference https://www.w3.org/TR/css-flexbox-1/#propdef-flex-shrink
 */

export const flexShrink = (value: ShrinkGrow | GlobalCssKeyword) => ({
  flexShrink: value
})
