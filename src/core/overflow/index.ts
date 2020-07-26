import { GlobalCssKeyword } from '../shared'

type OverflowKeyword = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'

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
  value:
    | OneOverflowKeyword
    | [OneOverflowKeyword, OneOverflowKeyword]
    | GlobalCssKeyword
) => ({
  overflow: Array.isArray(value) ? `${value[0]} ${value[1]}` : value,
})

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
  overflow:
    | OverflowKeyword
    | [OverflowKeyword, OverflowKeyword]
    | GlobalCssKeyword
}
