import { LengthPercentage, serializeLengthPercentage } from './shared'

interface CalcMultiplication<A, B> {
  __tag: 'multiplication'
  operands: [A, B]
}

interface CalcAddition<A> {
  __tag: 'addition'
  operands: [A, A]
}

interface CalcDivision<B = any> {
  __tag: 'division'
  operands: [B, number]
}

interface CalcSubstraction<A> {
  __tag: 'substraction'
  operands: [A, A]
}

export function div(
  x1: LengthPercentage | WidthCalculation,
  x2: number
): CalcDivision {
  return {
    __tag: 'division',
    operands: [x1, x2],
  }
}

// For Width/Length

export function subs(
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CalcSubstraction<LengthPercentage | WidthCalculation> {
  return {
    __tag: 'substraction',
    operands: [x1, x2],
  }
}

export function add(
  x1: LengthPercentage | WidthCalculation,
  x2: LengthPercentage | WidthCalculation
): CalcAddition<LengthPercentage | WidthCalculation> {
  return {
    __tag: 'addition',
    operands: [x1, x2],
  }
}

export function multi(
  x1: number,
  x2: LengthPercentage | WidthCalculation
): CalcMultiplication<number, LengthPercentage | WidthCalculation>

// For Width/Length
export function multi(
  x1: LengthPercentage | WidthCalculation,
  x2: number
): CalcMultiplication<LengthPercentage | WidthCalculation, number>

// The resolve type is number or integer
export function multi(
  x1: number,
  x2: number
): CalcMultiplication<number, number>

export function multi(x1: any, x2: any): CalcMultiplication<any, any> {
  return {
    __tag: 'multiplication',
    operands: [x1, x2],
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
    case 'addition':
      return '+'
    case 'substraction':
      return '-'
    case 'multiplication':
      return '*'
    case 'division':
      return '/'
    default:
      throw new Error('')
  }
}

export const isCalculation = (x: any): x is WidthCalculation =>
  x.__tag === 'addition' ||
  x.__tag === 'substraction' ||
  x.__tag === 'multiplication' ||
  x.__tag === 'division'

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
