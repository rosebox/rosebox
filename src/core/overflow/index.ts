import { GlobalCssKeyword } from '../shared/types'

type OverflowKeyword = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'

type TwoOverflowKeywords =
  | 'visible hidden'
  | 'hidden visible'
  | 'visible clip'
  | 'clip visible'
  | 'visible scroll'
  | 'scroll visible'
  | 'visible auto'
  | 'auto visible'
  | 'hidden clip'
  | 'clip hidden'
  | 'hidden scroll'
  | 'scroll hidden'
  | 'hidden auto'
  | 'auto hidden'
  | 'clip scroll'
  | 'scroll clip'
  | 'clip auto'
  | 'auto clip'
  | 'scroll auto'
  | 'auto scroll'

/**
 * Creates a declaration object for the **`overflow-x`** property.
 * @category Declaration function
 * @formalSyntax visible | hidden | clip | scroll | auto
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflowX = (value: OverflowKeyword | GlobalCssKeyword) => ({
  overflowX: value,
})

export type OverflowXDeclaration = {
  overflowX: OverflowKeyword | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`overflow-y`** property.
 * @category Declaration function
 * @formalSyntax visible | hidden | clip | scroll | auto
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
 */
export const overflowY = (value: OverflowKeyword | GlobalCssKeyword) => ({
  overflowY: value,
})

export type OverflowYDeclaration = {
  overflowY: OverflowKeyword | GlobalCssKeyword
}

type OneOverflowKeyword = OverflowKeyword

/**
 * Creates a declaration object for the **`overflow`** property.
 * @category Declaration function
 * @formalSyntax [ visible | hidden | clip | scroll | auto ]{1,2}
 * @added 0.1.5
 * @implementationReference https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/#overflow-properties
 */
export const overflow = (
  value: OneOverflowKeyword | TwoOverflowKeywords | GlobalCssKeyword
) => ({
  overflow: value,
})

export type OverflowDeclaration = {
  overflow: OneOverflowKeyword | TwoOverflowKeywords | GlobalCssKeyword
}
