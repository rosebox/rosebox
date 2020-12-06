import { RBType } from './shared'

const serializePercentage = (x: Percentage): string => `${x.data}%`

/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export class Percentage implements RBType<number> {
  valueConstructor: Function
  public data: number
  serialize: () => string

  private constructor(data: number) {
    this.data = data
    this.valueConstructor = Percentage.per
    this.serialize = () => serializePercentage(this)
    
  }

  /**
   * Constructs a value of type `Percentage`.
   */
  static per(x: number) {
    return new Percentage(x)
  }

}

export const per = Percentage.per

export const isPercentageType = (x: any): x is Percentage => x instanceof Percentage

