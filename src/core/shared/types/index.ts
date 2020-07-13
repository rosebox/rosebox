export * from './position'
export * from './time'
export * from './percentage'
export * from './length'
export * from './width'
export * from './url'
export * from './custom-ident'
export * from './shared'

export const globalCssKeywords = <const>['inherit', 'initial', 'unset']

/**
 * @global
 */
export type GlobalCssKeyword = typeof globalCssKeywords[number]

export const isGlobalCssKeyword = (value: any): value is GlobalCssKeyword =>
  globalCssKeywords.includes(value)
