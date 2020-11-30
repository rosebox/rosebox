import { Angle } from './angle'
import { Color } from './color'
import { Percentage } from './percentage'
import { Position } from './position'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

type AtLeastOneRequired<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

const serializeLinearGradientBase = <
  A extends 'linear-gradient' | 'repeat-linear-gradient'
>(
  functionName: A
) => (val: Gradient<A>): string => {
  const { data } = val
  const { direction, colorStopList } = data
  const angleStr = direction ? `${serializeAtomicValue(direction)}, ` : ''
  const colorstopStr = colorStopList.reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === colorStopList.length - 1 ? '' : ', '),
    ''
  )
  return `${functionName}(${angleStr}${colorstopStr})`
}

const serializeLinearGradient = serializeLinearGradientBase('linear-gradient')
const serializeRepLinearGradient = serializeLinearGradientBase(
  'repeat-linear-gradient'
)

const serializeRadialGradientBase = <
  A extends 'radial-gradient' | 'repeat-radial-gradient'
>(
  functionName: A
) => (val: Gradient<A>): string => {
  const { data } = val
  const { size, endingShape, position, colorStopList } = data
  const firstPart = `${endingShape ? endingShape + ' ' : ''}${size ? size : ''}`
  const secondPart = `${position ? 'at ' + serializeAtomicValue(position) : ''}`
  const thirdPart = colorStopList.reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === colorStopList.length - 1 ? '' : ', '),
    ''
  )
  return `${functionName}(${firstPart}${secondPart}, ${thirdPart})`
}

const serializeRadialGradient = serializeRadialGradientBase('radial-gradient')
const serializeRepRadialGradient = serializeRadialGradientBase(
  'repeat-radial-gradient'
)

type ToSideOrCorner =
  | 'to left'
  | 'to right'
  | 'to top'
  | 'to bottom'
  | 'to left top'
  | 'to top left'
  | 'to left bottom'
  | 'to bottom left'
  | 'to right top'
  | 'to top right'
  | 'to right bottom'
  | 'to bottom right'

type LinearGradientParamsObj = {
  direction?: Angle | ToSideOrCorner
  colorStopList: ColorStopList
}

type RadialGradientParamsObj = AtLeastOneRequired<{
  endingShape: 'circle' | 'ellipse'
  size: 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner'
}> & {
  position?: Position
  colorStopList: ColorStopList
}

type GradientType =
  | 'linear-gradient'
  | 'radial-gradient'
  | 'repeat-radial-gradient'
  | 'repeat-linear-gradient'

/**
 *
 * A type that maps to CSS's **`<gradient>`** type.
 * @added 0.1.0
 */
export class Gradient<A extends GradientType = GradientType>
  implements RBType<LinearGradientParamsObj> {
  gradientType: A
  data: A extends 'linear-gradient' | 'repeat-linear-gradient'
    ? LinearGradientParamsObj
    : RadialGradientParamsObj
  valueConstructor: Function

  private constructor(gradientType: A, x: LinearGradientParamsObj) {
    this.gradientType = gradientType
    this.valueConstructor =
      gradientType === 'linear-gradient' ? Gradient.linGrad : Gradient.radGrad
    this.data = x as any
  }

  /**
   * Constructs a value of type **`Gradient<linear-gradient>`**. This function maps to CSS's **`linear-gradient()`**
   */
  static linGrad(x: LinearGradientParamsObj): Gradient<'linear-gradient'> {
    return new Gradient('linear-gradient', x)
  }

  /**
   * Constructs a value of type **`Gradient<radial-gradient>`**. This function maps to CSS's **`radial-gradient()`**
   */
  static radGrad(x: RadialGradientParamsObj): Gradient<'radial-gradient'> {
    return new Gradient('radial-gradient', x)
  }
  /**
   * Constructs a value of type **`Gradient<repeat-linear-gradient>`**. This function maps to CSS's **`repeat-linear-gradient()`**
   */
  static repLinGrad(
    x: LinearGradientParamsObj
  ): Gradient<'repeat-linear-gradient'> {
    return new Gradient('repeat-linear-gradient', x)
  }

  /**
   * Constructs a value of type **`Gradient<repeat-radial-gradient>`**. This function maps to CSS's **`repeat-radial-gradient()`**
   */
  static repRadGrad(
    x: RadialGradientParamsObj
  ): Gradient<'repeat-radial-gradient'> {
    return new Gradient('repeat-radial-gradient', x)
  }

  serialize(): string {
    if (isLinearGradient(this)) return serializeLinearGradient(this)
    if (isRadialGradient(this)) return serializeRadialGradient(this)
    if (isRepLinearGradient(this)) return serializeRepLinearGradient(this)
    if (isRepRadialGradient(this)) return serializeRepRadialGradient(this)
    throw new Error('Unrecognized type')
  }
}

const isLinearGradient = (x: Gradient): x is Gradient<'linear-gradient'> =>
  x.gradientType === 'linear-gradient'
const isRadialGradient = (x: Gradient): x is Gradient<'radial-gradient'> =>
  x.gradientType === 'radial-gradient'
const isRepLinearGradient = (
  x: Gradient
): x is Gradient<'repeat-linear-gradient'> =>
  x.gradientType === 'repeat-linear-gradient'
const isRepRadialGradient = (
  x: Gradient
): x is Gradient<'repeat-radial-gradient'> =>
  x.gradientType === 'repeat-radial-gradient'

/** @category Value constructor */
export const linGrad = Gradient.linGrad
/** @category Value constructor */
export const radGrad = Gradient.radGrad
/** @category Value constructor */
export const repLinGrad = Gradient.repLinGrad
/** @category Value constructor */
export const repRadGrad = Gradient.repRadGrad

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return !Array.isArray(x)
    ? serializeAtomicValue(x)
    : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
}
