import { Env } from './env'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type CalcOperation = 'addition' | 'substraction' | 'multiplication' | 'division'

type CalculationData<
  A extends CalcOperation | void = void
> = A extends 'addition'
  ? [
      LengthPercentage | Calculation<CalcOperation> | Env,
      LengthPercentage | Calculation<CalcOperation> | Env
    ]
  : A extends 'substraction'
  ? [
      LengthPercentage | Calculation<CalcOperation> | Env,
      LengthPercentage | Calculation<CalcOperation> | Env
    ]
  : A extends 'multiplication'
  ?
      | [LengthPercentage | Calculation<CalcOperation> | Env, number]
      | [number, LengthPercentage | Calculation<CalcOperation> | Env]
  : A extends 'division'
  ? [LengthPercentage | Calculation<CalcOperation> | Env, number]
  :
      | [
          LengthPercentage | Calculation<CalcOperation> | Env,
          LengthPercentage | Calculation<CalcOperation> | Env
        ]
      | [
          LengthPercentage | Calculation<CalcOperation> | Env,
          LengthPercentage | Calculation<CalcOperation> | Env
        ]
      | [LengthPercentage | Calculation<CalcOperation> | Env, number]
      | [number, LengthPercentage | Calculation<CalcOperation> | Env]
      | [LengthPercentage | Calculation<CalcOperation> | Env, number]

/**
 *
 * The type of values that are to be computed by the browser (**`<calc()>`**)
 * @added 0.1.0
 */
export class Calculation<A extends CalcOperation | void = void>
  implements RBType<any> {
  operationType: A extends void ? CalcOperation : A
  data: CalculationData<A>
  valueConstructor: Function

  private constructor(
    data: any,
    operationType: A extends void ? CalcOperation : A,
    valueConstructor: Function
  ) {
    this.operationType = operationType
    this.data = data
    this.valueConstructor = valueConstructor
  }

  /** @valueConstructor */
  static cadd(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: LengthPercentage | Calculation<CalcOperation> | Env
  ): Calculation<'addition'> {
    return new Calculation([x1, x2], 'addition', Calculation.cadd)
  }

  /** @valueConstructor */
  static csub(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: LengthPercentage | Calculation<CalcOperation> | Env
  ): Calculation<'substraction'> {
    return new Calculation([x1, x2], 'substraction', Calculation.csub)
  }

  /** @valueConstructor */
  static cdiv(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: number
  ): Calculation<'division'> {
    return new Calculation([x1, x2], 'division', Calculation.cdiv)
  }

  /** @valueConstructor */
  static cmult(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: number
  ): Calculation<'multiplication'>
  static cmult(
    x1: number,
    x2: LengthPercentage | Calculation<CalcOperation> | Env
  ): Calculation<'multiplication'>

  static cmult(x1: any, x2: any): Calculation<'multiplication'> {
    return new Calculation([x1, x2], 'multiplication', Calculation.cmult)
  }

  serialize(): string {
    return serializeCalculation(this)
  }
}

export const cadd = Calculation.cadd
export const csub = Calculation.csub
export const cmult = Calculation.cmult
export const cdiv = Calculation.cdiv

const getOpSign = (x: Calculation) => {
  switch (x.operationType) {
    case 'addition':
      return '+'
    case 'substraction':
      return '-'
    case 'multiplication':
      return '*'
    case 'division':
      return '/'
    default:
      throw new Error('Unkown')
  }
}

const serializeCalculationOperand = (
  x: Calculation<CalcOperation> | number | LengthPercentage | Env
): string => serializeAtomicValue(x)

const serializeCalculation = (x: Calculation): string =>
  `calc(${serializeCalculationOperand(x.data[0])} ${getOpSign(
    x
  )} ${serializeCalculationOperand(x.data[1])})`
