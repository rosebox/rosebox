import { getData, getTypeName, NAMESPACE, RBType } from './shared'

/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export interface Percentage extends RBType<'Percentage', number> {}

/**
 * Constructs a value of type **`Percentage`**.
 * @category Value constructor
 * @added 0.1.0
 */
export const per = (x: number): Percentage => ({
  [NAMESPACE]: {
    type: 'Percentage',
    data: x,
    valueConstructor: per,
  },
})

export const isPercentageType = (x: any): x is Percentage =>
  getTypeName(x) === 'Percentage'

export const serializePercentage = (x: Percentage): string => `${getData(x)}%`
