import {
  LengthPercentage,
  isLengthType,
  isPercentageType,
  GlobalCssKeyword,
} from '../shared/types'
import {
  serializeLength,
  serializePercentage,
  serializeLengthPercentage,
} from '../shared/serializers'

export const serializeAtomicValue = (x: Position): string => {
  if (typeof x.value === 'string') return x.value
  const pos = x.value
  return pos.reduce((acc, val, idx) => {
    const serializedVal =
      typeof val === 'string'
        ? val
        : isLengthType(val)
        ? acc + serializeLength(val)
        : isPercentageType(val)
        ? serializePercentage(val)
        : `${val[0]} ${serializeLengthPercentage(val[1])}`
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

export interface Position {
  __tag: 'Position'
  value: [
    (
      | 'left'
      | 'center'
      | 'right'
      | LengthPercentage
      | 'center'
      | ['left' | 'right', LengthPercentage]
    ),
    (
      | 'top'
      | 'center'
      | 'bottom'
      | LengthPercentage
      | 'center'
      | ['top' | 'bottom', LengthPercentage]
    )
  ]
}

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
