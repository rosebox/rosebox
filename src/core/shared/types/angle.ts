import { NAMESPACE, RBType } from './shared'

const getVal = <A>(x: RBType<A>) => x[NAMESPACE].value
const getValConstructor = <A>(x: RBType<A>) => x[NAMESPACE].valueConstructor

/**
 * A type that maps to CSS's **`<angle>`** type.
 * @added 0.2.3
 */
export interface Angle {
  [NAMESPACE]: {
    type: 'Angle'
    valueConstructor: Function
    value: number
  }
}

export const isAngle = (value: any): value is Angle =>
  value[NAMESPACE]?.type === 'Angle'

/**
 * Constructs a value of type **`Angle`** where the unit is **`deg`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const deg = (value: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: deg,
    value,
  },
})

const isDeg = (value: Angle): boolean =>
  value[NAMESPACE].valueConstructor === deg

const serializeDeg = (value: Angle): string => `${getVal(value)}deg`

/**
 * Constructs a value of type **`Angle`** where the unit is **`grad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const grad = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: grad,
    value: x,
  },
})

const isGrad = (x: Angle): boolean => getValConstructor(x) === grad

const serializeGrad = (x: Angle): string => `${getVal(x)}grad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`rad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rad = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: rad,
    value: x,
  },
})

const isRad = (x: Angle): boolean => getValConstructor(x) === rad

const serializeRad = (x: Angle): string => `${getVal(x)}rad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`turn`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const turn = (value: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: turn,
    value,
  },
})

const isTurn = (x: Angle): boolean => getValConstructor(x) === turn

const serializeTurn = (x: Angle): string => `${getVal(x)}turn`

export const serializeAngle = (value: Angle): string => {
  if (isDeg(value)) return serializeDeg(value)
  else if (isGrad(value)) return serializeGrad(value)
  else if (isRad(value)) return serializeRad(value)
  else if (isTurn(value)) return serializeTurn(value)
  else throw new Error('Value is not of type Angle')
}
