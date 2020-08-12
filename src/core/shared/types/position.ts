import { getData, LengthPercentage, NAMESPACE, RBType } from './shared'
import { serializeLengthPercentage } from './shared'

/**
 * A value of this type defines an (x, y) coordinate.
 * @added 0.2.7
 */
export interface Position
  extends RBType<'Position', [LengthPercentage, LengthPercentage]> {}

/**
 * @category Value constructor
 * @added 0.2.7
 */
export function pos(x: LengthPercentage, y: LengthPercentage): Position {
  return {
    [NAMESPACE]: {
      type: 'Position',
      data: [x, y],
      valueConstructor: pos,
    },
  }
}

export const serializePosition = (x: Position): string =>
  getData(x).reduce((acc, val, idx) => {
    const serializedVal = serializeLengthPercentage(val)
    return acc + serializedVal + (idx === pos.length - 1 ? '' : ' ')
  }, '')
