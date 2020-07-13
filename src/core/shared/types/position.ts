import { LengthPercentage } from './shared'
import { serializeLengthPercentage } from '../serializers'

/**
 * A value of this type defines an (x, y) coordinate.
 * @added 0.2.7
 */
export interface Position {
  __tag: 'Position'
  value: [LengthPercentage, LengthPercentage]
}

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

export const serializePosition = (x: Position): string => {
  const { value } = x
  return value.reduce((acc, val, idx) => {
    const serializedVal = serializeLengthPercentage(val)
    return acc + serializedVal + (idx === pos.length - 1 ? '' : ' ')
  }, '')
}
