import { Angle } from './angle'
import { Color } from './color'
import { Percentage } from './percentage'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

export const serializeLinearGradient = (val: Gradient): string => {
  const { withAngle, data } = val
  const y = (withAngle ? data[1] : data) as ColorStopList
  const angleStr = withAngle
    ? `${serializeAtomicValue(data[0] as Angle)}, `
    : ''
  const colorstopStr = (y as ColorStopList).reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === y.length - 1 ? '' : ', '),
    ''
  )
  return `linear-gradient(${angleStr}${colorstopStr})`
}

/**
 *
 * A type that maps to CSS's **`<linear-gradient>`** type.
 * @added 0.1.0
 */
export class Gradient<A extends 'linear-gradient' | 'radial-gradient' = any>
  implements RBType<ColorStopList | [Angle, ColorStopList]> {
  gradientType: A
  data: ColorStopList | [Angle, ColorStopList]
  valueConstructor: Function
  withAngle: boolean

  private constructor(gradientType: A, x: any, y?: any) {
    this.gradientType = gradientType
    this.valueConstructor = Gradient.linGrad
    this.data = y ? [x, y] : x
    this.withAngle = y ? true : false
  }

  /** @category Value constructor */
  static linGrad(x: ColorStopList): Gradient<'linear-gradient'>
  static linGrad(x: Angle, y: ColorStopList): Gradient<'linear-gradient'>
  static linGrad(x: any, y?: any): Gradient<'linear-gradient'> {
    return new Gradient('linear-gradient', x, y)
  }

  serialize(): string {
    return serializeLinearGradient(this)
  }
}

export const linGrad = Gradient.linGrad

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return !Array.isArray(x)
    ? serializeAtomicValue(x)
    : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
}
