import { LengthPercentage } from '../../shared/types'
import { serializeLengthPercentage } from '../../shared/serializers'
import { TransformFunction } from '../shared'

/**
 * Translates to **translateX(x)**.
 * @category Value constructor
 * @added 0.2.3
 */
export const translateX = (
  x: LengthPercentage
): TransformFunction<'translateSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: translateX,
  value: [x],
})

/**
 * Translates to **translateY(x)**.
 * @category Value constructor
 * @added 0.2.3
 */
export const translateY = (
  x: LengthPercentage
): TransformFunction<'translateSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: translateY,
  value: [x],
})

/**
 * Translates to **translateZ(x)**.
 * @category Value constructor
 * @added 0.2.3
 */
export const translateZ = (
  x: LengthPercentage
): TransformFunction<'translateSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: translateZ,
  value: [x],
})

/**
 * Translates to **translate(x, y)**.
 * @category Value constructor
 * @added 0.2.3
 */
export const translate = (
  x: LengthPercentage,
  y: LengthPercentage
): TransformFunction<'translate'> => ({
  type: 'TransformFunction',
  valueConstructor: translate,
  value: [x, y],
})

/**
 * Translates to **translate3d(x, y, z)**.
 * @category Value constructor
 * @added 0.2.3
 */
export const translate3d = (
  x: LengthPercentage,
  y: LengthPercentage,
  z: LengthPercentage
): TransformFunction<'translate3d'> => ({
  type: 'TransformFunction',
  valueConstructor: translate3d,
  value: [x, y, z],
})

export const serializeTranslateX = (
  value: TransformFunction<'translateX'>
): string => `translateX(${serializeLengthPercentage(value.value[0])})`

export const serializeTranslateY = (
  value: TransformFunction<'translateY'>
): string => `translateY(${serializeLengthPercentage(value.value[0])})`

export const serializeTranslateZ = (
  value: TransformFunction<'translateZ'>
): string => `translateZ(${serializeLengthPercentage(value.value[0])})`

export const serializeTranslate = (
  value: TransformFunction<'translate'>
): string =>
  `translate(${serializeLengthPercentage(value.value[0])}${
    value.value[1] ? `, ${serializeLengthPercentage(value.value[1])}` : ''
  })`

export const serializeTranslate3d = (
  value: TransformFunction<'translate3d'>
): string =>
  `translate3d(${serializeLengthPercentage(
    value.value[0]
  )}, ${serializeLengthPercentage(
    value.value[1] as LengthPercentage
  )}, ${serializeLengthPercentage(value.value[2] as LengthPercentage)})`

export const isTranslateX = (x: TransformFunction): boolean =>
  x.valueConstructor === translateX

export const isTranslateY = (x: TransformFunction): boolean =>
  x.valueConstructor === translateY

export const isTranslateZ = (x: TransformFunction): boolean =>
  x.valueConstructor === translateZ

export const isTranslate = (x: TransformFunction): boolean =>
  x.valueConstructor === translate

export const isTranslate3d = (x: TransformFunction): boolean =>
  x.valueConstructor === translate3d
