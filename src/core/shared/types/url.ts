/**
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export interface URL {
  __tag: 'URL'
  value: string
}

/**
 * A type that maps to CSS's **`<uri>`** type.
 * @added 0.1.96
 */
export interface URI {
  __tag: 'URI'
  value: string
}

/**
 * Constructs a value of type `URL`.
 * @category Value constructor
 * @added 0.1.96
 */
export const url = (x: string): URL => ({
  __tag: 'URL',
  value: x,
})

/**
 * Constructs a value of type `URL`.
 * @category Value constructor
 * @added 0.2.7
 */
export const uri = (x: string): URI => ({
  __tag: 'URI',
  value: x,
})

export const serializeURL = (x: URL) => `url(${x.value})`
export const serializeURI = (x: URI) => `uri(${x.value})`

export const isURL = (x: any): x is URL => x.__tag === 'URL'
export const isURI = (x: any): x is URI => x.__tag === 'URI'
