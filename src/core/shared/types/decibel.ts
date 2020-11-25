import { getData, RBType } from './shared'

/**
 *
 * A type that maps to CSS's **`<decibel>`** type.
 * @added 0.1.0
 */
export interface Decibel extends RBType<'Decibel', number> {}

export const db = (x: number): Decibel => ({
    type: 'Decibel',
    data: x,
    valueConstructor: db,
    serialize: serializeDecibel,
})

export const isDecibel = (x: any): x is Decibel => x.__tag === 'Decibel'

export const serializeDecibel = (x: Decibel): string => `${getData(x)}dB`
