import { Length } from '../../shared/types'
import { TransformFunction } from '../shared'
import { serializeLength } from '../../shared/serializers'

/**
 * Translates to CSS's **`perspective(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const perspective = (x: Length): TransformFunction<'perspective'> => ({
  type: 'TransformFunction',
  valueConstructor: perspective,
  value: x,
})

export const isPerspective = (x: TransformFunction): boolean =>
  x.valueConstructor === perspective

export const serializePerspective = (
  x: TransformFunction<'perspective'>
): string => `perspective(${serializeLength(x.value)})`
