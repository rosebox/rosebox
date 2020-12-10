import { Duration, Length, RBType, serializeAtomicValue } from '../core'

export const camelCaseToDash = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export const isObject = (value: any) => Object.prototype.toString.call(value) === '[object Object]'

export function toNum(x: Duration): number
export function toNum(x: Length): number
export function toNum(x: any): number {
    return x.data
}

export const serializeShorthandleValue = <A>(value: (RBType<A> | string | number)[]): string => {
    return (value.reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '') as string).trim()
}

export type ArrayMin2Max4<T> =
    | {
          0: T
          1: T
      }
    | {
          0: T
          1: T
          2: T
      }
    | {
          0: T
          1: T
          2: T
          3: T
      }
