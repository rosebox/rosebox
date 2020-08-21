import { NAMESPACE, getData, getValConstructor } from './shared'

/**
 * A type that maps to CSS's **`<angle>`** type.
 */
export interface Angle {
  [NAMESPACE]: {
    type: 'Angle'
    valueConstructor: Function
    data: number
  }
}

export const isAngle = (x: any): x is Angle => x[NAMESPACE]?.type === 'Angle'

/**
 * Constructs a value of type **`Angle`** where the unit is **`deg`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const deg = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: deg,
    data: x,
  },
})

const isDeg = (value: Angle): boolean =>
  value[NAMESPACE].valueConstructor === deg

const serializeDeg = (x: Angle): string => `${getData(x)}deg`

/**
 * Constructs a value of type **`Angle`** where the unit is **`grad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const grad = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: grad,
    data: x,
  },
})

const isGrad = (x: Angle): boolean => getValConstructor(x) === grad

const serializeGrad = (x: Angle): string => `${getData(x)}grad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`rad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rad = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: rad,
    data: x,
  },
})

const isRad = (x: Angle): boolean => getValConstructor(x) === rad

const serializeRad = (x: Angle): string => `${getData(x)}rad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`turn`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const turn = (x: number): Angle => ({
  [NAMESPACE]: {
    type: 'Angle',
    valueConstructor: turn,
    data: x,
  },
})

const isTurn = (x: Angle): boolean => getValConstructor(x) === turn

const serializeTurn = (x: Angle): string => `${getData(x)}turn`

export const serializeAngle = (value: Angle): string => {
  if (isDeg(value)) return serializeDeg(value)
  else if (isGrad(value)) return serializeGrad(value)
  else if (isRad(value)) return serializeRad(value)
  else if (isTurn(value)) return serializeTurn(value)
  else throw new Error('Value is not of type Angle')
}
