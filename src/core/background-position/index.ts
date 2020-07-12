import { LengthPercentage, GlobalCssKeyword } from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

export const serializeAtomicValue = (x: Position): string => {
  const { value } = x
  return value.reduce((acc, val, idx) => {
    const serializedVal = serializeLengthPercentage(val)
    return acc + serializedVal + (idx === pos.length - 1 ? '' : ' ')
  }, '')
}

export const serializeBgPositionPropValue = (
  x: Position | Position[]
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x))
    return x.reduce(
      (acc, val, idx) =>
        acc + serializeAtomicValue(val) + (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializeAtomicValue(x)
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

/**
 * A value of this type defines an (x, y) coordinate.
 * @added 0.2.7
 */
export interface Position {
  __tag: 'Position'
  value: [LengthPercentage, LengthPercentage]
}

/*
export const serializeBgPositionPropValue = (
  x: Position | Position[]
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x))
    return x.reduce(
      (acc, val, idx) =>
        acc + serializeAtomicValue(val) + (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializeAtomicValue(x)
}*/

/*
export function pos(
  x: 'left' | 'center' | 'right' | LengthPercentage,
  y: 'top' | 'center' | 'bottom' | LengthPercentage
): Position
export function pos(
  x: 'center' | ['left' | 'right', LengthPercentage],
  y: 'center' | ['top' | 'bottom', LengthPercentage]
): Position

export function pos(
  x:
    | 'left'
    | 'center'
    | 'right'
    | LengthPercentage
    | 'center'
    | ['left' | 'right', LengthPercentage],
  y:
    | 'top'
    | 'center'
    | 'bottom'
    | LengthPercentage
    | 'center'
    | ['top' | 'bottom', LengthPercentage]
): Position {
  return {
    __tag: 'Position',
    value: [x, y],
  }
}
*/

/**
 * @category Value constructor
 * @added 0.2.7
 */
export function pos(x: LengthPercentage, y: LengthPercentage): Position {
  return {
    __tag: 'Position',
    value: [x, y],
  }
}
