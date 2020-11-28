import { getData, RBType } from './shared'

export const serializeURL = (x: URL) => `url(${getData(x)})`
export const serializeURI = (x: URI) => `uri(${getData(x)})`

/**
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export class URL implements RBType<string> {
  data: string
  valueConstructor: Function

  private constructor(x: string) {
    this.data = x
    this.valueConstructor = URL.url
  }

  static url(x: string) {
    return new URL(x)
  }
  serialize = () => serializeURL(this)
}

export const url = URL.url
export const isURL = (x: any): x is URL => x instanceof URL

/**
 * A type that maps to CSS's **`<uri>`** type.
 * @added 0.1.96
 */
export class URI implements RBType<string> {
  data: string
  valueConstructor: Function

  private constructor(x: string) {
    this.data = x
    this.valueConstructor = URI.uri
  }

  static uri(x: string) {
    return new URI(x)
  }
  serialize = () => serializeURI(this)
}
export const uri = URI.uri
export const isURI = (x: any): x is URI => x instanceof URI
