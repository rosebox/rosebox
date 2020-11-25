import { WidthCalculation } from './calc'
import {
  getData,
  LengthPercentage,
  RBType,
  serializeAtomicValue,
} from './shared'

/**
 * A value of this type defines an (x, y) coordinate.
 * @added 0.2.7
 */
export interface Position
  extends RBType<
    'Position',
    [LengthPercentage | WidthCalculation, LengthPercentage | WidthCalculation]
  > {}

/**
 * @category Value constructor
 * @added 0.2.7
 */
export function pos(x: LengthPercentage, y: LengthPercentage): Position {
  return {
    type: 'Position',
    data: [x, y],
    valueConstructor: pos,
    serialize: serializePosition,
  }
}

export const serializePosition = (x: Position): string =>
  getData(x).reduce((acc, val, idx) => {
    const serializedVal = serializeAtomicValue(val)
    return acc + serializedVal + (idx === pos.length - 1 ? '' : ' ')
  }, '')
