import { Angle, serializeAngle } from './angle'
import { Color, isColor, serializeColorValue } from './color'
import { isPercentageType, Percentage, serializePercentage } from './percentage'
import {
  getData,
  LengthPercentage,
  NAMESPACE,
  RBType,
  serializeLengthPercentage,
} from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

export interface LinearGradient
  extends RBType<'LinearGradient', ColorStopList | [Angle, ColorStopList]> {}

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return isPercentageType(x)
    ? serializePercentage(x)
    : isColor(x)
    ? serializeColorValue(x)
    : `${serializeColorValue(x[0])} ${serializeLengthPercentage(x[1])}`
}

export const serializeLinearGradient = (val: LinearGradient): string => {
  const value = getData(val)
  const x = Array.isArray(value) ? value[0] : null
  const y = (Array.isArray(value) ? value[1] : value) as ColorStopList
  const angleStr = x ? `${serializeAngle(x as Angle)}, ` : ''
  const colorstopStr = (y as ColorStopList) .reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === y.length - 1 ? '' : ', '),
    ''
  )
  return `linear-gradient(${angleStr}${colorstopStr})`
}

export function linGrad(x: ColorStopList): LinearGradient

export function linGrad(x: Angle, y: ColorStopList): LinearGradient

export function linGrad(y: any, x?: any): LinearGradient {
  return {
    [NAMESPACE]: {
      type: 'LinearGradient',
      valueConstructor: linGrad,
      data: y ? [x, y] : x,
      serializer: serializeLinearGradient,
    },
  }
}

export type Gradient = LinearGradient
