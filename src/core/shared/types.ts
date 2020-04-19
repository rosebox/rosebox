export type LengthUnit =
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'px'


type TimeUnit = 's' | 'ms'

/**
*
* A type that maps to CSS's **`<time>`** type.
* @added 0.2.1
*/
export interface Time {
  __tag: 'Time'
  value: [number, TimeUnit]
}
/**
 *
 * A type that maps to CSS's **`<length>`** type.
 * @added 0.1.0
 */
export interface Length {
  __tag: 'Length'
  value: [number, LengthUnit]
}

/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export interface Percentage {
  __tag: 'Percentage'
  value: number
}

export const globalCssKeywords = <const>['inherit', 'initial', 'unset']
/**
 * @global
 */
export type GlobalCssKeyword = typeof globalCssKeywords[number]

/**
 * @global
 */
export type LengthPercentage = Length | Percentage

/**
 * @global
 */
export type Width = LengthPercentage | 'auto'

/**
 * @global
 */
export type LineWidth = Length | 'thin' | 'medium' | 'thick'

/**
 * @global
 */
export type LineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

/**
 *
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export interface URL {
  __tag: 'URL'
  value: string
}

/** Type-guard */
export const isPercentageType = (value: any): value is Percentage =>
  value.__tag === 'Percentage'
/** Type-guard */
export const isLengthType = (value: any): value is Length =>
  value.__tag === 'Length'
/** Type-guard */
export const isWidthType = (value: any): value is Width =>
  isLengthType(value) || isPercentageType(value) || value === 'auto'
/** Type-guard */
export const isGlobalCssKeyword = (value: any): value is GlobalCssKeyword =>
  globalCssKeywords.includes(value)
