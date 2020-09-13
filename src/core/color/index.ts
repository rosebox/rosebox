import { Color, getSerializer, GlobalCssKeyword } from '../shared'

export const serializeColor = (
  x: Color | GlobalCssKeyword
): {
  color: string
} => ({
  color: typeof x === 'string' ? x : getSerializer(x)(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type ColorDeclaration = {
  /**
   * Maps to CSS's **`color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/REC-css-color-3-20180619/#color0
   */
  color: Color | GlobalCssKeyword
}
