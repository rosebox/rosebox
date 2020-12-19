import { RBType, serializeAtomicValue } from '../types'

export * from './math'

type AtomicType = number | string | RBType

export const serializeHashMultiplier = (x: AtomicType[]): string => {
    return x.reduce<string>((acc, item, idx) => {
        const itemSerialized = serializeAtomicValue(item)
        return idx !== x.length - 1 ? acc + `${itemSerialized}, ` : acc + itemSerialized
    }, '')
}

export const serializeDoubleBar = <A>(x: A[], serializer?: (x: A) => string): string =>
    x.reduce((acc: string, item) => acc + ' ' + (serializer ? serializer(item) : item), '').trim()
