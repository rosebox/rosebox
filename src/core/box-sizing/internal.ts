import { GlobalCssKeyword } from '../shared/types'

/**
 * @skip
 */
type BoxSizing = 'content-box' | 'border-box'

/**
 * @experimental
 */
export const boxContent = { display: 'content-box' } as const

/**
 * @experimental
 */
export const boxBorder = { display: 'border-box' } as const

/**
 * Creates a declaration object for the **`box-sizing`** property.
 * @category Declaration function
 * @formalSyntax content-box | border-box
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-box-sizing
 */
export const boxSizing = (value: BoxSizing | GlobalCssKeyword) => ({
  boxSizing: value,
})

export type BoxSizingDeclaration = {
  /**
   * Maps to CSS's **`box-sizing`** property
   * @category Property
   * @formalSyntaxForValue content-box | border-box
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-box-sizing
   */
  boxSizing: BoxSizing | GlobalCssKeyword
}
