import { GlobalCssKeyword } from '../shared'
import { Position, serializePosition } from '../shared'

export const serializeBgPositionPropValue = (
  x: Position | Position[]
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x))
    return x.reduce(
      (acc, val, idx) =>
        acc + serializePosition(val) + (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializePosition(x)
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BgPositionDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-position`** property
   * @category RBProperty
]
   * @added https://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-image
   */
  backgroundPosition: Position | Position[] | GlobalCssKeyword
}
