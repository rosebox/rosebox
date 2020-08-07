/**
 *
 * A type that maps to CSS's **`<length>`** type.
 * @added 0.1.0
 */
export interface Decibel {
  __tag: 'Decibel'
  value: number
}

export const db = (x: number): Decibel => ({
  __tag: 'Decibel',
  value: x,
})

export const isDecibel = (x: any): x is Decibel => x.__tag === 'Decibel'

export const serializeDecibel = (x: Decibel): string => `${x.value}dB`
