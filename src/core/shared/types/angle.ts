import {
  NAMESPACE,
  getData,
  getValConstructor,
  RBType,
  getSerializer,
} from './shared'

/**
 * A type that maps to CSS's **`<angle>`** type.
 */
export interface Angle extends RBType<'Angle', number> {}

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
    serializer: serializeDeg,
  },
})

export const isDeg = (value: Angle): boolean =>
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
    serializer: serializeGrad,
  },
})

export const isGrad = (x: Angle): boolean => getValConstructor(x) === grad

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
    serializer: serializeRad,
  },
})

export const isRad = (x: Angle): boolean => getValConstructor(x) === rad

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
    serializer: serializeTurn,
  },
})

export const isTurn = (x: Angle): boolean => getValConstructor(x) === turn

const serializeTurn = (x: Angle): string => `${getData(x)}turn`

export const serializeAngle = (value: Angle): string =>
  getSerializer(value)(value)
