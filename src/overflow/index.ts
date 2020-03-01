import { GlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`overflow-x`** property.
 * @category Declaration function
 * @formalSyntax visible | hidden | clip | scroll | auto
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflowX = (
  value: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | GlobalCssKeyword
): { overflowX: string } => ({
  overflowX: value
})
