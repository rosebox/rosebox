import { Setoid } from './math'

export const serialize = (x: Duration<any>): string => {
  const unitSuffix = x.unit === 'milliseconds' ? 'ms' : 's'
  return `${x.data}${unitSuffix}`
}

export const toSeconds = (x: Duration): Duration<'seconds'> => {
  const value = x.unit === 'seconds' ? x.data : x.data / 1000
  return Duration.s(value)
}

export const toMilliseconds = (x: Duration): Duration<'milliseconds'> => {
  const value = x.unit === 'milliseconds' ? x.data : x.data * 1000
  return Duration.ms(value)
}

const eq = (x: any, y: any): boolean => {
  return toMilliseconds(x).data === toMilliseconds(y).data
}

const add = (x1: Duration, x2: Duration): Duration<'milliseconds'> => {
  const x1ms = x1.unit === 'milliseconds' ? x1.data : x1.data * 1000
  const x2m2 = x2.unit === 'milliseconds' ? x2.data : x2.data * 1000
  return ms(x1ms + x2m2)
}

const sub = (x1: Duration, x2: Duration): Duration<'milliseconds'> => {
  const x1ms = x1.unit === 'milliseconds' ? x1.data : x1.data * 1000
  const x2m2 = x2.unit === 'milliseconds' ? x2.data : x2.data * 1000
  return ms(x1ms - x2m2)
}

export type DurationUnit = 'milliseconds' | 'seconds'

/**
 *
 * A type that maps to CSS's **`<time>`** type.
 * @added 0.1.0
 */
export class Duration<A extends 'milliseconds' | 'seconds' | 'any' = any>
  implements Setoid<Duration<A>> {
  valueConstructor: Function
  public unit: A
  public data: number
  private constructor(unit: A, data: number) {
    this.unit = unit
    this.data = data
    this.valueConstructor = unit === 'milliseconds' ? Duration.ms : Duration.s
  }

  /** @category Value constructor */
  static ms(x: number): Duration<'milliseconds'> {
    return new Duration('milliseconds', x)
  }
  /** @category Value constructor */
  static s(x: number): Duration<'seconds'> {
    return new Duration('seconds', x)
  }

  serialize(): string {
    return serialize(this)
  }
  eq = eq
  mult = mult
  add = add
  sub = sub
}

/**
 * Constructs a value of type **`Duration`** where the unit is **`milliseconds`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ms = Duration.ms

/**
 * Constructs a value of type **`Duration`** where the unit is **`seconds`**.
 * @category Value constructor
 * @added 0.2.1
 */

export const s = Duration.s

export const isDuration = (x: any): x is Duration => x instanceof Duration

function mult(x: any, y: any): Duration {
  const val = isDuration(x) ? x.data * y : (y as Duration).data * x
  const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
  return valueConstructor(val)
}
