type TimeUnit = 's' | 'ms'

/**
 *
 * A type that maps to CSS's **`<time>`** type.
 * @added 0.2.1
 */
export interface Time {
  __tag: 'Time'
  value: [number, TimeUnit]
}

/**
 * Constructs a value of type **`Time`** where the unit is **`seconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const s = (x: number): Time => ({
  __tag: 'Time',
  value: [x, 's'],
})

/**
 * Constructs a value of type **`Time`** where the unit is **`milliseconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = (x: number): Time => ({
  __tag: 'Time',
  value: [x, 'ms'],
})

export const isTime = (value: any): value is Time => value.__tag === 'Time'

export const serializeTime = (value: Time): string =>
  `${value.value[0]}${value.value[1]}`
