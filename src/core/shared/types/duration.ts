import {
  getData,
  getTypeName,
  getValConstructor,
  NAMESPACE,
  RBType,
} from './shared'

/**
 *
 * A type that maps to CSS's **`<Duration>`** type.
 * @added 0.2.1
 */
export interface Duration extends RBType<'Duration', number> {
  toNum: (x: Duration) => number
}

const toNum = (x: Duration): number => x[NAMESPACE].data

export const serializeDuration = (x: Duration): string => {
  const unit = getValConstructor(x) === s ? 's' : 'ms'
  return `${getData(x)}${unit}`
}

/**
 * Constructs a value of type **`Duration`** where the unit is **`seconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const s = (x: number): Duration => ({
  [NAMESPACE]: {
    type: 'Duration',
    data: x,
    valueConstructor: s,
    serializer: serializeDuration,
  },
  toNum,
})

/**
 * Constructs a value of type **`Duration`** where the unit is **`milliseconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = (x: number): Duration => ({
  [NAMESPACE]: {
    type: 'Duration',
    data: x,
    valueConstructor: ms,
    serializer: serializeDuration,
  },
  toNum,
})

export const isDuration = (x: any): x is Duration =>
  getTypeName(x) === 'Duration'
