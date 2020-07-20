import { GlobalCssKeyword } from '../../shared'

export const serializerOrder = (value: number | GlobalCssKeyword) => value

export type OrderDeclaration = {
  /**
   * Maps to CSS's **`order`** property
   * @category RBProperty
   * @formalSyntaxForValue <integer>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/css-flexbox-1/#order-property
   */
  order: number | GlobalCssKeyword
}
