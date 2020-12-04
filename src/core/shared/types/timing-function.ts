import { GlobalCssKeyword, isGlobalCssKeyword } from '.'
import { getData, RBType, serializeAtomicValue } from './shared'

const serializeBezier = (x: CubicBezierFunction): string => {
  const [x1, x2, x3, x4] = getData(x)
  return `cubic-bezier(${x1}, ${x2}, ${x3}, ${x4})`
}

/**
 *
 * A type that maps to the **`cubic-bezier()`** subset of CSS's **`<easing-function>`** .
 * @added 0.2.1
 */
export class CubicBezierFunction
  implements RBType<[number, number, number, number]> {
  data: [number, number, number, number]
  valueConstructor: Function
  serialize: () => string

  private constructor(x: [number, number, number, number]) {
    this.data = x
    this.valueConstructor = CubicBezierFunction.bezier
    this.serialize = () => serializeBezier(this)
  }

  /** @category Value constructor */
  static bezier(x1: number, x2: number, x3: number, x4: number) {
    return new CubicBezierFunction([x1, x2, x3, x4])
  }
 
}

export const bezier = CubicBezierFunction.bezier

type StepPosition =
  | 'jump-start'
  | 'jump-end'
  | 'jump-none'
  | 'jump-both'
  | 'start'
  | 'end'

/**
 *
 * A type that maps to the **`steps()`** subset of CSS's **`<easing-function>`** .
 * @added 0.2.1
 */
export class StepsFunction
  implements RBType<[number] | [number, StepPosition]> {
  data: [number] | [number, StepPosition]
  valueConstructor: Function
  serialize: () => string

  private constructor(x: number, y?: StepPosition) {
    this.data = y ? [x, y] : [x]
    this.valueConstructor = StepsFunction.steps
    this.serialize = () => serializeStepsFunction(this)
  }

  /** @category Value constructor */
  static steps(num: number, stepPosition?: StepPosition) {
    return new StepsFunction(num, stepPosition)
  }
}

export const steps = StepsFunction.steps

export const serializeStepsFunction = (x: StepsFunction): string => {
  const [x0, x1] = getData(x)
  return `steps(${x0}${x1 ? ', ' + x1 : ''})`
}

type CubicBezierTimingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | CubicBezierFunction

type StepTimingFunction =
  | 'step-start'
  | 'step-end'
  | 'ease-out'
  | 'ease-in-out'
  | StepsFunction

type TimingFunction = 'linear' | StepTimingFunction | CubicBezierTimingFunction

/**
 * @hide
 */
export type TimingFunctionValue =
  | GlobalCssKeyword
  | TimingFunction
  | TimingFunction[]

export const serializeTimingFunctionValue = (
  value: TimingFunctionValue
): string =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeAtomicValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeAtomicValue(item) +
          (idx === value.length - 1 ? '' : ', '),
        ''
      )
