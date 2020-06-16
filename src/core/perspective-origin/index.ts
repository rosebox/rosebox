import {
  LengthPercentage,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

type Position2D =
  | [
      'left' | 'center' | 'right' | LengthPercentage,
      'top' | 'center' | 'bottom' | LengthPercentage
    ]
  | [['left' | 'right', LengthPercentage], ['top' | 'bottom', LengthPercentage]]

const serializeKeywordOrOffset = (x: string | LengthPercentage): string =>
  typeof x === 'string' ? x : serializeLengthPercentage(x)

const serializePosition2D = (x: Position2D): string => {
  const [xValue, yValue] = x
  return !Array.isArray(xValue)
    ? `${serializeKeywordOrOffset(xValue)} ${serializeKeywordOrOffset(
        yValue as any
      )}`
    : `${xValue[0]} ${serializeLengthPercentage(xValue[1])} ${
        (yValue as any)[0]
      } ${serializeLengthPercentage((yValue as any)[1])}`
}

export const serializePerspectiveOriginPropertyValue = (
  x: Position2D | GlobalCssKeyword
): string => (isGlobalCssKeyword(x) ? x : serializePosition2D(x))

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveOriginDeclaration = {
  /**
   * Maps to CSS's **`perspective-origin`** property
   * @category RBProperty
   */
  perspectiveOrigin: Position2D | GlobalCssKeyword
}
