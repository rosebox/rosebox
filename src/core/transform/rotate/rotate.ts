import { Angle, serializeAtomicValue } from '../../shared/'
import { TransformFunction } from '../shared'

/**
 * Translates to CSS's **`rotateX(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const rotateX = (x: Angle): TransformFunction<'rotateX'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateX,
  value: x,
})

/**
 * Translates to CSS's **`rotateY(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const rotateY = (x: Angle): TransformFunction<'rotateY'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateY,
  value: x,
})

/**
 * Translates to CSS's **`rotateZ(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const rotateZ = (x: Angle): TransformFunction<'rotateZ'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateZ,
  value: x,
})

/**
 * Translates to CSS's **`rotate(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const rotate = (x: Angle): TransformFunction<'rotate'> => ({
  type: 'TransformFunction',
  valueConstructor: rotate,
  value: x,
})

/**
 * Translates to CSS's **`rotate3d(x, y, z, a)`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rotate3d = (
  x: number,
  y: number,
  z: number,
  a: Angle
): TransformFunction<'rotate3d'> => ({
  type: 'TransformFunction',
  valueConstructor: rotate3d,
  value: [x, y, z, a],
})

export const isRotateX = (x: TransformFunction): boolean =>
  x.valueConstructor === rotateX

export const isRotateY = (x: TransformFunction): boolean =>
  x.valueConstructor === rotateY

export const isRotateZ = (x: TransformFunction): boolean =>
  x.valueConstructor === rotateZ

export const isRotate = (x: TransformFunction): boolean =>
  x.valueConstructor === rotate

export const isRotate3d = (x: TransformFunction): boolean =>
  x.valueConstructor === rotate3d

export const serializeRotateX = (x: TransformFunction<'rotateX'>): string =>
  `rotateX(${serializeAtomicValue(x.value)})`

export const serializeRotateY = (x: TransformFunction<'rotateY'>): string =>
  `rotateY(${serializeAtomicValue(x.value)})`

export const serializeRotateZ = (x: TransformFunction<'rotateZ'>): string =>
  `rotateZ(${serializeAtomicValue(x.value)})`

export const serializeRotate = (x: TransformFunction<'rotate'>): string =>
  `rotate(${serializeAtomicValue(x.value)})`

export const serializeRotate3d = (x: TransformFunction<'rotate3d'>): string => {
  return `rotate3d(${x.value[0]}, ${x.value[1]}, ${
    x.value[2]
  }, ${serializeAtomicValue(x.value[3])})`
}
