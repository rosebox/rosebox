import { TransformFunction } from '../shared'

/**
 * Translates to CSS's **`scaleX(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const scaleX = (x: number): TransformFunction<'scaleSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: scaleX,
  value: x,
})

/**
 * Translates to CSS's **`scaleY(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const scaleY = (x: number): TransformFunction<'scaleSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: scaleY,
  value: x,
})

/**
 * Translates to CSS's **`scaleZ(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const scaleZ = (x: number): TransformFunction<'scaleSingleAxis'> => ({
  type: 'TransformFunction',
  valueConstructor: scaleZ,
  value: x,
})

/**
 * Translates to CSS's **`scale(x)`** or **`scale(x, y)`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const scale = (x: number, y?: number): TransformFunction<'scale'> => ({
  type: 'TransformFunction',
  valueConstructor: scale,
  value: y ? [x, y] : [x],
})

/**
 * Translates to CSS's **`scale3d(x, y, z)`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const scale3d = (
  x: number,
  y: number,
  z: number
): TransformFunction<'scale3d'> => ({
  type: 'TransformFunction',
  valueConstructor: scale3d,
  value: [x, y, z],
})

export const isScaleX = (x: TransformFunction): boolean =>
  x.valueConstructor === scaleX

export const isScaleY = (x: TransformFunction): boolean =>
  x.valueConstructor === scaleY

export const isScaleZ = (x: TransformFunction): boolean =>
  x.valueConstructor === scaleZ

export const isScale = (x: TransformFunction): boolean =>
  x.valueConstructor === scale

export const isScale3d = (x: TransformFunction): boolean =>
  x.valueConstructor === scale3d

export const serializeScaleX = (
  x: TransformFunction<'scaleSingleAxis'>
): string => `scaleX(${x.value})`

export const serializeScaleY = (
  x: TransformFunction<'scaleSingleAxis'>
): string => `scaleY(${x.value})`

export const serializeScaleZ = (
  x: TransformFunction<'scaleSingleAxis'>
): string => `scaleZ(${x.value})`

export const serializeScale = (x: TransformFunction<'scale'>): string =>
  `scale(${x.value[0]}${x.value[1] ? `, ${x.value[1]}` : ''})`

export const serializeScale3d = (x: TransformFunction<'scale3d'>): string =>
  `scale3d(${x.value[0]}, ${x.value[1]}, ${x.value[2]})`
