import { getSerializer, GlobalCssKeyword } from '../shared'
import { Position, serializePosition } from '../shared'

export const serializeBgPositionPropValue = (
  x: Position | Position[] | GlobalCssKeyword
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x))
    return x.reduce(
      (acc, val, idx) =>
        acc + getSerializer(val)(val) + (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializePosition(x)
}

export const serializeBackgroundPosition = (
  x: Position | Position[] | GlobalCssKeyword
): {
  backgroundPosition: string
} => ({
  backgroundPosition: serializeBgPositionPropValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BgPositionDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-position`** property
   * @category RBProperty
   */
  backgroundPosition: Position | Position[] | GlobalCssKeyword
}
