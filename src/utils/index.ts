import { Duration, Length } from '../core'

export const isObject = (value: any) => Object.prototype.toString.call(value) === '[object Object]'

export function toNum(x: Duration): number
export function toNum(x: Length): number
export function toNum(x: any): number {
    return x.data
}
