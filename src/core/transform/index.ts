import { LengthPercentage } from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

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

interface XAxisTranslation {
  constructor: Function
  value: LengthPercentage
}

interface YAxisTranslation {
  constructor: Function
  value: LengthPercentage
}

interface Translation {
  constructor: Function
  value: [LengthPercentage, LengthPercentage]
}

export const translateX = (value: LengthPercentage): XAxisTranslation => ({
  constructor: translateX,
  value
})

export const serializeXAxisTranslation = (value: YAxisTranslation): string =>
  `translateX(${serializeLengthPercentage(value.value)})`

export const translateY = (value: LengthPercentage): YAxisTranslation => ({
  constructor: translateY,
  value
})

export const translate = (
  xTranslation: LengthPercentage,
  yTranslation: LengthPercentage
): Translation => ({
  constructor: translate,
  value: [xTranslation, yTranslation]
})

export const serializeYAxisTranslation = (value: YAxisTranslation): string =>
  `translateY(${serializeLengthPercentage(value.value)})`

export const serializeTranslation = (value: Translation): string =>
  `translate(${serializeLengthPercentage(
    value.value[0]
  )}, ${serializeLengthPercentage(value.value[1])})`
