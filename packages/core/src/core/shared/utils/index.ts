export * from './math'

export const serializeHashMultiplier = <A>(x: A[], serializer: (x: A) => string): string => {
    return x.reduce<string>((acc, item, idx) => {
        const itemSerialized = serializer(item)
        return idx !== x.length - 1 ? acc + `${itemSerialized}, ` : acc + itemSerialized
    }, '')
}

export const serializeDoubleBar = <A>(x: A[], serializer?: (x: A) => string): string =>
    x.reduce((acc: string, item) => acc + ' ' + (serializer ? serializer(item) : item), '').trim()
