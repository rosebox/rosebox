export * from './position'
export * from './duration'
export * from './percentage'
export * from './length'
export * from './width'
export * from './url'
export * from './custom-ident'
export * from './shared'
export * from './angle'
export * from './timing-function'
export * from './calc'
export * from './decibel'
export * from './generated-types'
export * from './color'
export * from './env'

export const globalCssKeywords = <const>['inherit', 'initial', 'unset']

/**
 * @global
 */
export type GlobalCssKeyword = typeof globalCssKeywords[number]

export const isGlobalCssKeyword = (value: any): value is GlobalCssKeyword =>
  globalCssKeywords.includes(value)

export const serializeKeyword = (value: string) => value
