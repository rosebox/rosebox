import { LengthPercentage, serializeLengthPercentage } from './shared'

/**
 * @internal
 */
interface CalcMultiplication<A, B> {
  __tag: 'calc-multiplication'
  operands: [A, B]
}

/**
 * @internal
 */
interface CaldAddition<A> {
  __tag: 'calc-addition'
  operands: [A, A]
}

/**
 * @internal
 */
interface CalcDivision<B = any> {
  __tag: 'calc-division'
  operands: [B, number]
}

/**
 * @internal
 */
interface CalcSubstraction<A> {
  __tag: 'calc-substraction'
  operands: [A, A]
}

export function cdiv(
  x1: LengthPercentage | WidthCalculation,
  x2: number
): CalcDivision {
  return {
    __tag: 'calc-division',
    operands: [x1, x2],
  }
}

// For Width/Length

export function csubs(
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CalcSubstraction<LengthPercentage | WidthCalculation> {
  return {
    __tag: 'calc-substraction',
    operands: [x1, x2],
  }
}

export function cadd(
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CaldAddition<LengthPercentage | WidthCalculation> {
  return {
    __tag: 'calc-addition',
    operands: [x1, x2],
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
    __tag: 'calc-multiplication',
    operands: [x1, x2],
  }
}

type WidthMultiplication =
  | CalcMultiplication<LengthPercentage | WidthCalculation, number>
  | CalcMultiplication<number, LengthPercentage | WidthCalculation>

type WidthDivision = CalcDivision<LengthPercentage | WidthCalculation>

type WidthAddition = CaldAddition<LengthPercentage | WidthCalculation>

type WidthSubstraction = CalcSubstraction<LengthPercentage | WidthCalculation>

export type WidthCalculation =
  | WidthSubstraction
  | WidthMultiplication
  | WidthDivision
  | WidthAddition

const getOpSign = (x: string) => {
  switch (x) {
    case 'calc-addition':
      return '+'
    case 'calc-substraction':
      return '-'
    case 'calc-multiplication':
      return '*'
    case 'calc-division':
      return '/'
    default:
      throw new Error('')
  }
}

export const isCalculation = (x: any): x is WidthCalculation =>
  x.__tag === 'calc-addition' ||
  x.__tag === 'calc-substraction' ||
  x.__tag === 'calc-multiplication' ||
  x.__tag === 'calc-division'

const serializeWidthCalculationOperand = (
  x: WidthCalculation | number | LengthPercentage
): string =>
  isCalculation(x)
    ? `(${serializeWidthCalculationValue(x)})`
    : typeof x === 'number'
    ? `${x}`
    : serializeLengthPercentage(x)

const serializeWidthCalculationValue = (x: WidthCalculation): string =>
  `${serializeWidthCalculationOperand(x.operands[0])} ${getOpSign(
    x.__tag
  )} ${serializeWidthCalculationOperand(x.operands[1])}`

export const serializeWidthCalculation = (x: WidthCalculation): string =>
  `calc(${serializeWidthCalculationValue(x)})`
