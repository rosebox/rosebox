/**
 * A type that maps to CSS's **`<angle>`** type.
 * @added 0.2.3
 */
export interface Angle {
  type: 'Angle'
  valueConstructor: Function
  value: number
}

export const isAngle = (value: any): value is Angle => value.type === 'Angle'

/**
 * Constructs a value of type **`Angle`** where the unit is **`deg`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const deg = (value: number): Angle => ({
  type: 'Angle',
  valueConstructor: deg,
  value
})

const isDeg = (value: Angle): boolean => value.valueConstructor === deg

const serializeDeg = (value: Angle): string => `${value.value}deg`

/**
 * Constructs a value of type **`Angle`** where the unit is **`grad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const grad = (value: number): Angle => ({
  type: 'Angle',
  valueConstructor: grad,
  value
})

const isGrad = (value: Angle): boolean => value.valueConstructor === grad

const serializeGrad = (value: Angle): string => `${value.value}grad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`rad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rad = (value: number): Angle => ({
  type: 'Angle',
  valueConstructor: rad,
  value
})

const isRad = (value: Angle): boolean => value.valueConstructor === rad

const serializeRad = (value: Angle): string => `${value.value}rad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`turn`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const turn = (value: number): Angle => ({
  type: 'Angle',
  valueConstructor: turn,
  value
})

const isTurn = (value: Angle): boolean => value.valueConstructor === turn

const serializeTurn = (value: Angle): string => `${value.value}turn`

export const serializeAngle = (value: Angle): string => {
  if (isDeg(value)) return serializeDeg(value)
  else if (isGrad(value)) return serializeGrad(value)
  else if (isRad(value)) return serializeRad(value)
  else if (isTurn(value)) return serializeTurn(value)
  else throw new Error('Value is not of type Angle')
}
