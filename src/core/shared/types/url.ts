import { getData, getTypeName, NAMESPACE, RBType } from './shared'

/**
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export interface URL extends RBType<'URL', string> {}

/**
 * A type that maps to CSS's **`<uri>`** type.
 * @added 0.1.96
 */
export interface URI extends RBType<'URI', string> {}

/**
 * Constructs a value of type `URL`.
 * @category Value constructor
 * @added 0.1.96
 */
export const url = (x: string): URL => ({
  [NAMESPACE]: {
    type: 'URL',
    data: x,
    valueConstructor: url,
  },
})

/**
 * Constructs a value of type `URL`.
 * @category Value constructor
 * @added 0.2.7
 */
export const uri = (x: string): URI => ({
  [NAMESPACE]: {
    type: 'URI',
    data: x,
    valueConstructor: uri,
  },
})

export const serializeURL = (x: URL) => `url(${getData(x)})`
export const serializeURI = (x: URI) => `uri(${getData(x)})`

export const isURL = (x: any): x is URL => getTypeName(x) === 'URL'
export const isURI = (x: any): x is URI => getTypeName(x) === 'URI'
