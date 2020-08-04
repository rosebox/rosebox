// interface CalcAddition<T> {
//   __tag: 'addition'
//   operands: [CalcProduct<T> | CalcValue<T>, CalcProduct<T> | CalcValue<T>]
// }

// interface CalcSubstraction<T> {
//   __tag: 'substraction'
//   operands: [CalcProduct<T> | CalcValue<T>, CalcProduct<T> | CalcValue<T>]
// }

// type CalcProduct<A, B> = CalcMultiplication<A, B>
/*
const divide = (x1: CalcValue, x2: number): CalcDivision => ({
  __tag: 'division',
  operands: [x1, x2],
})



const add = (x1: CalcProduct, x2: CalcProduct): CalcAddition => ({
  __tag: 'addition',
  operands: [x1, x2],
})

*/

// const subs = <T>(
//   x1: CalcProduct<T> | CalcValue<T>,
//   x2: CalcProduct<T> | CalcValue<T>
// ): CalcSubstraction<T> => ({
//   __tag: 'substraction',
//   operands: [x1, x2],
// })

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
  operands: [LengthPercentage | WidthMultiplication | CalcDivision, number]
}

function divide(
  x1: LengthPercentage | WidthMultiplication | CalcDivision,
  x2: number
): CalcDivision {
  return {
    __tag: 'division',
    operands: [x1, x2],
  }
}

// For Width/Length

function add(
  x1: LengthPercentage | WidthMultiplication | WidthDivision,
  x2: LengthPercentage | WidthMultiplication | WidthDivision
): CalcAddition<LengthPercentage | WidthMultiplication | WidthDivision> {
  return {
    __tag: 'addition',
    operands: [x1, x2],
  }
}

add(per(100), multi(per(100), 3))

function multi(
  x1: number,
  x2: LengthPercentage | WidthMultiplication | WidthDivision
): CalcMultiplication<
  number,
  LengthPercentage | WidthMultiplication | WidthDivision
>

// For Width/Length
function multi(
  x1: LengthPercentage | WidthMultiplication | WidthDivision,
  x2: number
): CalcMultiplication<
  LengthPercentage | WidthMultiplication | WidthDivision,
  number
>

// The resolve type is number or integer
function multi(x1: number, x2: number): CalcMultiplication<number, number>

function multi(x1: any, x2: any): CalcMultiplication<any, any> {
  return {
    __tag: 'multiplication',
    operands: [x1, x2],
  }
}

type WidthMultiplication =
  | CalcMultiplication<
      LengthPercentage | WidthMultiplication | WidthDivision,
      number
    >
  | CalcMultiplication<
      number,
      LengthPercentage | WidthMultiplication | WidthDivision
    >

type WidthDivision = CalcDivision<
  LengthPercentage | WidthMultiplication | WidthDivision
>

type WidthAddition = CalcAddition<
  LengthPercentage | WidthMultiplication | WidthDivision
>

type WidthCalculation = WidthMultiplication | WidthDivision | WidthAddition

type StyleTest = {
  width?: WidthCalculation
  height?: WidthCalculation
  height2?: WidthCalculation
  height3?: WidthCalculation
}

const t1: StyleTest = {
  width: multi(vw(100), 3),
}

const t2: StyleTest = {
  width: divide(multi(3, per(100)), 3),
}

const t3: StyleTest = {
  width: multi(3, per(100)),
  height: multi(divide(per(100), 7), 3),
  height2: divide(multi(per(100), 0.2), 2),
  height3: add(per(100), px(100)),
}
