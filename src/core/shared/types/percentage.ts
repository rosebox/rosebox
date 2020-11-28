import { RBType } from './shared'

const serializePercentage = (x: Percentage): string => `${x.data}%`

/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export class Percentage implements RBType<number> {
  valueConstructor: Function
  public data: number

  private constructor(data: number) {
    this.data = data
    this.valueConstructor = Percentage.per
  }

  static per(x: number) {
    return new Percentage(x)
  }

  serialize() {
    return serializePercentage(this)
  }
}

export const per = Percentage.per

export const isPercentageType = (x: any): x is Percentage => x instanceof Percentage

