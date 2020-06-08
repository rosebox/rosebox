import { Angle, serializeAngle } from '../../shared'
import { TransformFunction } from '../shared'

export const skewX = (x: Angle | 0): TransformFunction<'skewSingle'> => ({
  type: 'TransformFunction',
  valueConstructor: skewX,
  value: x
})

export const skewY = (x: Angle | 0): TransformFunction<'skewSingle'> => ({
  type: 'TransformFunction',
  valueConstructor: skewY,
  value: x
})

export const skew = (
  x: Angle | 0,
  y?: Angle | 0
): TransformFunction<'skew'> => ({
  type: 'TransformFunction',
  valueConstructor: skew,
  value: y ? [x, y] : [x]
})

const serializeSkewAtomicValue = (x: Angle | 0): string =>
  `${x === 0 ? 0 : serializeAngle(x)}`

export const isSkewX = (x: TransformFunction): boolean =>
  x.valueConstructor === skewX

export const isSkewY = (x: TransformFunction): boolean =>
  x.valueConstructor === skewY

export const isSkew = (x: TransformFunction): boolean =>
  x.valueConstructor === skew

export const serializeSkewX = (x: TransformFunction<'skewSingle'>): string =>
  `skewX(${x.value === 0 ? x.value : serializeAngle(x.value)})`

export const serializeSkewY = (x: TransformFunction<'skewSingle'>): string =>
  `skewY(${x.value === 0 ? x.value : serializeAngle(x.value)})`

export const serializeSkew = (x: TransformFunction<'skew'>): string =>
  `skew(${serializeSkewAtomicValue(x.value[0])}${
    x.value[1] ? `, ${serializeSkewAtomicValue(x.value[1])}` : ''
  })`
