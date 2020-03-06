import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

type OverflowKeyword = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'

/**
 * Creates a declaration object for the **`overflow-x`** property.
 * @category Declaration function
 * @formalSyntax visible | hidden | clip | scroll | auto
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflowX = (
  value: OverflowKeyword | GlobalCssKeyword
): { overflowX: string } => ({
  overflowX: value
})

/**
 * Creates a declaration object for the **`overflow-y`** property.
 * @category Declaration function
 * @formalSyntax visible | hidden | clip | scroll | auto
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflowY = (
  value: OverflowKeyword | GlobalCssKeyword
): { overflowY: string } => ({
  overflowY: value
})

type Overflow =
  | OverflowKeyword
  | [OverflowKeyword]
  | [OverflowKeyword, OverflowKeyword]

const serializeOverFlow = (value: Overflow): string =>
  !Array.isArray(value)
    ? value
    : (value as OverflowKeyword[])
        .reduce((acc: any, item) => acc + ' ' + item, '')
        .trim()
/**
 * Creates a declaration object for the **`overflow`** property.
 * @category Declaration function
 * @formalSyntax [ visible | hidden | clip | scroll | auto ]{1,2}
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflow = (
  value: Overflow | GlobalCssKeyword
): { overflow: string } => ({
  overflow: isGlobalCssKeyword(value) ? value : serializeOverFlow(value)
})
