import { Angle, serializeAngle } from '../../shared/'
import { TransformFunction } from '../shared'

/**
 * Specifies a transformation that rotates an element around the **x-axis**.
 * @category Value constructor
 * @added 0.2.2
 */
export const rotateX = (x: Angle): TransformFunction<'rotateX'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateX,
  value: x,
})

/**
 * Specifies a transformation that rotates an element around the **y-axis**.
 * @category Value constructor
 * @added 0.2.2
 */
export const rotateY = (x: Angle): TransformFunction<'rotateY'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateY,
  value: x,
})

/**
 * Specifies a transformation that rotates an element around the **z-axis**.
 * @category Value constructor
 * @added 0.2.2
 */
export const rotateZ = (x: Angle): TransformFunction<'rotateZ'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateZ,
  value: x,
})

/**
 * Specifies a transformation that rotates an element around a fixed point on the 2D plane.
 * @category Value constructor
 * @added 0.2.2
 */
export const rotate = (x: Angle): TransformFunction<'rotate'> => ({
  type: 'TransformFunction',
  valueConstructor: rotate,
  value: x,
})

/**
 * Specifies a transformation that rotates an element around a fixed axis in 3D plane.
 * @category Value constructor
 * @added 0.2.2
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
  `rotateX(${serializeAngle(x.value)})`

export const serializeRotateY = (x: TransformFunction<'rotateY'>): string =>
  `rotateY(${serializeAngle(x.value)})`

export const serializeRotateZ = (x: TransformFunction<'rotateZ'>): string =>
  `rotateZ(${serializeAngle(x.value)})`

export const serializeRotate = (x: TransformFunction<'rotate'>): string =>
  `rotate(${serializeAngle(x.value)})`

export const serializeRotate3d = (x: TransformFunction<'rotate3d'>): string => {
  return `rotate3d(${x.value[0]}, ${x.value[1]}, ${
    x.value[2]
  }, ${serializeAngle(x.value[3])})`
}
