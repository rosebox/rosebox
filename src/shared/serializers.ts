import {
  Length,
  isLengthType,
  isPercentageType,
  Width,
  LengthPercentage,
  Percentage
} from './types'

export const serializeLength = (value: Length) =>
  `${value.value[0]}${value.value[1]}`

export const serializePercentage = (percentage: Percentage): string =>
  `${percentage.value}%`

export const serializeKeyword = (value: string) => `${value}`

export const serializeLengthPercentage = (value: LengthPercentage) =>
  isLengthType(value) ? serializeLength(value) : serializePercentage(value)

export const serializeWidth = (value: Width): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value
