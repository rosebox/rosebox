import {
  getData,
  getTypeName,
  getValConstructor,
  NAMESPACE,
  RBType,
} from './shared'

/**
 *
 * A type that maps to CSS's **`<time>`** type.
 * @added 0.2.1
 */
export interface Time extends RBType<'Time', number> {}

export const serializeTime = (x: Time): string => {
  const unit = getValConstructor(x) === s ? 's' : 'ms'
  return `${getData(x)}${unit}`
}

/**
 * Constructs a value of type **`Time`** where the unit is **`seconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const s = (x: number): Time => ({
  [NAMESPACE]: {
    type: 'Time',
    data: x,
    valueConstructor: s,
    serializer: serializeTime,
  },
})

/**
 * Constructs a value of type **`Time`** where the unit is **`milliseconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = (x: number): Time => ({
  [NAMESPACE]: {
    type: 'Time',
    data: x,
    valueConstructor: ms,
    serializer: serializeTime,
  },
})

export const isTime = (x: any): x is Time => getTypeName(x) === 'Time'
