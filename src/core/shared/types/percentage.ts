/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export interface Percentage {
  __tag: 'Percentage'
  value: number
}

/**
 * Constructs a value of type **`Percentage`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const per = (x: number): Percentage => ({
  __tag: 'Percentage',
  value: x,
})

/** Type-guard */
export const isPercentageType = (value: any): value is Percentage =>
  value.__tag === 'Percentage'
