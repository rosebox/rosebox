import {
  serializeMatrix,
  matrix,
  serializeYAxisTranslation,
  translateY,
  serializeTranslation,
  translate,
  scaleX,
  serializeScaleX,
  serializeScaleY,
  serializeScale,
  scaleY,
  scale,
  serializeThreeDScale,
  scale3d,
  serializeZAxisTranslation,
  translateZ,
  serializeThreeDTranslation,
  translate3d
} from './index'
import { px, per } from '../shared/value-constructors'

test('serializeMatrix', () => {
  const received = serializeMatrix(matrix([1, 2, 3]))
  const expected = 'matrix(1, 2, 3)'
  expect(received).toEqual(expected)
})

test('serializeYAxisTranslation', () => {
  const received = serializeYAxisTranslation(translateY(px(3)))
  const expected = 'translateY(3px)'
  expect(received).toEqual(expected)
})

test('serializeZAxisTranslation', () => {
  const received = serializeZAxisTranslation(translateZ(px(3)))
  const expected = 'translateZ(3px)'
  expect(received).toEqual(expected)
})

test('serializeTranslation', () => {
  const received = serializeTranslation(translate(px(3), per(50)))
  const expected = 'translate(3px, 50%)'
  expect(received).toEqual(expected)
})

test('serializeScaleX', () => {
  const received = serializeScaleX(scaleX(3))
  const expected = 'scaleX(3)'
  expect(received).toEqual(expected)
})

test('serializeScaleY', () => {
  const received = serializeScaleY(scaleY(3))
  const expected = 'scaleY(3)'
  expect(received).toEqual(expected)
})

test('serializeScale', () => {
  const received = serializeScale(scale(3, -1))
  const expected = 'scale(3, -1)'
  expect(received).toEqual(expected)
})

test('serializeThreeDScale', () => {
  const received = serializeThreeDScale(scale3d(3, -1, 2))
  const expected = 'scale3d(3, -1, 2)'
  expect(received).toEqual(expected)
})

test('serializeThreeDTranslation', () => {
  const received = serializeThreeDTranslation(translate3d(px(3), px(-1), px(2)))
  const expected = 'translate3d(3px, -1px, 2px)'
  expect(received).toEqual(expected)
})

interface Matrix {
  constructor: Function
  value:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | [number, number, number, number, number]
    | [number, number, number, number, number, number]
}

export const matrix = (
  value:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | [number, number, number, number, number]
    | [number, number, number, number, number, number]
): Matrix => ({
  constructor: matrix,
  value
})

export const serializeMatrixValue = (
  value:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | [number, number, number, number, number]
    | [number, number, number, number, number, number]
): string =>
  value
    .reduce(
      (acc: any, item, idx) =>
        acc + item + (idx === value.length - 1 ? '' : ', '),
      ''
    )
    .trim()

export const serializeMatrix = (value: Matrix): string =>
  `matrix(${serializeMatrixValue(value.value)})`

interface XScale {
  constructor: Function
  value: number
}

interface YScale {
  constructor: Function
  value: number
}

interface ZScale {
  constructor: Function
  value: number
}

interface Scale {
  constructor: Function
  value: [number, number]
}

interface ThreeDScale {
  constructor: Function
  value: [number, number, number]
}

export const scaleX = (value: number): XScale => ({
  constructor: scaleX,
  value
})

export const scaleY = (value: number): YScale => ({
  constructor: scaleY,
  value
})

export const scaleZ = (value: number): ZScale => ({
  constructor: scaleZ,
  value
})

export const scale = (x: number, y: number): Scale => ({
  constructor: scale,
  value: [x, y]
})

export const scale3d = (x: number, y: number, z: number): ThreeDScale => ({
  constructor: scale3d,
  value: [x, y, z]
})

export const serializeScaleX = (value: XScale): string =>
  `scaleX(${value.value})`
export const serializeScaleY = (value: YScale): string =>
  `scaleY(${value.value})`
export const serializeScaleZ = (value: ZScale): string =>
  `scaleZ(${value.value})`
export const serializeScale = (value: Scale): string =>
  `scale(${value.value[0]}, ${value.value[1]})`
export const serializeThreeDScale = (value: ThreeDScale): string =>
  `scale3d(${value.value[0]}, ${value.value[1]}, ${value.value[2]})`
