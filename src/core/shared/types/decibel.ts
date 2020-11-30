import { RBType } from './shared'

/**
 *
 * A type that maps to CSS's **`<decibel>`** type.
 * @added 0.1.0
 */
export class Decibel implements RBType<number> {
  valueConstructor: Function
  data: number

  private constructor(data: number) {
    this.data = data
    this.valueConstructor = Decibel.db
  }

  static db(x: number): Decibel {
      return new Decibel(x)
  }

  serialize(): string {
    return `${this.data}dB`
  }
}

  /** @category Value constructor */
export const db = Decibel.db
export const isDecibel = (x: any): x is Decibel => x instanceof Decibel
