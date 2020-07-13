import { GlobalCssKeyword } from '../shared'

export type OverflowXCSSProp = 'overflow-x'
export type OverflowYCSSProp = 'overflow-y'
export type OverflowCSSProp = 'overflow'

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

export const serializeOverflowX = (value: OverflowKeyword | GlobalCssKeyword) =>
  value

export type OverflowXDeclaration = {
  /**
   * Maps to CSS's **`overflow-x`** property
   * @category RBProperty
   * @formalSyntaxForValue visible | hidden | clip | scroll | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
   */
  overflowX: OverflowKeyword | GlobalCssKeyword
}

export const serializeOverflowY = (value: OverflowKeyword | GlobalCssKeyword) =>
  value

export type OverflowYDeclaration = {
  /**
   * Maps to CSS's **`overflow-y`** property
   * @category RBProperty
   * @formalSyntaxForValue visible | hidden | clip | scroll | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
   */
  overflowY: OverflowKeyword | GlobalCssKeyword
}

type OneOverflowKeyword = OverflowKeyword

export const serializeOverflow = (
  value: OneOverflowKeyword | TwoOverflowKeywords | GlobalCssKeyword
) => value

/**
 * @category RBDeclarationTypeAlias
 */
export type OverflowDeclaration = {
  /**
   * Maps to CSS's **`overflow`** property
   * @category RBProperty
   * @formalSyntaxForValue visible | hidden | clip | scroll | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
   */
  overflow: OneOverflowKeyword | TwoOverflowKeywords | GlobalCssKeyword
}
