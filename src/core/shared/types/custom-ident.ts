import { RBType, getData } from './shared'

/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export interface CustomIdent extends RBType<'CustomIdent', string> {}

/**
 * Constructs a value of type **`CustomIdent`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ident = (x: string): CustomIdent => ({
    type: 'CustomIdent',
    data: x,
    valueConstructor: ident,
    serialize: serializeCustomIdent,
})

export const serializeCustomIdent = getData
