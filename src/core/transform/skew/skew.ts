import { Angle, serializeAngle } from '../../shared'
import { TransformFunction } from '../shared'

/**
 * Translates to CSS's **skewX(x)**
 * @category Value constructor
 * @added 0.2.3
 */
export const skewX = (x: Angle): TransformFunction<'skewSingle'> => ({
  type: 'TransformFunction',
  valueConstructor: skewX,
  value: x,
})

/**
 * Translates to CSS's **skewY(x)**
 * @category Value constructor
 * @added 0.2.3
 */
export const skewY = (x: Angle): TransformFunction<'skewSingle'> => ({
  type: 'TransformFunction',
  valueConstructor: skewY,
  value: x,
})

/**
 * Translates to CSS's **skew(x, y)**
 * @category Value constructor
 * @added 0.2.3
 */
export const skew = (x: Angle, y: Angle): TransformFunction<'skew'> => ({
  type: 'TransformFunction',
  valueConstructor: skew,
  value: [x, y],
})

const serializeSkewAtomicValue = (x: Angle): string => `${serializeAngle(x)}`

export const isSkewX = (x: TransformFunction): boolean =>
  x.valueConstructor === skewX

export const isSkewY = (x: TransformFunction): boolean =>
  x.valueConstructor === skewY

export const isSkew = (x: TransformFunction): boolean =>
  x.valueConstructor === skew

export const serializeSkewX = (x: TransformFunction<'skewSingle'>): string =>
  `skewX(${serializeAngle(x.value)})`

export const serializeSkewY = (x: TransformFunction<'skewSingle'>): string =>
  `skewY(${serializeAngle(x.value)})`

export const serializeSkew = (x: TransformFunction<'skew'>): string =>
  `skew(${serializeSkewAtomicValue(x.value[0])}${
    x.value[1] ? `, ${serializeSkewAtomicValue(x.value[1])}` : ''
  })`
