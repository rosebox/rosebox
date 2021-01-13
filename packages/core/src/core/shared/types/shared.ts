export interface RBType<B = any> {
    data: B
    valueConstructor: Function
    serialize: () => string
}

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

export const getData = <B>(x: RBType<B> | string | number): any => {
    if (typeof x === 'string') return x
    if (typeof x === 'number') return x
    return x.data
}

export const getValConstructor = <B>(x: RBType<B>) => x.valueConstructor

export const getSerializer = (x: RBType): Function => x.serialize

export const serializeAtomicValue = (
    x: string | number | null | undefined | RBType,
): string => {
    if (typeof x === 'number') return `${x}`
    if (typeof x === 'string') return x
    if (x === undefined || x === null) return ''
    return x.serialize()
}
