import {
  getTypeName,
  LengthPercentage,
  NAMESPACE,
  RBType,
  serializeLengthPercentage,
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
  x1: LengthPercentage | WidthCalculation,
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
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CalcSubstraction<LengthPercentage | WidthCalculation> {
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
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CalcAddition<LengthPercentage | WidthCalculation> {
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
  x2: LengthPercentage | WidthCalculation
): CalcMultiplication<number, LengthPercentage | WidthCalculation>

// For Width/Length
export function cmulti(
  x1: LengthPercentage | WidthCalculation,
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
  | CalcMultiplication<LengthPercentage | WidthCalculation, number>
  | CalcMultiplication<number, LengthPercentage | WidthCalculation>

type WidthDivision = CalcDivision<LengthPercentage | WidthCalculation>

type WidthAddition = CalcAddition<LengthPercentage | WidthCalculation>

type WidthSubstraction = CalcSubstraction<LengthPercentage | WidthCalculation>

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
  x: WidthCalculation | number | LengthPercentage
): string =>
  isCalculation(x)
    ? `(${serializeWidthCalculationValue(x)})`
    : typeof x === 'number'
    ? `${x}`
    : serializeLengthPercentage(x)

const serializeWidthCalculationValue = (x: WidthCalculation): string =>
  `calc(${serializeWidthCalculationOperand(x[NAMESPACE].data[0])} ${getOpSign(
    getTypeName(x)
  )} ${serializeWidthCalculationOperand(x[NAMESPACE].data[1])})`

export const serializeWidthCalculation = (x: WidthCalculation): string =>
  `calc(${serializeWidthCalculationValue(x)})`
