import { RBType } from './shared'

/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export class CustomIdent implements RBType<string> {
  data: string
  valueConstructor: Function
  private constructor(data: string) {
    this.data = data
    this.valueConstructor = CustomIdent.ident
  }
  /**
   * * @category Value constructor
   */
  static ident(x: string): CustomIdent {
    return new CustomIdent(x)
  }
  serialize() {
      return this.data
  }
}

export const ident = CustomIdent.ident
