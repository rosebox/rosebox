import { Env } from './env'
import {
  getTypeName,
  LengthPercentage,
  NAMESPACE,
  RBType,
  serializeAtomicValue,
} from './shared'

/**
 * @internal
 */
interface CalcMultiplication<A, B>
  extends RBType<'CalcMultiplication', [A, B]> {}

/**
 * @internal
 */
interface CalcAddition<A> extends RBType<'CalcAddition', [A, A]> {}

/**
 * @internal
 */
interface CalcDivision<A = any> extends RBType<'CalcDivision', [A, number]> {}

/**
 * @internal
 */
interface CalcSubstraction<A> extends RBType<'CalcSubstraction', [A, A]> {}

export function cdiv(
  x1: LengthPercentage | WidthCalculation | Env,
  x2: number
): CalcDivision {
  return {
    [NAMESPACE]: {
      type: 'CalcDivision',
      data: [x1, x2],
      valueConstructor: csubs,
      serializer: serializeWidthCalculationValue,
    },
  }
}

// For Width/Length

export function csubs(
  x1: LengthPercentage | WidthCalculation | Env,
  x2: LengthPercentage | WidthCalculation | Env
): CalcSubstraction<LengthPercentage | WidthCalculation | Env> {
  return {
    [NAMESPACE]: {
      type: 'CalcSubstraction',
      data: [x1, x2],
      valueConstructor: csubs,
      serializer: serializeWidthCalculationValue,
    },
  }
}

export function cadd(
  x1: LengthPercentage | WidthCalculation | Env,
  x2: LengthPercentage | WidthCalculation | Env
): CalcAddition<LengthPercentage | WidthCalculation | Env> {
  return {
    [NAMESPACE]: {
      type: 'CalcAddition',
      data: [x1, x2],
      valueConstructor: csubs,
      serializer: serializeWidthCalculationValue,
    },
  }
}

export function cmulti(
  x1: number,
  x2: LengthPercentage | WidthCalculation | Env
): CalcMultiplication<number, LengthPercentage | WidthCalculation | Env>

// For Width/Length
export function cmulti(
  x1: LengthPercentage | WidthCalculation | Env,
  x2: number
): CalcMultiplication<LengthPercentage | WidthCalculation, number>

// The resolve type is number or integer
export function cmulti(
  x1: number,
  x2: number
): CalcMultiplication<number, number>

export function cmulti(x1: any, x2: any): CalcMultiplication<any, any> {
  return {
    [NAMESPACE]: {
      type: 'CalcMultiplication',
      data: [x1, x2],
      valueConstructor: csubs,
      serializer: serializeWidthCalculationValue,
    },
  }
}

type WidthMultiplication =
  | CalcMultiplication<LengthPercentage | WidthCalculation | Env, number>
  | CalcMultiplication<number, LengthPercentage | WidthCalculation | Env>

type WidthDivision = CalcDivision<LengthPercentage | WidthCalculation | Env>

type WidthAddition = CalcAddition<LengthPercentage | WidthCalculation | Env>

type WidthSubstraction = CalcSubstraction<
  LengthPercentage | WidthCalculation | Env
>

export type WidthCalculation =
  | WidthSubstraction
  | WidthMultiplication
  | WidthDivision
  | WidthAddition

const getOpSign = (x: string) => {
  switch (x) {
    case 'CalcAddition':
      return '+'
    case 'CalcSubstraction':
      return '-'
    case 'CalcMultiplication':
      return '*'
    case 'CalcDivision':
      return '/'
    default:
      throw new Error('Unkown')
  }
}

export const isCalculation = (x: any): x is WidthCalculation => {
  const typeName = getTypeName(x)
  return (
    typeName === 'CalcAddition' ||
    typeName === 'CalcSubstraction' ||
    typeName === 'CalcMultiplication' ||
    typeName === 'CalcDivision'
  )
}

const serializeWidthCalculationOperand = (
  x: WidthCalculation | number | LengthPercentage | Env
): string => serializeAtomicValue(x)

const serializeWidthCalculationValue = (x: WidthCalculation): string =>
  `calc(${serializeWidthCalculationOperand(x[NAMESPACE].data[0])} ${getOpSign(
    getTypeName(x)
  )} ${serializeWidthCalculationOperand(x[NAMESPACE].data[1])})`

export const serializeWidthCalculation = (x: WidthCalculation): string =>
  `calc(${serializeWidthCalculationValue(x)})`
