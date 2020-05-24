import { Angle, serializeAngle } from '../../shared/'
import { TransformFunction } from '../shared'

export const rotateX = (x: Angle): TransformFunction<'rotateX'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateX,
  value: x
})

export const rotateY = (x: Angle): TransformFunction<'rotateY'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateY,
  value: x
})

export const rotateZ = (x: Angle): TransformFunction<'rotateZ'> => ({
  type: 'TransformFunction',
  valueConstructor: rotateZ,
  value: x
})

export const rotate = (x: Angle): TransformFunction<'rotate'> => ({
  type: 'TransformFunction',
  valueConstructor: rotate,
  value: x
})

export const rotate3d = (
  x: number,
  y: number,
  z: number,
  a: Angle
): TransformFunction<'rotate3d'> => ({
  type: 'TransformFunction',
  valueConstructor: rotate3d,
  value: [x, y, z, a]
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
