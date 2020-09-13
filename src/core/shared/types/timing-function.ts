import { GlobalCssKeyword, isGlobalCssKeyword } from '.'
import { getData, getValConstructor, NAMESPACE, RBType } from './shared'

/**
 *
 * A type that maps to the **`cubic-bezier()`** subset of CSS's **`<easing-function>`** .
 * @added 0.2.1
 */
export interface CubicBezierFunction
  extends RBType<'CubicBezierFunction', [number, number, number, number]> {}

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
export interface StepsFunction
  extends RBType<'StepsFunction', [number] | [number, StepPosition]> {}

export const serializeBezier = (x: CubicBezierFunction): string => {
  const [x1, x2, x3, x4] = getData(x)
  return `cubic-bezier(${x1}, ${x2}, ${x3}, ${x4})`
}

/**
 * Constructs a value of type **`CubicBezierFunction`**..
 * @category Value constructor
 * @added 0.2.1
 */
export const bezier = (
  x1: number,
  x2: number,
  x3: number,
  x4: number
): CubicBezierFunction => ({
  [NAMESPACE]: {
    type: 'CubicBezierFunction',
    data: [x1, x2, x3, x4],
    valueConstructor: bezier,
    serializer: serializeBezier,
  },
})

export const serializeSteps = (x: StepsFunction): string => {
  const [x0, x1] = getData(x)
  return `steps(${x0}${x1 ? ', ' + x1 : ''})`
}

/**
 * Constructs a value of type **`StepsFunction`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const steps = (
  num: number,
  stepPosition?: StepPosition
): StepsFunction => ({
  [NAMESPACE]: {
    type: 'StepsFunction',
    data: stepPosition ? [num, stepPosition] : [num],
    valueConstructor: steps,
    serializer: serializeSteps,
  },
})

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

const isSteps = (x: any): x is StepsFunction => getValConstructor(x) === steps

export const serializeSingleValue = (x: TimingFunction): string =>
  typeof x === 'string'
    ? x
    : isSteps(x)
    ? serializeSteps(x)
    : serializeBezier(x)

export const serializeTimingFunctionValue = (
  value: TimingFunctionValue
): string =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeSingleValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeSingleValue(item) +
          (idx === value.length - 1 ? '' : ', '),
        ''
      )
