import {
  getData,
  getValConstructor,
  RBType,
  getSerializer,
} from './shared'

/**
 * A type that maps to CSS's **`<angle>`** type.
 */
export interface Angle extends RBType<'Angle', number> {}

export const isAngle = (x: any): x is Angle => x?.type === 'Angle'

/**
 * Constructs a value of type **`Angle`** where the unit is **`deg`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const deg = (x: number): Angle => ({
  type: 'Angle',
  valueConstructor: deg,
  data: x,
  serialize: serializeDeg,
})

export const isDeg = (value: Angle): boolean => value.valueConstructor === deg

const serializeDeg = (x: Angle): string => `${getData(x)}deg`

/**
 * Constructs a value of type **`Angle`** where the unit is **`grad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const grad = (x: number): Angle => ({
  type: 'Angle',
  valueConstructor: grad,
  data: x,
  serialize: serializeGrad,
})

export const isGrad = (x: Angle): boolean => getValConstructor(x) === grad

const serializeGrad = (x: Angle): string => `${getData(x)}grad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`rad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rad = (x: number): Angle => ({
    type: 'Angle',
    valueConstructor: rad,
    data: x,
    serialize: serializeRad,
})

export const isRad = (x: Angle): boolean => getValConstructor(x) === rad

const serializeRad = (x: Angle): string => `${getData(x)}rad`

/**
 * Constructs a value of type **`Angle`** where the unit is **`turn`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const turn = (x: number): Angle => ({
    type: 'Angle',
    valueConstructor: turn,
    data: x,
    serialize: serializeTurn,
})

export const isTurn = (x: Angle): boolean => getValConstructor(x) === turn

const serializeTurn = (x: Angle): string => `${getData(x)}turn`

export const serializeAngle = (value: Angle): string =>
  getSerializer(value)(value)
