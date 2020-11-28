import { RBType } from './shared'

/**
 * Constructs a value of type **`CustomIdent`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ident = (x: string): CustomIdent => new CustomIdent(x)

/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export class CustomIdent implements RBType<string> {
  data: string
  valueConstructor: Function
  constructor(data: string) {
    this.data = data
    this.valueConstructor = CustomIdent.ident
  }
  static ident = ident
  serialize() {
      return this.data
  }
}

