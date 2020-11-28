import { Angle } from './angle'
import { Color } from './color'
import { Percentage } from './percentage'
import {
  LengthPercentage,
  RBType,
  serializeAtomicValue
} from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

export const serializeLinearGradient = (val: LinearGradient): string => {
  const {withAngle, data} = val
  const y = (withAngle ? data[1] : data) as ColorStopList
  const angleStr = withAngle ? `${serializeAtomicValue(data[0] as Angle)}, ` : ''
  const colorstopStr = (y as ColorStopList).reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === y.length - 1 ? '' : ', '),
    ''
  )
  return `linear-gradient(${angleStr}${colorstopStr})`
}

export class LinearGradient
  implements RBType<ColorStopList | [Angle, ColorStopList]> {
    data: ColorStopList | [Angle, ColorStopList]
    valueConstructor: Function
    withAngle: boolean

    private constructor(x: any, y?: any) {
      this.valueConstructor = LinearGradient.linGrad
      this.data = y ? [x, y] : x
      this.withAngle = y ? true : false
      console.log(y ? [x, y] : x)
    }

  static linGrad(x: ColorStopList): LinearGradient
  static linGrad(x: Angle, y: ColorStopList): LinearGradient
  static linGrad(x: any, y?: any): LinearGradient {
    return new LinearGradient(x, y)
  }
    
    serialize = () => serializeLinearGradient(this)
  }

/** @valueConstructor */
export const linGrad = LinearGradient.linGrad

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return !Array.isArray(x)
    ? serializeAtomicValue(x)
    : `${serializeAtomicValue(x[0])} ${(serializeAtomicValue(x[1]))}`
}


export type Gradient = LinearGradient