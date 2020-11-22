import {
  getData,
  getTypeName,
  getValConstructor,
  NAMESPACE,
} from './shared'

/**
 *
 * A type that maps to CSS's **`<Duration>`** type.
 * @added 0.2.1
 */
export interface Duration<A extends 'milliseconds' | 'seconds' | 'any' = any> {
  [NAMESPACE]: {
    unit: A extends 'milliseconds' ? 'milliseconds' 
    : A extends 'seconds'
    ? 'seconds'
    : ('seconds' | 'milliseconds')
    data: number
    type: 'Duration'
    valueConstructor: (x: number) => Duration<any>
    serializer: (x: Duration<A>) => string
  }
  toNum: (x: Duration) => number
  eq: (x: Duration, y: Duration) => boolean
}

const toNum = (x: Duration): number => x[NAMESPACE].data
const eq = (x: Duration, y: Duration): boolean => {
  return getData(toMilliseconds(x)) === getData(toMilliseconds(y))
}

export const serializeDuration = (x: Duration<any>): string => {
  const unit = getValConstructor(x) === s ? 's' : 'ms'
  return `${getData(x)}${unit}`
}

/**
 * Constructs a value of type **`Duration`** where the unit is **`seconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const s = (x: number): Duration<'seconds'> => ({
  [NAMESPACE]: {
    unit: 'seconds',
    type: 'Duration',
    data: x,
    valueConstructor: s,
    serializer: serializeDuration,
  },
  toNum,
  eq
})

/**
 * Constructs a value of type **`Duration`** where the unit is **`milliseconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = (x: number): Duration<'milliseconds'> => ({
  [NAMESPACE]: {
    type: 'Duration',
    unit: 'milliseconds',
    data: x,
    valueConstructor: ms,
    serializer: serializeDuration,
  },
  toNum,
  eq
})

export const toSeconds = (x: Duration): Duration<'seconds'> => {
  const value = x[NAMESPACE].unit === 'seconds' ? toNum(x) : toNum(x) / 1000
  return s(value)
}

export const toMilliseconds = (x: Duration): Duration<'milliseconds'> => {
  const value = x[NAMESPACE].unit === 'milliseconds' ? toNum(x) : toNum(x) * 1000
  return ms(value)
}

export const isDuration = (x: any): x is Duration =>
  getTypeName(x) === 'Duration'
