import { Setoid } from './math'

const serialize = (x: Duration<any>): string => {
    const unitSuffix = x.unit === 'ms' ? 'ms' : 's'
    return `${x.data}${unitSuffix}`
}

export const toSeconds = (x: Duration): Duration<'s'> => {
    const value = x.unit === 's' ? x.data : x.data / 1000
    return Duration.s(value)
}

export const toMilliseconds = (x: Duration): Duration<'ms'> => {
    const value = x.unit === 'ms' ? x.data : x.data * 1000
    return Duration.ms(value)
}

/** @ignore */
const eq = (x: any, y: any): boolean => {
    return toMilliseconds(x).data === toMilliseconds(y).data
}

/** @ignore */
const add = (x1: Duration, x2: Duration): Duration<'ms'> => {
    const x1ms = x1.unit === 'ms' ? x1.data : x1.data * 1000
    const x2m2 = x2.unit === 'ms' ? x2.data : x2.data * 1000
    return ms(x1ms + x2m2)
}

/** @ignore */
const sub = (x1: Duration, x2: Duration): Duration<'ms'> => {
    const x1ms = x1.unit === 'ms' ? x1.data : x1.data * 1000
    const x2m2 = x2.unit === 'ms' ? x2.data : x2.data * 1000
    return ms(x1ms - x2m2)
}

export type DurationUnit = 'ms' | 's'

/**
 *
 * A type that maps to CSS's **`<time>`** type.
 * @added 0.1.0
 */
export class Duration<A extends DurationUnit = DurationUnit>
    implements Setoid<Duration<A>> {
    valueConstructor: Function
    public unit: A
    public data: number
    serialize: () => string

    private constructor(unit: A, data: number) {
        this.unit = unit
        this.data = data
        this.valueConstructor = unit === 'ms' ? Duration.ms : Duration.s
        this.serialize = () => serialize(this)
    }

    /**
     * Constructs a value of type **`Duration<'ms'>`**
     */
    static ms(x: number): Duration<'ms'> {
        return new Duration('ms', x)
    }
    /**
     * Constructs a value of type **`Duration<'s'>`**
     */
    static s(x: number): Duration<'s'> {
        return new Duration('s', x)
    }

    eq = eq
    mult = mult
    add = add
    sub = sub
}

/**
 * Constructs a value of type **`Duration<'ms'>`** where the unit is **`ms`**.
 * @category Value constructor
 */
export const ms = Duration.ms

/**
 * Constructs a value of type **`Duration<'s'>`** where the unit is **`s`**.
 * @category Value constructor
 */
export const s = Duration.s

export const isDuration = (x: any): x is Duration => x instanceof Duration

function mult(x: any, y: any): Duration {
    const val = isDuration(x) ? x.data * y : (y as Duration).data * x
    const valueConstructor = x?.valueConstructor ?? y?.valueConstructor
    return valueConstructor(val)
}
