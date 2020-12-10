export * from './derived-types'
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
export * from './math'
export * from './gradient'
export * from './image'

export type AtLeastOnePropRequired<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

export type ValueOrFunc<T> = T | ((x: any) => T)

export type PropType = 'css' | 'inline'

export const globalCssKeywords = <const>['inherit', 'initial', 'unset']

/**
 * @global
 */
export type GlobalCssKeyword = typeof globalCssKeywords[number]

export const isGlobalCssKeyword = (value: any): value is GlobalCssKeyword => globalCssKeywords.includes(value)

export const serializeKeyword = (value: string) => value
