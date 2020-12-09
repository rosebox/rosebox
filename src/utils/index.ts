import { Duration, Length, RBType, serializeAtomicValue } from '../core'

export const isObject = (value: any) => Object.prototype.toString.call(value) === '[object Object]'

export function toNum(x: Duration): number
export function toNum(x: Length): number
export function toNum(x: any): number {
    return x.data
}

export const serializeShorthandleValue = <A>(value: (RBType<A> | string | number)[]): string => {
    return (value.reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '') as string).trim()
}
