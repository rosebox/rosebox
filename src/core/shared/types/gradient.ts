import { Angle } from './angle'
import { Color } from './color'
import { Percentage } from './percentage'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

export const serializeLinearGradient = (val: Gradient): string => {
  const { data } = val
  const { direction,  colorStopList} = data
  const angleStr = direction ? `${serializeAtomicValue(direction)}, ` : ''
  const colorstopStr = (colorStopList).reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === colorStopList.length - 1 ? '' : ', '),
    ''
  )
  return `linear-gradient(${angleStr}${colorstopStr})`
}


type ToSideOrCorner = 
| 'to left' | 'to right'
| 'to top' | 'to bottom'
| 'to left top' | 'to top left'
| 'to left bottom' | 'to bottom left'
| 'to right top' | 'to top right'
| 'to right bottom' | 'to bottom right'

/**
 * @skip
 */
type LinearGradientParamsObj = {
  direction?: Angle | ToSideOrCorner,
  colorStopList: ColorStopList
}

type GradientType = 'linear-gradient' | 'radial-gradient'

/**
 *
 * A type that maps to CSS's **`<gradient>`** type.
 * @added 0.1.0
 */
export class Gradient<A extends GradientType | void = void>
  implements RBType<LinearGradientParamsObj> {
  gradientType: A extends void ? GradientType : A
  data: LinearGradientParamsObj
  valueConstructor: Function

  private constructor(gradientType: A extends void ? GradientType : A, x: LinearGradientParamsObj) {
    this.gradientType = gradientType
    this.valueConstructor = Gradient.linGrad
    this.data = x
  }

  /**
   * Constructs a value of type **`Gradient<linear-gradient>`**. This function maps to CSS's **`linear-gradient()`**
  */
  static linGrad(x: LinearGradientParamsObj): Gradient<'linear-gradient'> {
    return new Gradient('linear-gradient', x)
  }

  serialize(): string {
    return serializeLinearGradient(this)
  }
}

/** @category Value constructor */
export const linGrad = Gradient.linGrad

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return !Array.isArray(x)
    ? serializeAtomicValue(x)
    : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
}


type ExcludeTypeKey<K> = K extends "type" ? never : K

type Test = ExcludeTypeKey<"emailAddress" | "type" | "foo">