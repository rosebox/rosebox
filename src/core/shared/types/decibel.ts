import { RBType } from './shared'

/**
 *
 * A type that maps to CSS's **`<decibel>`** type.
 * @added 0.1.0
 */
export class Decibel implements RBType<number> {
  valueConstructor: Function
  data: number

  constructor(data: number) {
    this.data = data
    this.valueConstructor = Decibel.db
  }
  /** @valueConstructor */
  static db(x: number): Decibel {
      return new Decibel(x)
  }

  serialize(): string {
    return `${this.data}dB`
  }
}

export const db = Decibel.db
export const isDecibel = (x: any): x is Decibel => x instanceof Decibel
