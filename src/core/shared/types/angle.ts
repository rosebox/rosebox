import { RBType } from './shared'

type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn'

/**
 * A type that maps to CSS's **`<angle>`** type.
 */
export class Angle<A extends AngleUnit | void = void> implements RBType<number> {
  valueConstructor: Function
  data: number
  unit: AngleUnit

  private constructor(
    data: number,
    unit: AngleUnit,
    valConstructor: (x: number) => Angle<A>
  ) {
    this.unit = unit
    this.data = data
    this.valueConstructor = valConstructor
  }
  /** 
   * Constructs a value of type **`Angle`** where the unit is **`deg`**.
   */
  static deg = (x: number): Angle<'deg'> => new Angle(x, 'deg', Angle.deg)
  /**
   * Constructs a value of type **`Angle`** where the unit is **`turn`**.
   */
  static turn = (x: number): Angle<'turn'> => new Angle(x, 'turn', Angle.turn)
  /**
   *  Constructs a value of type **`Angle`** where the unit is **`grad`**.
  */
  static grad = (x: number): Angle<'grad'> => new Angle(x, 'deg', Angle.grad)
  /**
   * Constructs a value of type **`Angle`** where the unit is **`rad`**.
  */
  static rad = (x: number): Angle<'rad'> => new Angle(x, 'rad', Angle.rad)

  serialize() {
    if (this.unit === 'deg') return `${this.data}deg`
    if (this.unit === 'rad') return `${this.data}rad`
    if (this.unit === 'grad') return `${this.data}grad`
    return `${this.data}turn`
  }
}

/**
 * Constructs a value of type **`Angle`** where the unit is **`grad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const grad = Angle.grad
/**
 * Constructs a value of type **`Angle`** where the unit is **`turn`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const turn = Angle.turn

/**
 * Constructs a value of type **`Angle`** where the unit is **`deg`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const deg = Angle.deg

/**
 * Constructs a value of type **`Angle`** where the unit is **`rad`**.
 * @category Value constructor
 * @added 0.2.3
 */
export const rad = Angle.rad

export const isAngle = (x: any): x is Angle => x instanceof Angle
export const isDeg = (x: Angle): boolean => isAngle(x) && x.unit === 'deg'
export const isGrad = (x: any): boolean => isAngle(x) && x.unit === 'grad'
export const isRad = (x: Angle): boolean => isAngle(x) && x.unit === 'rad'
export const isTurn = (x: Angle): boolean => isAngle(x) && x.unit === 'turn'
