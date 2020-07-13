/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export interface CustomIdent {
  __tag: 'CustomIdent'
  value: string
}

/**
 * Constructs a value of type **`CustomIdent`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const ident = (x: string): CustomIdent => ({
  __tag: 'CustomIdent',
  value: x,
})

export const serializeCustomIdent = (value: CustomIdent): string =>
  `${value.value}`
