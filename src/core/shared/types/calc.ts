import { Env } from './env'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type CalcOperation = 'addition' | 'substraction' | 'multiplication' | 'division'

type CalculationData<A extends CalcOperation = any> = A extends 'addition'
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
  : any

export class Calculation<A extends CalcOperation = any> implements RBType<any> {
  operationType: A extends any ? CalcOperation : A
  data: CalculationData<A>
  valueConstructor: Function

  private constructor(data: any, operationType: A extends any ? CalcOperation : A, valueConstructor: Function) {
    this.operationType = operationType
    this.data = data
    this.valueConstructor = valueConstructor
  }

  static cadd(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: LengthPercentage | Calculation<CalcOperation> | Env
  ): Calculation<'addition'> {
    return new Calculation([x1, x2], 'addition', Calculation.cadd)
  }

  static csub(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: LengthPercentage | Calculation<CalcOperation> | Env
  ): Calculation<'substraction'> {
    return new Calculation([x1, x2], 'substraction', Calculation.csub)
  }

  static cdiv(
    x1: LengthPercentage | Calculation<CalcOperation> | Env,
    x2: number
  ): Calculation<'division'> {
    return new Calculation([x1, x2], 'division', Calculation.cdiv)
  }

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

const getOpSign = (x: Calculation<CalcOperation>) => {
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

const serializeCalculation = (x: Calculation<CalcOperation>): string =>
  `calc(${serializeCalculationOperand(x.data[0])} ${getOpSign(
    x
  )} ${serializeCalculationOperand(x.data[1])})`
